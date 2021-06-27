// Importation des librairies et données nécessaires
import bb, { areaSpline, zoom } from 'billboard.js'
import { DATA_CINEMA } from '../data/preparer2';

const DATA_CINEMA2 = DATA_CINEMA;

/* DATA_CINEMA.filter(
    (d) =>
        d.Annee > 2000
)

DATA_CINEMA2.filter(
  (d) =>
    d.Annee <=2000
) */

// Génération du graphique
bb.generate({
  data: {
    // Importation des données à partir du fichier json
    json: {
      RecetteMoyenneEntree: DATA_CINEMA.map(({ RecetteMoyenneEntree }) => RecetteMoyenneEntree),
    },
    // Type du graphique
    type: areaSpline(),
    // Modification de la couleur
    colors: {
        RecetteMoyenneEntree: "orange"
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
  // Ajouter la grid sur les axes X et Y pour augmenter la visibilité
  grid: {
    x: {
      show: true,
      // Ajouter les lignes de la Grid qui manquaient en précisant juste l'argument true de la méthode show
      lines: [
        {
          value: 1.5,
          position: "start"

        },
        {
          value: 3.5,
          position: "start"
        },
        {
          value: 5.5,
          position: "start"
        },
        {
          value: 7.5,
          position: "start"
        },
        {
          value: 9.5,
          position: "start"
        },
        {
          value: 11.5,
          position: "start"
        },
        {
          value: 13.5,
          position: "start"
        },
        {
          value: 15.5,
          position: "start"
        },
        {
          value: 17.5,
          position: "start"
        }
      ]
    },
    y: {
      show: true
    }
  },
  bindto: '#graph4'
});
