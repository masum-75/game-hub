import React, { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 — Gamehub";
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 drop-shadow-lg"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-300 mb-8"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-none text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Go Back Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
