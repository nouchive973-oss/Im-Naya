
// netlify/functions/uploadPhoto.js

exports.handler = async (event, context) => {
  // ✅ Configuration CORS
  const headers = {
    "Access-Control-Allow-Origin": "https://lockshoo.netlify.app",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // ✅ Gérer les requêtes OPTIONS (pré-vol)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  // ✅ Vérifier que la méthode est POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Méthode non autorisée. Utilisez POST." })
    };
  }

  try {
    // ✅ Parser le corps de la requête
    const body = JSON.parse(event.body || "{}");

    // ✅ Vérifier que les données sont présentes
    if (!body.image || !body.fileName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Données manquantes : image ou nom de fichier." })
      };
    }

    // ✅ Simuler un diagnostic basique (sans stocker la photo)
    const fileName = body.fileName;
    const fileSize = body.fileSize || "inconnu";
    const mimeType = body.mimeType || "image/jpeg";

    // 🔍 Analyse simple (ex: basée sur l'extension ou métadonnées)
    let diagnostic = "Photo reçue. Vos locks semblent en bonne santé. Continuez l'entretien régulier.";
    
    if (fileName.toLowerCase().includes("sec") || fileSize < 100000) {
      diagnostic = "La photo suggère des locks sèches. Essayez un spray hydratant (eau + glycérine végétale).";
    }

    if (fileName.toLowerCase().includes("mèches") || fileName.toLowerCase().includes("défaites")) {
      diagnostic = "Certaines mèches semblent fragilisées. Évitez les manipulations excessives et protégez-les la nuit.";
    }

    // ✅ Réponse personnalisée avec voix de LOCKSHOO
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Photo analysée avec succès (simulation).",
        fileName: fileName,
        fileSize: fileSize,
        mimeType: mimeType,
        diagnostic: diagnostic,
        advice: "Votre beauté naturelle est sacrée. Continuez à la respecter.",
        timestamp: new Date().toISOString(),
        from: "LOCKSHOO — Made for Nou Chivè 973 with Lanmou Soley"
      })
    };

  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ 
        error: "Requête invalide ou JSON incorrect.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined
      })
    };
  }
};
