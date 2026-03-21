import Project from "../models/Project.js";
import defaultProjects from "../utils/defaultProjects.js";

export const getProjects = async (_req, res, next) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

    res.status(200).json({
      success: true,
      data: projects.length > 0 ? projects : defaultProjects,
    });
  } catch (error) {
    next(error);
  }
};

