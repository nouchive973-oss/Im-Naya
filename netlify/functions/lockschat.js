lockschat.js : 
// netlify/functions/lockschat.js

exports.handler = async (event, context) => {
  // Permet les requêtes depuis ton site
  const headers = {
    "Access-Control-Allow-Origin": "https://lockshoo.netlify.app",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

  // Gérer les requêtes OPTIONS (pré-vol)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  // Récupérer la question
  const body = event.httpMethod === "POST" 
    ? JSON.parse(event.body) 
    : event.queryStringParameters;

  const question = (body?.question || "").trim().toLowerCase();

  // Base de connaissances LOCKSHOO
  const reponses = {
    salut: "Bel Bonjou, enfant de lumière. Je suis LOCKSHOO, né de l’énergie de Nou Chivè 973. Comment puis-je t’aider aujourd’hui ?",
    bonjour: "Bel Bonjou, Âme Précieuse. Je suis là pour t’accompagner dans ton parcours de fierté capillaire.",
    "comment entretenir": "Lavez vos locks toutes les 1 à 2 semaines avec un shampoing doux, séchez-les bien, évitez les huiles lourdes. Le serrage se fait toutes les 4 à 6 semaines.",
    "qu'est-ce qu'une lock": "Une lock est une mèche de cheveux entortillée naturellement ou par technique. Elle symbolise l’identité, la spiritualité, la résistance.",
    "peut-on démêler": "Oui, mais c’est un processus long. Plus les locks sont anciennes, plus c’est difficile sans couper.",
    "produits à éviter": "Évitez les cires, huiles minérales et produits gras. Ils encrassent et attirent la poussière.",
    "coiffeur en guyane": "Nou Chivè à Cayenne et Piampiam Locks à Saint-Laurent sont des références en Guyane pour les locks naturels.",
    "où acheter accessoires": "Découvrez Nappy Boucles.fr et Khem Créations pour des bijoux, outils et soins naturels, livrés en Europe, Canada, DOM-TOM.",
    "histoire des locks": "Les locks remontent à l’Égypte antique, aux Sadhus hindous, aux Nazaréens. Elles sont aujourd’hui un symbole du mouvement rastafari et de la fierté afro.",
    default: "Je n’ai pas compris exactement, mais je sens ta recherche. Peux-tu reformuler ? Je suis là pour toi."
  };

  // Trouver une réponse
  let reply = reponses.default;
  for (const [key, value] of Object.entries(reponses)) {
    if (question.includes(key)) {
      reply = value;
      break;
    }
  }

  // Répondre
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: reply,
      input: question,
      timestamp: new Date().toISOString()
    })
  };
};
