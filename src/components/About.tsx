"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import { Calendar, MapPin } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("education"); // Varsayılan olarak Eğitim açık

  // Aktif sekmenin içeriğini bul
  const activeContent = aboutData.tabs.find(
    (tab) => tab.id === activeTab,
  )?.content;

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hakkımda</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Sekme Butonları */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {aboutData.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* İçerik Alanı */}
        <div className="grid gap-6">
          {activeContent?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-neutral-900 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                {/* Eğer yıl veya yer bilgisi varsa göster */}
                {(item.place || item.year) && (
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {"place" in item && item.place && (
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {item.place}
                      </span>
                    )}
                    {item.year && (
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {item.year}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}