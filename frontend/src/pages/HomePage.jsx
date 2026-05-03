import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TechStackSection from "../components/sections/TechStackSection";
import useTheme from "../hooks/useTheme";
import fallbackProjects from "../data/fallbackProjects";
import { fetchProjects, submitContact } from "../utils/api";
import { validateContactForm } from "../utils/helpers";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const getContactSubmitErrorMessage = (error) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  if (error?.code === "ERR_NETWORK" || !error?.response) {
    return "Unable to reach the backend API. Check the API URL and make sure the backend is running.";
  }

  return "Something went wrong while sending your message.";
};

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState("");
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setProjectsLoading(true);
        const data = await fetchProjects();
        setProjects(Array.isArray(data) ? data : fallbackProjects);
      } catch (error) {
        setProjects(fallbackProjects);
        setProjectsError(
          error?.response?.data?.message || "Unable to load projects from the backend right now.",
        );
      } finally {
        setProjectsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setFormErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    try {
      setSubmitState({ status: "loading", message: "Sending your message..." });
      await submitContact(formData);
      setSubmitState({ status: "success", message: "Thanks for reaching out. I’ll get back to you soon." });
      setFormData(initialFormState);
      setFormErrors({});
    } catch (error) {
      const backendErrors = error?.response?.data?.errors || [];
      const nextErrors = backendErrors.reduce((accumulator, item) => {
        accumulator[item.field] = item.message;
        return accumulator;
      }, {});

      setFormErrors(nextErrors);
      setSubmitState({
        status: "error",
        message: getContactSubmitErrorMessage(error),
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Manish Washimkar | MERN Stack Developer</title>
        <meta
          name="description"
          content="Manish Washimkar's MERN stack developer portfolio featuring projects, experience, and a MongoDB-backed contact form."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection projects={projects} isLoading={projectsLoading} error={projectsError} />
          <ExperienceSection />
          <ContactSection
            formData={formData}
            formErrors={formErrors}
            submitState={submitState}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
