export async function handler(event, context) {
  const instagramUserId  = "17841474812786864";
  const accessToken = "EAAO1ikZCqkjsBO45yhqCclzJvC83bAod3lqsMUrRTUapTZAH6PvWNT2rnNKbMOli0ejLaKWouqeHADa9XKpaUTaa20vYs0VzVFQPgDhsTzKZBITNHjRNBTipyrqgjgp7ZBswKoKyNcvhOWDOlgOnGMSfrWn3xyhByQi3XxCsqaWX8FnZB16od0s7SfFolZBBQ3TpVOYxnpRY8zpoSTg0nYCItFohaaKEAZD";
  const url = `https://graph.facebook.com/v19.0/${instagramUserId}/media?fields=id,caption,media_url,permalink,timestamp&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur API Instagram", details: error.message })
    };
  }
}
