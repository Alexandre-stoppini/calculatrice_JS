var stock = "";

/**
 * permet d'écrire dans la console ce qu'il se passe
 * permet d'exporter les données vers l'input de la page html
 * @param stock
 */
function reader(stock) {
    console.log(stock);
    document.getElementById("demo").value = stock;
}



/**
 * permet de vérifier si un des signes entré ne l'est pas déjà afin d'éviter des doublons
 * permet de lire une donnée rentrée via un des boutons et de la stocker dans la variable "stock"
 * @param int
 */
function getImputFromBouton(String) {
    if ((String == "+", "-", "*", "/") && String == stock.charAt(stock.length - 1)) {
        stock = stock.slice(0, -1);
    }
    stock += String;
    reader(stock);
}

/**
 * permet l'obtention d'un résultat en appliquant toutes les opérations demandés dans sotck via la commande eval
 */
function getResult() {
    stock = eval(stock);
    reader(stock);
}

/**
 * reset notre variable à sa valeur de base.
 */
function clearer() {
    stock = "";
    reader(stock);

}

/**
 * permet l'utilisation de regex dans la sélection au clavier des input.
 * ici nous ne laissons passer que les chiffres de 0-9, les signes "+" ; "-" ; "*" ; "/" ; "." ; "," ; "(" ; ")"
 * si deux mêmes symboles se suivent, nous avons une erreur et le programme efface le dernier imput
 * si les conditions ne sont pas remplis, un message d'erreur s'affiche et le caractère entré est supprimé de la chaine de caractère
 * @param elmt
 */
function addNumber(elmt) {
    var lastInput = elmt.value.charAt(elmt.value.length - 1);
    if (lastInput.match(/[0-9+\-*/\.(\)]/)) {
        if ((lastInput == "+", "-", "*", "/") && lastInput == stock.charAt(stock.length - 1)) {
            alert("Erreur");
            elmt.value = elmt.value.slice(0, -1);
        }
        stock = elmt.value;
        console.log(stock);
    } else if (!(lastInput.match(/[0-9+\-*/\.(\)]/))) {
        alert("Erreur, ne pas entrer de non digit");
        stock = stock.slice(0, -1);
        document.getElementById("demo").value = stock;
        console.log(stock);
    }
}