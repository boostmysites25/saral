// SEO Data for all pages
export const seoData = {
  home: {
    title: "SARAL - Leading Technology Solutions & Digital Innovation Company",
    description: "SARAL is a premier technology solutions company specializing in AI development, web development, app development, blockchain, data science, and more. We build world-class solutions to help your business evolve and reach the top.",
    keywords: "technology solutions, AI development, web development, app development, blockchain development, data science, machine learning, software development, digital innovation, IT services, Pune, India",
    canonical: "/",
    ogImage: "/logo.jpeg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SARAL",
      "url": "https://saral-labs.com",
      "logo": "https://saral-labs.com/logo.jpeg",
      "description": "Leading technology solutions company specializing in AI, web development, app development, and blockchain solutions.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "T5-3rd floor, The Highlands, Forest Trails, Bhugaon",
        "addressLocality": "Pune",
        "postalCode": "412115",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9029692185",
        "contactType": "customer service",
        "email": "contact@saral-labs.com"
      },
      "sameAs": [
        "https://www.linkedin.com/company/sarallabs/",
        "https://www.instagram.com/saral_labs/",
        "https://x.com/Saral_labs"
      ]
    }
  },

  about: {
    title: "About SARAL - Our Story, Mission & Technology Expertise",
    description: "Learn about SARAL's journey, mission, and expertise in technology solutions. We're your trusted partners in digital transformation, delivering innovative solutions with a people-first approach.",
    keywords: "about SARAL, technology company, digital transformation, software development company, IT services, Pune tech company, SARAL mission, company history",
    canonical: "/about-us",
    ogImage: "/src/assets/images/aboutusbanner.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About SARAL",
      "description": "Learn about SARAL's journey, mission, and expertise in technology solutions."
    }
  },

  services: {
    title: "Technology Services - AI, Web Development, App Development & More | SARAL",
    description: "Comprehensive technology services including AI development, web development, app development, blockchain, data science, cloud computing, and more. Custom solutions tailored to your business needs.",
    keywords: "technology services, AI development, web development, app development, blockchain development, data science, cloud computing, machine learning, software services, IT consulting",
    canonical: "/services",
    ogImage: "/src/assets/images/servicesbanner.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Technology Services",
      "provider": {
        "@type": "Organization",
        "name": "SARAL"
      },
      "description": "Comprehensive technology services including AI, web development, app development, and more."
    }
  },

  portfolio: {
    title: "Portfolio - Our Work & Success Stories | SARAL",
    description: "Explore SARAL's portfolio of successful projects across web development, app development, blockchain, AI, and more. See how we've helped businesses achieve their digital goals.",
    keywords: "portfolio, web development projects, app development projects, blockchain projects, AI projects, case studies, success stories, client work",
    canonical: "/portfolio",
    ogImage: "/logo.jpeg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "SARAL Portfolio",
      "description": "Portfolio of successful technology projects and solutions."
    }
  },

  blogs: {
    title: "Blog - Technology Insights & Industry Updates | SARAL",
    description: "Stay updated with the latest technology trends, industry insights, and expert perspectives from SARAL's technology blog. Read about AI, blockchain, web development, and more.",
    keywords: "technology blog, AI blog, blockchain blog, web development blog, tech insights, industry updates, digital transformation blog",
    canonical: "/blogs",
    ogImage: "/logo.jpeg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "SARAL Technology Blog",
      "description": "Technology insights and industry updates from SARAL."
    }
  },

  contact: {
    title: "Contact SARAL - Get in Touch for Technology Solutions",
    description: "Contact SARAL for your technology needs. Get in touch with our experts for AI development, web development, app development, and other technology solutions. Located in Pune, India.",
    keywords: "contact SARAL, technology consulting, IT services contact, Pune tech company, get quote, technology solutions contact",
    canonical: "/contact-us",
    ogImage: "/src/assets/images/contactusbanner1.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact SARAL",
      "description": "Get in touch with SARAL for technology solutions and consulting."
    }
  }
};

