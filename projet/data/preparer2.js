import DATA from "./data_cinemaRecette.json";

const DATA_CINEMA = DATA.map((d) => ({
    Annee: d.Annee,
    Seances: d.Seances,
    Entrees: d.Entrees,
    RecetteGuichet: d.RecetteGuichet,
    RecetteMoyenneEntree: d.RecetteMoyenneEntree
}))
.filter(
    (d) =>
        d.Annee >= 2000
)

console.log(DATA_CINEMA);

export { DATA_CINEMA };