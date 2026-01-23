import { Project } from "@/types"; // Az önce oluşturduğumuz kalıbı çağırdım

export const projects: Project[] = [
  {
    id: 1,
    title: "Cemiyet-i Perdaz Dijital Müzesi",
    description: "Next.js ve Firebase tabanlı, Discord entegrasyonuna sahip topluluk odaklı dijital sanat arşivi. Sanatçıların eserlerini sergilediği interaktif bir platform.",
    tech: ["Next.js 14", "Firestore", "Discord.js", "Tailwind CSS"],
    github: "https://github.com/hazreti-ozay/cemiyetiperdazmuze", // Linkim varsa
    link: "https://cemiyetiperdazmuze.vercel.app/", // Varsa canlı link
    image: "/projects/cemiyet.jpg", // Resim eklenecek
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
];