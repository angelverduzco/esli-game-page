const HIGHSCORES_ENDPOINT = 'https://esli-game-api.onrender.com/api/highscores'

export const getHighscores = async () => {
  try {
    const response = await fetch(HIGHSCORES_ENDPOINT);
    const data = await response.json();

    return data
    
  } catch (error) {
    console.error('Error fetching highscores:', error);
  }
}