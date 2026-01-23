"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

interface Props {
  project: Project;
  index: number; // Animasyon sırası için gerekli
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Kartlar sırayla gelsin diye
      viewport={{ once: true }}
      className="group relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
    >
      {/* 1. Görsel Alanı */}
      <div className="h-48 overflow-hidden bg-neutral-800 relative">
        {/* Resim varsa göster, yoksa ikon göster */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-700">
            <Code2 size={48} />
          </div>
        )}

        {/* Resmin üzerindeki siyah perde (hover olunca kalkar) */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
      </div>

      {/* 2. İçerik Alanı */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Teknolojiler (Etiketler) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Linkler */}
        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} /> Kodlar
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-200 transition-colors"
            >
              <ExternalLink size={16} /> Canlı Proje
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
