// Importation des librairies et données nécessaires
import bb, { line, subchart, zoom } from 'billboard.js'
import { DATA_CINEMA } from '../data/preparer2';

// Génération du graphique
bb.generate({
    data: {
      // Importation du graphique en utilisant les données json
      json: {
        RecetteGuichet: DATA_CINEMA.map(({ RecetteGuichet }) => RecetteGuichet),
      },
      // Type du graphique
      type: line(),  
      // Modification de la couleur    
      colors: {
        RecetteGuichet: "red",
      },
      // Permettre un zoom sur les différents points d'intérêts
      zoom: {
        enabled: zoom(),
      }
    },
    axis:{
      // Changement des données de l'axe X en utilisant le fichier json
      x: {
        type: "category", 
        categories: DATA_CINEMA.map(({ Annee }) => Annee), 
      }
    },
    // Ajouter le subchart en dessous du graphique pour sélectionner une partie du graphique
    subchart: {
      show: subchart(),
      showHandle: true
    },
    // Ajouter la grid dans l'axe x et y pour augmenter la visibilité
    grid: {
      x: {
        show: true
      },
      y: {
        show: true
      }
    },
    bindto: '#graph3'
  });

  