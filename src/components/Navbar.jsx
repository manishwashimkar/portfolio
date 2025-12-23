import Container from "./commen/Container";
import React from "react";

function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white">
      <Container>
        <nav className="flex justify-between items-center h-14">
          <span className="font-semibold">Manish</span>

          <ul className="flex gap-6 text-sm text-gray-700">
            <li>
              <a href="#home" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-black">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
