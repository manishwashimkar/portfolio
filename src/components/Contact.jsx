import React from "react";
import Container from "./commen/Container";


function Contact() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:manishwashimkar45@gmail.com"
            className="text-blue-600 hover:underline"
          >
            manishwashimkar45@gmail.com
          </a>
        </p>
      </Container>
    </section>
  );
}

export default Contact;
