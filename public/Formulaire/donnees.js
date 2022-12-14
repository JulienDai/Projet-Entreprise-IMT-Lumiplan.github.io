import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import db from "../index.js"

const name = document.getElementById(nom_prenom);
const date = document.getElementById(date_d_embauche);
const achat_pc = document.getElementById(achat_pc);
const contrat = document.getElementById(contrat);
const fin = document.getElementById(contrat_date);
const bu = document.getElementById(bu);

const nom = name.split[0];
const prenom= name.split[1];
    
const dbRef = ref(db, 'dataEmployesOutils');

function sendData() {
    try {
        const last = dbRef.length();
        console.log(last);
    
        const db = getDatabase();
        userId = last;
        pathData = 'dataEmployeOutils/$userId';
        set(ref(db,pathData)), {
            Nom : nom,
            Prenom: prenom,
            CodeNatureDeContrat: contrat,
            DateDebutContrat: date,
            DateFinContrat: fin,
            Societe: bu,


        }
    }
}
