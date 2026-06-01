import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "RopWala Ashta Training Center - Modern Nursery & Farming",
  description = "Start your profitable modern nursery business with RopWala's expert guidance. Learn high-yield farming, setup low-cost nurseries, and get lifetime support.",
  keywords = "RopWala, Ashta Training Center, Modern Nursery, Farming Training, Agriculture Business, Maharashtra Farmers, Nursery Setup",
  image = "https://astroraajpatil.in/music/logo.svg",
  url = "https://ropwala.com"
}: SEOProps) {
  const { language } = useLanguage();

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
