import { useEffect, useState } from "react";
import { getHighscores } from "../services/highscores";

export function useHighscores() {
  const [highscores, setHighscores] = useState([]);

  const refreshHighscores = () => {
    getHighscores().then(newHighscores => setHighscores(newHighscores));
  }

  useEffect(refreshHighscores, []);

  return { highscores, refreshHighscores }
}