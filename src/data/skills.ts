export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillData: SkillCategory[] = [
  {
    title: "Frontend & UI Tasarım",
    skills: [
      "Next.js 14",       // Sürüm belirtmek kendine güveni gösterir
      "React",
      "TypeScript",       // Frontend'in belkemiği olduğu için burada
      "Tailwind CSS",
      "Framer Motion",
      "Figma",            // Tasarım aracı Frontend ile yan yana durmalı
      "Responsive Tasarım", // Mobil uyumluluk vurgusu
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Node.js",
      "Firebase (Auth, Firestore, Storage)",         // Auth ve DB'yi kapsar
      "Discord.js",       // Bot geliştirme yeteneği
      "REST API",
      "Git & GitHub",     // Kod yönetimi burada durmalı
      "Vercel",           // Deploy süreci
    ],
  },
  {
    title: "Oyun Geliştirme (Game Dev)",
    skills: [
      "Unity Engine",
      "Godot Engine",
      "C#",               // Unity'nin dili, burada olması mantıklı
      "GDScript",         // Godot'un dili
      "Oyun Mekaniği",    // Sadece kod değil, mantık kurduğunu da gösterir
      "FL Studio",        // Oyun müzikleri/sesleri için burada durması çok şık
    ],
  },
  {
    title: "Programlama Dilleri & Core",
    skills: [
      "JavaScript (ES6+)", // Temel dil
      "Python",           // Veri/Scripting için
      "HTML & CSS",      // Web'in yapı taşları
      "C",                // Temel algoritma bilgisi
      "Algoritma & Veri Yapıları", // Mühendislik temelini vurgular
    ],
  },
];