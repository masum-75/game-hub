import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, title: "Ghost Of Yotei", subtitle: "Pre-order now", image: "https://i.ibb.co/xXKc8N8/witcher3.jpg" },
  { id: 2, title: "Elden Ring", subtitle: "Now Available", image: "https://i.ibb.co/kDS1Svs/eldenring.jpg" },
  { id: 3, title: "God Of War Ragnarok", subtitle: "New Content", image: "https://i.ibb.co/4Zk8HgK/gowragnarok.jpg" },
];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      
      <div className="col-span-9 relative rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96">
              <img
                src={slides[index].image}
                alt={slides[index].title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute left-8 top-16 text-white max-w-md">
                <h2 className="text-3xl font-bold">{slides[index].title}</h2>
                <p className="mt-4 text-lg">{slides[index].subtitle}</p>
                <button className="btn btn-primary mt-4">Pre-Order Now</button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      
      <aside className="col-span-3">
        <div className="bg-[#111] p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-white">Top 3 Games</h3>
          {slides.map((s) => (
            <div
              key={s.id}
              className="flex gap-3 items-center py-2 border-b border-gray-800 last:border-none"
            >
              <img src={s.image} className="w-16 h-16 object-cover rounded" alt={s.title} />
              <div>
                <p className="text-sm text-white">{s.title}</p>
                <p className="text-xs text-purple-400">$400.00</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default BannerSlider;
