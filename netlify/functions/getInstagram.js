require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function(event, context) {
  const instagramUserId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // *** AJOUT : Vérification des variables d'environnement ***
  if (!instagramUserId || !accessToken) {
    console.error("Missing Instagram API credentials in Netlify Environment Variables!");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Configuration API Instagram manquante. Contactez l'administrateur du site." }),
    };
  }

  const url = `https://graph.facebook.com/v19.0/${instagramUserId}/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json(); // Tente de parser la réponse JSON

    // *** AJOUT : Vérification si la réponse HTTP est OK ***
    if (!response.ok) {
      // Si la réponse n'est pas 200 OK (ex: 400 Bad Request, 401 Unauthorized)
      console.error("Instagram API returned an error:", response.status, data);
      return {
        statusCode: response.status, // Retourne le code d'erreur d'Instagram
        body: JSON.stringify({
          error: "Erreur de l'API Instagram",
          details: data.error_message || data.error || "Réponse non-OK",
          instagramResponse: data // Inclure toute la réponse d'Instagram pour le diagnostic
        }),
      };
    }

    // Si la réponse est OK, renvoyer les données telles quelles
    console.log("Instagram data fetched successfully:", data); // Pour le diagnostic
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Error fetching from Instagram API:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur serveur lors de l'appel API Instagram", details: error.message }),
    };
  }
};