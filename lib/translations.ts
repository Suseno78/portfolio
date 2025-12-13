export type Language = 'en' | 'id' | 'jp' | 'es';

export interface Translations {
  hero: {
    title: string;
    tagline: string;
    cta1: string;
    cta2: string;
  };
  about: {
    title: string;
    bio: string;
    techTitle: string;
  };
  projects: {
    title: string;
    viewDetails: string;
    close: string;
  };
  skills: {
    title: string;
    tools: string;
    backend: string;
    frontend: string;
    aiAutomation: string;
    cloudDb: string;
  };
  contact: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  socials: {
    title: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: "I'm Senz — Junior Software Developer & Designer",
      tagline: "Santai, simple, tapi produktif. Building cool stuff.",
      cta1: "View Projects",
      cta2: "Contact Me"
    },
    about: {
      title: "About Me",
      bio: "Hey! I'm Wahyu Hari Suseno, but just call me Senz. I'm a 18-year-old developer who loves keeping things chill and simple. I'm passionate about coding, design, and building projects that actually matter. My vibe? Productive without the stress.",
      techTitle: "Tech I Use"
    },
    projects: {
      title: "My Projects",
      viewDetails: "View Details",
      close: "Close"
    },
    skills: {
      title: "Skills & Experience",
      tools: "Tools",
      backend: "Backend",
      frontend: "Frontend",
      aiAutomation: "AI / Automation",
      cloudDb: "Cloud / Database"
    },
    contact: {
      title: "Let's Connect",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Failed to send message. Please try again."
    },
    socials: {
      title: "Find Me On"
    },
    footer: {
      text: "Designed & Built by Senz"
    }
  },
  id: {
    hero: {
      title: "Saya Senz — Junior Software Developer & Designer",
      tagline: "Santai, simple, tapi produktif. Bikin hal-hal keren.",
      cta1: "Lihat Proyek",
      cta2: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      bio: "Halo! Saya Wahyu Hari Suseno, tapi panggil aja Senz. Umur 18 tahun, suka coding dan design. Prinsip saya sederhana: produktif tanpa ribet.",
      techTitle: "Teknologi yang Saya Pakai"
    },
    projects: {
      title: "Proyek Saya",
      viewDetails: "Lihat Detail",
      close: "Tutup"
    },
    skills: {
      title: "Kemampuan & Pengalaman",
      tools: "Tools",
      backend: "Backend",
      frontend: "Frontend",
      aiAutomation: "AI / Automasi",
      cloudDb: "Cloud / Database"
    },
    contact: {
      title: "Ayo Ngobrol",
      namePlaceholder: "Nama Kamu",
      emailPlaceholder: "Email Kamu",
      messagePlaceholder: "Pesan Kamu",
      submit: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil dikirim! Akan saya balas segera.",
      error: "Gagal mengirim pesan. Coba lagi ya."
    },
    socials: {
      title: "Temukan Saya Di"
    },
    footer: {
      text: "Dirancang & Dibangun oleh Senz"
    }
  },
  jp: {
    hero: {
      title: "僕はSenz — ジュニアソフトウェア開発者＆デザイナー",
      tagline: "リラックス、シンプル、でも生産的。クールなものを作る。",
      cta1: "プロジェクトを見る",
      cta2: "連絡する"
    },
    about: {
      title: "自己紹介",
      bio: "こんにちは！Wahyu Hari Susenoですが、Senzと呼んでください。18歳の開発者で、シンプルで落ち着いたスタイルが好きです。コーディングとデザインに情熱を持っています。",
      techTitle: "使用している技術"
    },
    projects: {
      title: "プロジェクト",
      viewDetails: "詳細を見る",
      close: "閉じる"
    },
    skills: {
      title: "スキル＆経験",
      tools: "ツール",
      backend: "バックエンド",
      frontend: "フロントエンド",
      aiAutomation: "AI / 自動化",
      cloudDb: "クラウド / データベース"
    },
    contact: {
      title: "連絡しましょう",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "メッセージ",
      submit: "送信",
      sending: "送信中...",
      success: "メッセージが送信されました！すぐに返信します。",
      error: "メッセージの送信に失敗しました。もう一度お試しください。"
    },
    socials: {
      title: "SNS"
    },
    footer: {
      text: "デザイン＆開発：Senz"
    }
  },
  es: {
    hero: {
      title: "Soy Senz — Desarrollador Junior & Diseñador",
      tagline: "Tranquilo, simple, pero productivo. Construyendo cosas geniales.",
      cta1: "Ver Proyectos",
      cta2: "Contáctame"
    },
    about: {
      title: "Sobre Mí",
      bio: "¡Hola! Soy Wahyu Hari Suseno, pero llámame Senz. Tengo 18 años y me encanta mantener las cosas tranquilas y simples. Me apasiona programar, diseñar y crear proyectos que realmente importan.",
      techTitle: "Tecnologías que Uso"
    },
    projects: {
      title: "Mis Proyectos",
      viewDetails: "Ver Detalles",
      close: "Cerrar"
    },
    skills: {
      title: "Habilidades y Experiencia",
      tools: "Herramientas",
      backend: "Backend",
      frontend: "Frontend",
      aiAutomation: "IA / Automatización",
      cloudDb: "Nube / Base de Datos"
    },
    contact: {
      title: "Conectemos",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Email",
      messagePlaceholder: "Tu Mensaje",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "Error al enviar el mensaje. Por favor intenta de nuevo."
    },
    socials: {
      title: "Encuéntrame En"
    },
    footer: {
      text: "Diseñado y Construido por Senz"
    }
  }
};
