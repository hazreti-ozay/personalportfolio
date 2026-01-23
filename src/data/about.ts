// Önce kuralları (Type) tanımladım
export interface AboutItem {
  title: string;
  description: string;
  place?: string; // Soru işareti (?) buranın zorunlu olmadığını belirtir
  year?: string;  // Soru işareti (?) buranın zorunlu olmadığını belirtir
}

export interface AboutTab {
  id: string;
  label: string;
  content: AboutItem[];
}

export interface AboutData {
  title: string;
  description: string;
  tabs: AboutTab[];
}

export const aboutData: AboutData = {
  title: "Beni Biraz Daha Tanıyın",
  description: "Yazılım geliştirmek benim için sadece kod yazmak değil, aynı zamanda sürekli öğrenmek ve üretmek demek. İşte yolculuğumdan bazı duraklar.",

  tabs: [
    {
      id: "education",
      label: "Eğitim",
      content: [
        {
          title: "Yönetim Bilişim Sistemleri Lisans Programı",
          place: "Ankara Yıldırım Beyazıt Üniversitesi",
          year: "2018 - 2025",
          description: "Yönetim bilişim sistemleri alanında teorik ve pratik bilgiler edinerek, iş dünyasında teknoloji yönetimi konularında kendimi geliştirdim."
        },
        {
          title: "Bilgisayar Programcılığı Ön Lisans Programı",
          place: "Anadolu Üniversitesi Açıköğretim Fakültesi",
          year: "2023 - ",
          description: "Bilgisayar programcılığı temelleri ve uygulamalı yazılım geliştirme dersleri konusunda kendimi geliştiriyorum."
        },
        {
          title: "Lise Eğitimi",
          place: "Çankırı TOBB Fen Lisesi",
          year: "2014 - 2018",
          description: "Fen bilimleri ağırlıklı eğitim alarak analitik düşünme ve problem çözme becerilerimi geliştirdim."
        }
      ]
    },
    {
      id: "experience",
      label: "Deneyim & Gönüllülük",
      content: [
        {
          title: "Gönüllü Geliştirici",
          place: "Cemiyet-i Perdaz Topluluğu",
          year: "2024 - Günümüz",
          description: "Topluluk için Discord botları ve etkinlik sayfaları geliştiriyorum."
        },
        {
          title: "Ad Quality Rater",
          place: "Welo Data Inc.",
          year: "2022 - Günümüz",
          description: "Welo Data Inc. için, Google EWOQ üzerinden reklam içeriklerinin kalite değerlendirmesini yapıyorum."
        }
      ]
    },
    {
      id: "hobbies",
      label: "Hobiler & İlgi Alanları",
      content: [
        {
          title: "FRP & Masaüstü Rol Yapma Oyunları",
          description: "Rol yapma oyunları oynuyor ve oynatıyorum ve bu hobimi dijital araçlarla destekliyorum. Aynı zamanda arkadaşlarımla birlikte oluşturduğumuz bir TTRPG oynadığımız bir topluluğun moderatörlüğünü yapıyorum."
        },
        {
          title: "Dijital Oyunlar & Oyun Geliştirme",
          description: "Video oyunları oynamak ve oyun geliştirme süreçlerini incelemek büyük bir ilgi alanım. Kendi küçük oyun projelerimi de yapmayı seviyorum."
        },
        {
          title: "Yazılım Geliştirme",
          description: "Yeni teknolojiler öğrenmek ve projeler geliştirmek en büyük tutkularımdan biri. Ayrıca bu tutkumu farklı dilleri öğrenerek ve çeşitli projelerde uygulayarak besliyorum."
        },
        {
          title: "Ekonomi ve Ekonomi Tarihi",
          description: "Ekonomi ve ekonomi tarihi konularına ilgi duyuyorum. Farklı ekonomik sistemleri ve tarih boyunca yaşanan ekonomik olayları incelemek ve okumalar yapmak rutinimin bir parçası.",
        },
        {
          title: "Dijital Müziik Üretimi",
          description: "Müzik üretimi ile ilgileniyorum ve FL Studio kullanarak dijital müzikler yapıyorrum.",
        }
      ]
    }
  ]
};