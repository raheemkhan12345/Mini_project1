import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Abdul Rahim
            </h2>

            <p className="text-sm">
              Frontend Developer passionate about building modern,
              responsive and user-friendly web applications using
              React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/raheemkhan12345/Mini_project1" target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-rahim-07224824a/" target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Line */}

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">

          © {new Date().getFullYear()} Abdul Rahim. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;