// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SVARA TechFusion Private Limited",
  "alternateName": "SVARA",
  "url": "https://www.svaratechfusion.com",
  "logo": "https://www.svaratechfusion.com/logo.png",
  "description": "AI Infrastructure & Enterprise Intelligence Platform. Building Vision AI, Edge AI, AI Agents, Digital Twin, and AI OS for enterprises.",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-132, Begampet, Rachloor, Kandukur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "501359",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXX-XXX-XXXX",
    "contactType": "Customer Service",
    "email": "contact@svaratechfusion.com",
    "areaServed": "IN",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://x.com/SvaraTechfusion",
    "https://www.instagram.com/svaratechfusion/",
    "https://www.linkedin.com/company/svara-techfusion/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Sindhu Varikuppala"
  }
};

// Software Product Schema
export const productSchemas = {
  visionAI: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SVARA Vision AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "description": "Enterprise computer vision platform for real-time object detection, facial recognition, and behavioral analytics.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "SVARA TechFusion"
    }
  },
  edgeAI: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SVARA Edge AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Edge Computing",
    "description": "Deploy AI models directly on edge devices with local inference and real-time processing capabilities.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "SVARA TechFusion"
    }
  },
  aiOS: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SVARA AI OS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "description": "Unified AI operating system for enterprise operations with natural language control and workflow automation.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "SVARA TechFusion"
    }
  },
  digitalTwin: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SVARA Digital Twin",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "description": "Create living digital replicas of physical systems with 3D modeling, IoT integration, and predictive analytics.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "SVARA TechFusion"
    }
  }
};

// WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SVARA TechFusion",
  "url": "https://www.svaratechfusion.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.svaratechfusion.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Blog Article Schema Generator
export const generateBlogArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  category: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author || "SVARA TechFusion"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SVARA TechFusion",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.svaratechfusion.com/logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://www.svaratechfusion.com/og-image.png",
    "url": article.url,
    "articleSection": article.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};

// Blog Page Schema
export const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "SVARA TechFusion Blog",
  "description": "Insights on AI infrastructure, enterprise automation, and intelligent systems",
  "url": "https://www.svaratechfusion.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "SVARA TechFusion"
  }
};
