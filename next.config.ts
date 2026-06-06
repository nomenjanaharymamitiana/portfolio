/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Génère proprement le dossier requis pour Render
  
  // Pour éviter l'erreur sur __dirname en ES Modules, nous le retirons du bloc de configuration
  // Next.js détecte nativement la racine du projet lorsque output standalone est activé.
};

export default nextConfig;
