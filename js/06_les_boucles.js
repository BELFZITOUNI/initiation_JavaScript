//alert('ok');

/************
 LES BOUCLES
 ***********/

//Il y a different type de boucle, les plus utilisées sont la " FOR " et la boucle " WHILE "

//* Boucle FOR():
for(let i = 0; i <=5; i++ ){
    document.write('<p>Nombre de tour(s) de boucle(s) : <em style="background:yellow;">'+ i +'</em></p>');
}
document.write("<hr>");

/* 
Pour i = 0; => j'initialise le départ de ma boucle à 0 
Pour i < ou = à 5; tany que la valeur de est inférieur ou égal à 5
i++; => j'incrémente donc j'ajoute un tour de boucle (+1)

En gros je donne l'instruction  de faire 1 tour de boucle supplémentaire tant que la valeur de i n'est pas égal ou supérieur à 5
*/

//La boucle WHILE

var j = 0;
while(j <=5){
    document.write('<p>Nombre de tour(s) de boucle(s) : <em style="background:yellow;">'+ j +'</em></p>');
    // ATTENTION A NE PAS OUBLIER L'INCRÉMENTATION
    j++;
}
document.write("<hr>");


/*--------------------------
    EXERCICE
--------------------------*/
​
// -- Supposons le tableau suivant :
var prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
​
/**
 * CONSIGNE : Grâce à une boucle FOR, 
 * affichez la liste des prénoms
 * du tableau ci-dessus dans la console, 
 * ou sur votre page.
 */


//Correction
console.log(prenoms);
for(let i = 0; i <prenoms.length; i++){
    console.log(prenoms[i]);
    document.write(prenoms[i]);
    document.write(" / ");
}


