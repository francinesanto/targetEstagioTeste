//inverter string

function reverseString(str) {
    //  Crie uma string vazia que vai receber a nova string criada
    var novaString = "";
 
    // Crie o laço FOR
    /* O ponto inicial do laço será (str.length - 1), que corresponde ao 
       último caractere da string, "o"
       Enquanto i for maior ou igual a 0, o laço continuará
       Decrementamos i após cada iteração */
    for (var i = str.length - 1; i >= 0; i--) { 
        novaString += str[i]; // ou newString = newString + str[i];
    }
    /* Aqui, hello's length é igual a 5
        Para cada iteração: i = str.length - 1 e newString = newString + str[i]
        Primeira iteração:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Segunda iteração:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Terceira iteração:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Quarta iteração:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Quinta iteração:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    Fim do laço FOR*/
 
    //  Retorne a string invertida
    return novaString; // "olleh"
}
 
console.log(reverseString('hello'));