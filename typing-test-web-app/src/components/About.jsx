// About.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-screen-xl mx-auto p-6 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">A passionate developer with a love for creating innovative solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img 
              src="https://scontent.fbho4-4.fna.fbcdn.net/v/t39.30808-6/329123945_904884220553026_2645271575104938850_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Djr0ilYlxaEQ7kNvgFqk8IC&_nc_zt=23&_nc_ht=scontent.fbho4-4.fna&_nc_gid=Ae8wCG44hqEellO2ecfhQXS&oh=00_AYAchPe3NgRtSch1fEUbbMgystk4NoLxKNLAs-CfnesM6g&oe=6779998B" 
              alt="Profile Picture" 
              className="rounded-full shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hi, I'm Deepesh Kumar Dehariya</h3>
            <p className="text-lg text-gray-600 mb-4">
              I'm a passionate Full-Stack Developer and an avid problem solver. I specialize in web development using modern technologies like React, Node.js, and Tailwind CSS. I'm always eager to learn new skills and stay updated with the latest trends in the tech world.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              When I'm not coding, you can find me exploring new games, reading tech blogs, or working on personal projects. I believe in writing clean, efficient code and creating user-centric applications that solve real-world problems.
            </p>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800">Skills & Technologies:</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>React.js, Node.js, Tailwind CSS</li>
                <li>JavaScript, HTML, CSS</li>
               
                <li>Git, GitHub, Version Control</li>
                <li>API Development & Integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">Feel free to reach out if you want to connect or collaborate!</p>
          
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.instagram.com/__deepesh_6055" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/deepesh.dehariya.3" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://github.com/deepesh6055" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            <FaGithub size={30} />
          </a>
          <a href="mailto:deepeshdehariya324@gmail.com" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            <FaEnvelope size={30} />
          </a>
          <a href="https://wa.me/+919691632048" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
