// Burası benim "Kalıbım".
// Her projenin bu şablona uyması gerekecek.

export interface Project {
  id: number;
  title: string;       // Projenin adı
  description: string; // Kısa açıklaması
  tech: string[];      // Kullandığın teknolojiler (Dizi halinde)
  link?: string;       // Canlı proje linki (Opsiyonel - ? işareti koyduk)
  github?: string;     // GitHub linki (Opsiyonel)
  image: string;       // Proje görselinin yolu
}