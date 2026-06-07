/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  experimental: {
    automaticallyCopyHtmlAndAssets: true, // <-- Ajoute automatiquement le CSS/Assets au dossier standalone
  },
};

export default nextConfig;
