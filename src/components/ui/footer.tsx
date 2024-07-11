//Helpers
import { contactInformation } from "@/helpers";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-between py-6">
      <div className="text-sm sm:text-md text-dark dark:text-gray-300 space-x-2">
        <span>© {new Date().getFullYear()} Made with 🩷 by Jean Carbone</span>
      </div>

      <div className="flex flex-row items-center space-x-4 sm:space-x-6">
        {contactInformation.map((info) =>
          info.title.includes("Linkedin") || info.title.includes("Github") ? (
            <a
              key={info.link}
              target="_blank"
              rel="noopener noreferrer"
              href={info.link}
              className="hover:scale-125 transition duration-200"
              aria-label={info.title}
            >
              {info.icon}
            </a>
          ) : null
        )}
      </div>
    </footer>
  );
};