// Service-specific SEO data
export const serviceSeoData = {
  "blockchain-development": {
    title: "Blockchain Development Services - Smart Contracts & DApps | SARAL",
    description: "Expert blockchain development services including smart contracts, decentralized applications (DApps), cryptocurrency wallets, and blockchain integration. Secure, transparent, and scalable solutions.",
    keywords: "blockchain development, smart contracts, DApps, cryptocurrency wallets, blockchain integration, Ethereum, Hyperledger, decentralized applications",
    canonical: "/services/blockchain-development",
    ogImage: "/src/assets/images/services/blockchain-development.jpg"
  },

  "game-development": {
    title: "Game Development Services - Mobile & Cross-Platform Games | SARAL",
    description: "Professional game development services for mobile and cross-platform games. From concept to launch, we create engaging, high-performance games with stunning visuals and immersive gameplay.",
    keywords: "game development, mobile games, cross-platform games, Unity, Unreal Engine, game design, mobile app games, game programming",
    canonical: "/services/game-development",
    ogImage: "/src/assets/images/services/game-development.jpg"
  },

  "ai-development": {
    title: "AI Development Services - Machine Learning & Artificial Intelligence | SARAL",
    description: "Cutting-edge AI development services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with intelligent automation.",
    keywords: "AI development, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, deep learning",
    canonical: "/services/ai-development",
    ogImage: "/src/assets/images/services/ai-development.jpg"
  },

  "app-development": {
    title: "App Development Services - iOS, Android & Cross-Platform | SARAL",
    description: "Comprehensive app development services for iOS, Android, and cross-platform applications. Native and hybrid app development with cutting-edge technologies and exceptional user experience.",
    keywords: "app development, iOS development, Android development, mobile apps, cross-platform apps, Flutter, React Native, mobile application development",
    canonical: "/services/app-development",
    ogImage: "/src/assets/images/services/app-development.jpg"
  },

  "ml-services": {
    title: "Machine Learning Services - Predictive Analytics & ML Models | SARAL",
    description: "Advanced machine learning services including predictive analytics, recommendation engines, anomaly detection, and custom ML models. Turn your data into actionable insights.",
    keywords: "machine learning, ML services, predictive analytics, recommendation engines, anomaly detection, data modeling, AI models",
    canonical: "/services/ml-services",
    ogImage: "/src/assets/images/services/ml-services.jpg"
  },

  "rpa": {
    title: "RPA Services - Robotic Process Automation Solutions | SARAL",
    description: "Robotic Process Automation (RPA) services to automate repetitive tasks, streamline operations, and boost efficiency. Custom automation solutions for your business processes.",
    keywords: "RPA, robotic process automation, business process automation, workflow automation, UiPath, Automation Anywhere, process optimization",
    canonical: "/services/rpa",
    ogImage: "/src/assets/images/services/rpa.jpg"
  },

  "cloud-computing": {
    title: "Cloud Computing Services - AWS, Azure & Google Cloud | SARAL",
    description: "Comprehensive cloud computing services on AWS, Azure, and Google Cloud. Cloud architecture, migration, optimization, and managed cloud services for scalable solutions.",
    keywords: "cloud computing, AWS, Azure, Google Cloud, cloud migration, cloud architecture, managed cloud services, cloud optimization",
    canonical: "/services/cloud-computing",
    ogImage: "/src/assets/images/services/cloud-computing.jpg"
  },

  "web-development": {
    title: "Web Development Services - Custom Websites & Web Applications | SARAL",
    description: "Professional web development services including custom websites, e-commerce platforms, web applications, and responsive design. Modern, fast, and SEO-optimized web solutions.",
    keywords: "web development, custom websites, e-commerce websites, web applications, responsive design, frontend development, backend development",
    canonical: "/services/web-development",
    ogImage: "/src/assets/images/services/web-development.jpg"
  },

  "data-science": {
    title: "Data Science Services - Analytics & Business Intelligence | SARAL",
    description: "Comprehensive data science services including data analytics, business intelligence, data visualization, and statistical analysis. Transform raw data into actionable business insights.",
    keywords: "data science, data analytics, business intelligence, data visualization, statistical analysis, big data, data mining, predictive modeling",
    canonical: "/services/data-science",
    ogImage: "/src/assets/images/services/data-science.jpg"
  },

  "nlp": {
    title: "NLP Services - Natural Language Processing Solutions | SARAL",
    description: "Advanced Natural Language Processing (NLP) services including chatbots, sentiment analysis, language translation, and text processing. Bridge the gap between humans and machines.",
    keywords: "NLP, natural language processing, chatbots, sentiment analysis, language translation, text processing, conversational AI",
    canonical: "/services/nlp",
    ogImage: "/src/assets/images/services/nlp.jpg"
  },

  "cloud-migration": {
    title: "Cloud Migration Services - Seamless Cloud Transition | SARAL",
    description: "Expert cloud migration services to help you transition to the cloud seamlessly. Legacy system migration, data migration, and cloud optimization with minimal business disruption.",
    keywords: "cloud migration, legacy migration, data migration, cloud transition, AWS migration, Azure migration, cloud optimization",
    canonical: "/services/cloud-migration",
    ogImage: "/src/assets/images/services/cloud-migration.jpg"
  },

  "ui-ux-design": {
    title: "UI/UX Design Services - User-Centered Design Solutions | SARAL",
    description: "Professional UI/UX design services focused on user experience and interface design. Create intuitive, beautiful, and functional digital experiences that drive engagement and conversions.",
    keywords: "UI/UX design, user experience design, interface design, user research, wireframing, prototyping, design systems, user-centered design",
    canonical: "/services/ui-ux-design",
    ogImage: "/src/assets/images/services/ui-ux-design.jpg"
  },

  "ai-calling-agent": {
    title: "AI Calling Agent Services - Intelligent Voice Automation | SARAL",
    description: "Advanced AI calling agent services for customer service, lead qualification, and appointment scheduling. Natural-sounding voice agents that provide 24/7 customer support.",
    keywords: "AI calling agent, voice automation, customer service automation, lead qualification, appointment scheduling, voice AI, conversational AI",
    canonical: "/services/ai-calling-agent",
    ogImage: "/src/assets/images/services/ai-calling-agent.jpg"
  }
};

