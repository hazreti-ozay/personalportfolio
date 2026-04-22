import { Project } from "@/types"; // Az önce oluşturduğumuz kalıbı çağırdım

export const projects: Project[] = [
  {
    id: 1,
    title: "Cemiyet-i Perdaz Dijital Müzesi",
    description: "Next.js ve Firebase tabanlı, topluluk odaklı dijital sanat arşivi.",
    tech: ["Next.js 14", "Firestore", "Tailwind CSS"],
    // github alanını sildik veya undefined yaptık
    link: "https://cemiyetiperdazmuze.vercel.app/",
    image: "/projects/cemiyet.jpg",
  },
  {
    id: 4, // Yeni ID
    title: "Kuir Anıt (Queer Monument)",
    description: "Nefret suçlarına karşı dijital toplumsal hafıza mekânı. Siber güvenlik odaklı mimari ve Next.js 14 ile geliştirilmiş saygı duruşu.",
    tech: ["Next.js 14", "Firebase App Check", "reCAPTCHA v3", "Tailwind CSS"],
    // github alanını yazmıyoruz (Private olduğu için)
    link: "https://kuiranit.me/", // Projenin canlı bağlantısı
    image: "/projects/kuiranit.png",
  },
  {
    id: 2,
    title: "Fate RPG Yardımcı Aracı",
    description: "Fate Core oyun sistemi için geliştirdiğim, karakter kağıdı yönetimi ve zar atma özelliklerine sahip web tabanlı yardımcı araç.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
    github: "https://github.com/hazreti-ozay/faterollerdenemesi",
    link: "https://hazreti-ozay.github.io/faterollerdenemesi/",
    image: "/projects/fate.jpg",
  },
  {
    id: 3, // Sıradaki ID
    title: "Retro Snake Emulator", //
    description: "Nokia 3310 Yılan oyununun web teknolojileriyle geliştirilmiş ve modernleştirilmiş nostaljik bir 'Vibe Coding' projesi.",
    tech: ["React (Vite)", "Tailwind CSS v4", "CSS Animations", "Custom Hooks"], //
    github: "https://github.com/hazreti-ozay/snakeforcan", //
    link: "https://snakeforcan.vercel.app/", //
    image: "/projects/snakeforcan.png", // Birazdan ekleyeceğimiz görselin yolu
  }
];