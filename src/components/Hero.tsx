import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/1a437a0b-393f-4e6a-907d-adbd5528fd34/files/d7745a8f-0c83-4f55-afc9-2607a2e36d42.jpg"
          alt="Производство корпусной мебели"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 uppercase">
          ПРОИЗВОДИМ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Корпусная мебель по индивидуальным размерам для магазинов, застройщиков и дизайнеров
        </p>
        <div className="mt-10">
          <button className="bg-white text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
            Стать партнёром
          </button>
        </div>
      </div>
    </div>
  );
}