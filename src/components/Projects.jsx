import { useState } from "react";
import image1Image from "../assets/image1_main.png";
import image2Image from "../assets/image2_blog.png";
import admin1Image from "../assets/admin_1.png";
import admin2Image from "../assets/admin_2.png";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="py-5">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Most Recent Project
      </h2>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-6 py-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">MyBlogApi</h3>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-5">
          <div className="space-y-4 flex justify-center">
            <div className="max-w-[400px] overflow-hidden">
              <img
                src={image1Image}
                alt="Image of main page of blog"
                className="w-full h-auto rounded-lg border-gray-300 border"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-4 indent-8">
              This project is a full-stack blog application that utilizes my
              Express.js API that includes JWT authentication provided in secure
              HTML only cookies. The project features two distinct frontends: a
              user-facing frontend for viewing blogs and an admin dashboard for
              creating, editing, and managing blog content. The admin panel uses
              React Markdown Editor to edit and create blogs providing the
              potential for rich stylization, while ensuring that the content is
              sanitized before being displayed to users.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>JWT authentication for user and admin routes</li>
              <li>
                Admin dashboard used for editing and updating blog content
              </li>
              <li>
                React Markdown Editor integration for rich-text editing of blogs
              </li>
              <li>Content sanitization to prevent XSS attacks</li>
              <li>Responsive and user-friendly UI</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-8 justify-center">
          <a
            href="https://github.com/chochimus/MyBlogApi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repo for API
          </a>
          <a
            href="https://precious-gingersnap-800886.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        </div>
        <p className="text-center mt-10 text-sm font-bold">More images</p>
        <div className="mt-5 flex space-x-4 justify-center">
          <div className="rounded-lg overflow-hidden border-gray-300 border shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
            <img
              src="src/assets/image2_blog.png"
              alt="Blog content view"
              className="w-24 h-24 object-contain cursor-pointer"
              onClick={() => handleImageClick(`${image2Image}`)}
            />
          </div>
          <div className="rounded-lg overflow-hidden border-gray-300 border shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
            <img
              src="src/assets/admin_1.png"
              alt="Admin dashboard view 1"
              className="w-24 h-24 object-contain cursor-pointer"
              onClick={() => handleImageClick(`${admin1Image}`)}
            />
          </div>
          <div className="rounded-lg overflow-hidden border-gray-300 border shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
            <img
              src="src/assets/admin_2.png"
              alt="Admin dashboard view 2"
              className="w-24 h-24 object-contain cursor-pointer"
              onClick={() => handleImageClick(`${admin2Image}`)}
            />
          </div>
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-md"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Projects;
