import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import { db } from '../index.js';

// import des éléments du formulaire dans javascript

const name = document.getElementById(nom_prenom);
const date = document.getElementById(date_d_embauche);
const buy_pc = document.getElementById(achat_pc);
const type_contrat = document.getElementById(contrat);
const societe = document.getElementById(bu);

// séparation du nom et prénom en deux éléments

if (name != null) {
    const nom = name.split[0];
    const prenom= name.split[1];
}

// Ajout des éléments dans la base de données

const dbRef = ref(db, 'dataEmployesOutils');

function sendData() {
    const last = dbRef.length();
    console.log(last);
    
    const db = getDatabase();
    userId = last;
    pathData = 'dataEmployeOutils/' + userId;
    set(ref(db,pathData), {
        Nom : nom,
        Prenom: prenom,
        CodeNatureDeContrat: type_contrat,
        DateDebutContrat: date,
        Societe: societe,
    });

}
