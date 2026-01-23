"use client"; // Animasyon olduğu için bu satır şart (Client Component)

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Arkaplan Efekti (Opsiyonel süsleme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/20 rounded-full blur-[100px] -z-10" />

      {/* Ana Başlık Animasyonu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-lg md:text-xl text-blue-400 font-medium mb-4">
          Merhaba, Ben Özay..
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Modern Web <br />
          <span className="text-gray-400">Geliştirici.</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-8 leading-relaxed">
          Fikirleri dijital gerçekliğe dönüştüren, kullanıcı odaklı ve yenilikçi
          web uygulamaları geliştiren bir yazılım geliştiricisiyim.
        </p>
      </motion.div>

      {/* Buton Animasyonu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-400 text-black rounded-full font-semibold hover:bg-blue-300 transition-colors"
        >
          Projelerimi Gör
          <ArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}
