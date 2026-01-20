function evaluerChaine(chaine) {
  try {
    // eval() évalue la chaine de caractères comme du JavaScript
    let resultat = eval(chaine); // Fonction à ne pas utiliser !!!
    console.log("Résultat de l'évaluation :", resultat);
    return resultat;
  } catch (error) {
    console.error("Erreur lors de l'évaluation de la chaine :", error);
    return null;
  }
}

// Exemple d'utilisation :
evaluerChaine("10 + 2"); // Évalue une expression mathématique 