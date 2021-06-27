// Importation des librairies et données nécessaires
import bb, { bar, line } from 'billboard.js'
import { DATA_CINEMA } from '../data/preparer2';

/* DATA_CINEMA.filter(
  (d) =>
      d.Annee > 2000
) */

// Création du graphique
bb.generate({
    data: {
      // Importation des données à partir du fichier json
      json: {
        Entrées: DATA_CINEMA.map(({ Entrees }) => Entrees),
      },
      // Type du graphique
      type: line(),
      // Tentative échouée de rajouter des pointillés quand les données du graphique baissaient
      /* regions: {
        Entrees: [
          {
            start: 1,
            end: 2,
            style: {
              dasharray: "6 2"
            }
          },
          {
            start: 2,
            style: {
              dasharray: "2 3"
            }
          }
        ],
      } */
    },
    axis:{
      // Changement des données de l'axe X en utilisant le fichier json
      x: {
        type: "category", 
        categories: DATA_CINEMA.map(({ Annee }) => Annee), 
      }
    },
    // Ajouter une grid sur les 2 axes pour avoir une meilleure visibilité
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
    bindto: '#graph2'
  });