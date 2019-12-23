alert('JS')

// Déclarer un tableaux INDEXÉ:

// a)
var montableau = []; // alt gr + 5 pour les crochets
console.log(montableau);

// b)
var myarray = new Array; 
console.log(myarray);
console.log(typeof myarray)
// my array et montableau sont des tableaux qui peuvent contenir plusieurs information

//Affecter des valeurs au tableau, plusieurs méthodes

// a)
var nosprenom =["Zitouni", "Philippe", "Mamadou", "Sebastien", "Norya", "Sahar"];
console.log(nosprenom);

//b) 
montableau[0] = "Zitouni"; 
montableau[1] = "Philippe"; 
montableau[2] = "Mamadou"; 
montableau[3] = "Sebastien"; 
montableau[4] = "Norya"; 
montableau[5] = "Sahar"; 
console.log(montableau);

// -- Déclarer ou affecter des valeurs à un objet.

var coordonnee = {
    prenom : "Hugo",
    nom : "Liegeard",
    age : 82
};
console.clear();// Permet d'effacer les lignes de debug qui précède la fonction console.clear();
console.log(coordonnee);// J'affiche toute les information de mon tableau
console.log(coordonnee['prenom']); // Je n'affiche que le prenom 
console.log(coordonnee.nom); // Je n'affiche que le nom 


//*-- On va créer 2 tableaux indexé

var listedeprenom = ["oussmane", "cherif", "hugo"];
var listedenom = ["mama", "benalal", "liegard"];
var annuaire = [listedeprenom, listedenom];

console.log(annuaire);
document.write();// Fonction native de JS qui permet d'inscrire un résultat directement sur la page html et non plus sur la console

document.write(annuaire[0][2] + " " + annuaire[1][2]);
document.write("<hr>");
document.write(annuaire[0][0]);
document.write(" ");
document.write(annuaire[1][1]);


//Tableau à dimension non indexé
var contact = [
    {prenom: "hugo", nom: "liegard", tel: "0783251245"},
    {prenom: "salim", nom: "soumara", tel: "0783251245"},
    {prenom: "pransu", nom: "bala", tel: "0783251245"},
];
console.log(contact);

var annuairedesstagiaires = [
    {prenom: "hugo", nom: "liegard", tel: "0783251245"},
    {prenom: "salim", nom: "soumara", tel: "0783251245"},
    {prenom: "pransu", nom: "bala", tel: "0783251245"},
];
console.log(annuairedesstagiaires); 

// exemple à 3 dimension

var array3d = [
    {
        prenom: "hugo",
        nom : "liegard", 
        coordonnee:{
            email: "hugo.liegard@lepoles.com",
            tel:{
                fixe:"0521214531",
                fax: "0541242254",
                port:{
                    prive: "0752543354",
                    pro: "0734513554"
                }    
            },
            adresse:{
                ville: "ducos",
                cp:"93000",
                region: "ile de france",
                pays: {
                    code:"fr",
                    nom:"france"
                }
            }//fermeture coordonnée
        } 
    }//fermeture 1er { 
];//fin tableau array3d

console.log(array3d);
console.log(array3d[0].coordonnee.email);

/*------------------------------
JAOUTER UN ELEMENT
------------------------------*/

var couleur = ['rouge', 'jaune', 'vert'];
console.clear();
console.log(couleur);
console.log(couleur.length);// .length me permet d'afficher sur ma console d'élément que contient mon tableau

// Pour ajouter un élément à mon tableau, je fait appel à la fonction push(lien doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)
var nbelementsdemontableau = couleur.push('violet');
console.log(couleur);
console.log(nbelementsdemontableau);

// Pour ajouter un élément au début de mon tableau, je vais faire appel à la fonction unshift()
console.clear();
var nbelementsdemontableau = couleur.unshift('bisque', 'orange');
console.log(couleur);
console.log(nbelementsdemontableau);

// Pour supprimer le dernier éléments de mon tableau, je fait appel à la fonction pop();

couleur.pop();
console.log(couleur);
console.log(nbelementsdemontableau);

// Pour supprimer le premièr élément de mon tableau, j'utilise la fonction shift
couleur.shift();
console.log(couleur);
console.log(nbelementsdemontableau);

