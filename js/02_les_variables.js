// alert(
    // okay js
// );

// Lorsque l'on a besoinde stocker une information on utilise une variable. Une variable peut être interpréter comme une boite dans laquelle nous allons stocker une information.

// IL EXISTE PLUSIEURS TYPE DE VARIABLE


// Pour déclareer une variable (la créer):
// var "Prenom";

// pour lui affecter une valeur:
var prenom = 'Zitouni';

// Afficher la valeur d'une variable:
// a- pour tester une valeur on ouvre la console du navigateur (f12) puis on écrit le nom de la variable à droite des ">>" puis ENTER

// b- Afficher une alert avec la variable (NE PAS METTRE DE GUILLEMETS)
alert(prenom);

// c- on écrit dans le script (code)
console.log(prenom); 

//Il est possible d'écrire plusieurs variables sur une seule ligne:
var nb1, nb2, nb3;
//& d'y affecter des valeurs:
nb1 = 1;
nb2 = 50; 
nb3 = 220;

// Une instruction se termine toujours par un point virgule.

// Le nom d'une variable peut comporter des lettres et des chiffres mais exclu les signes de ponctuation (espace, accent, ...)

// /!\ LE JS EST SENSIBLE A LA CASSE /!!!!!!   (ALT GR + 8 = "\")

/*
mavariable different de maVariable ou ma_variable
*/

// écriture snake case => ma_variable
// écriture cameLcase => maVariable

/**********************
LES TYPES DES VARIABLES
**********************/

// -- typeof, me permet de connaitre le type de ma variable:
console.log(typeof prenom);

// -- Déclaration et affectation d'un nombre :
var age = 40;
console.log(typeof age);

// -- Les variables de type 
var uneDecimal = -2.984;
console.log(typeof uneDecimal); // La console retourne "number" donc un ou des chiffres

//  -- Les variables de type BOOléens (boolean)
// LE BOOLEAN  permet de verifier si l'inforùmarion est VRAi (true) ou FALSE (faux)
var unboolean = false; // true
console.log(unboolean); //  retourne false
console.log(typeof unboolean); // retourne boolean

// -- LES CONSTANTES

// La déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifier par des réaffectation ultérieurs. Une constante ne peut pas être déclarer à nouveau.

const HOST ="localhost";
const USER ="root";
const PASSWORD ="mysql";
// Dans la convention on écrit les constantes en majuscules pour les reconnaitre  (PASSWORD)
/* Donc il est impossible de cela :
    const USER = 'zitouni';
La console me retournera => SyntaxError: redeclaration of const USER*/

var unnombre = "24";
console.log(unnombre); // affiche 24
console.log(typeof unnombre);// retourne string (chaine de caractère)

// Pour convertir le string (chaine de caractère ) "24" en number : 
unnombre = parseFloat(unnombre); // parseFloat permet d'interpreter le string 24 en chiffre 24
console.log(unnombre); // affiche 24
console.log(typeof unnombre); // retourne  number

// Pour convertir un chiffre en string
var nb4 = 93; 
console.log(nb4); // affiche 93
console.log(typeof nb4); // La console de l'inspecteur interprète le nb4 comme un chiffre

nb4 = nb4.toString(); //  ToString permet de convertir un nombre entier ou décimal en chaine de caractère (string).
console.log(typeof nb4);