// Landing page SEO data
export const landingPageSeoData = {
  "web-development": {
    title: "Web Development Services - Custom Websites & Web Applications | SARAL",
    description: "Professional web development services including custom websites, e-commerce platforms, and web applications. Modern, responsive, and SEO-optimized solutions that drive results.",
    keywords: "web development, custom websites, e-commerce, web applications, responsive design, frontend development, backend development, website design",
    canonical: "/web-development",
    ogImage: "/src/assets/images/web-landing-banner.jpg"
  },

  "app-development": {
    title: "App Development Services - iOS, Android & Cross-Platform Apps | SARAL",
    description: "Expert app development services for iOS, Android, and cross-platform applications. Native and hybrid app development with cutting-edge technologies and exceptional user experience.",
    keywords: "app development, iOS apps, Android apps, mobile development, cross-platform apps, Flutter, React Native, mobile applications",
    canonical: "/app-development",
    ogImage: "/src/assets/images/app-dev-banner.jpg"
  },

  "ai-development": {
    title: "AI Development Services - Machine Learning & Artificial Intelligence | SARAL",
    description: "Cutting-edge AI development services including machine learning, natural language processing, and computer vision. Transform your business with intelligent automation and predictive insights.",
    keywords: "AI development, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, deep learning",
    canonical: "/ai-development",
    ogImage: "/src/assets/images/services/ai-development.jpg"
  },

  "data-science": {
    title: "Data Science Services - Analytics & Business Intelligence | SARAL",
    description: "Comprehensive data science services including data analytics, business intelligence, and predictive modeling. Turn your data into actionable insights for strategic decision-making.",
    keywords: "data science, data analytics, business intelligence, predictive modeling, data visualization, statistical analysis, big data",
    canonical: "/data-science",
    ogImage: "/src/assets/images/services/data-science.jpg"
  },

  "blockchain-development": {
    title: "Blockchain Development Services - Smart Contracts & DApps | SARAL",
    description: "Expert blockchain development services including smart contracts, decentralized applications, and cryptocurrency solutions. Secure, transparent, and scalable blockchain technology.",
    keywords: "blockchain development, smart contracts, DApps, cryptocurrency, Ethereum, Hyperledger, decentralized applications, blockchain technology",
    canonical: "/blockchain-development",
    ogImage: "/src/assets/images/services/blockchain-development.jpg"
  }
};
