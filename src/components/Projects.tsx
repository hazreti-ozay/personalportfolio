"use client";

import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Bölüm Başlığı */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Öne Çıkan <span className="text-purple-500">Çalışmalarım</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Fikir aşamasından son ürüne kadar geliştirdiğim bazı projeler. Her
          biri yeni bir teknolojiyi öğrenme yolculuğumun parçası.
        </p>
      </motion.div>

      {/* Kartların Listelendiği Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
