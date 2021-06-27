// Importation des librairies et données nécessaires
import bb, { bar, zoom } from 'billboard.js'
import { DATA_CINEMA } from '../data/preparer2';

/* DATA_CINEMA.filter(
    (d) =>
        d.Annee > 2000
) */

// Génération du graphique
bb.generate({
    data: {
      // Importation des données à partir du fichier json
      json: {
        Séances: DATA_CINEMA.map(({ Seances }) => Seances),
      },
      // Type du graphique
      type: bar(),
      // Personnalisation de la couleur
      colors: {
        Séances: "green",
      },
    },
    // Changement des données de l'axe X en utilisant le fichier json
    axis:{
      x: {
        type: "category", 
        categories: DATA_CINEMA.map(({ Annee }) => Annee), 
      }
    },
    // Permet un zoom en sélectionnant la partie du graphique désirée
    zoom: {
      enabled: zoom(),
      type: "drag"
    },
    bindto: '#graph1'
  });