import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">About GameHub</h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>GameHub</strong> is your go-to online game library for exploring,
          discovering, and supporting creative game developers. Our platform
          allows you to browse top-rated indie games, view details, and even
          install your favorites to your own collection.
        </p>

        <h2 className="text-2xl font-semibold mb-3">🎮 What We Offer</h2>
        <ul className="text-gray-400 space-y-2">
          <li>✔ Browse and discover trending indie games</li>
          <li>✔ View detailed information including genre, rating & release year</li>
          <li>✔ Install your favorite games to your personal list</li>
          <li>✔ Fully responsive and built with React, Vite & Firebase</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Technologies Used</h2>
        <p className="text-gray-400">
          React • React Router • Tailwind CSS • DaisyUI • Motion • Firebase • React Toastify
        </p>
      </motion.div>
    </div>
  );
};

export default About;