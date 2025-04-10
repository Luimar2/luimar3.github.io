//alert(); É usado para apresentar alertas ao carregar a página, sendo apenas um alerta no console
//alert("Oi, sou um alerta");

//Dessa forma podemos inserir um texto dentro do HTML usando o JS
document.getElementById("texto").innerHTML = "<i>Meu primeiro texto com <b>JS</b>!</i>";

//console.log(); Tem a mesma função do alert(); porém é apresentado apenas no console do navegado.
//O Console do navegador geralmente é acessado pela tecla F12 do teclado. 
console.log("Números entre aspas = texto '2 + 2' e fora é uma função =", 2 + 2);

//Declaração de variáveis
var nome, sobremone, nomeCompleto;

//Atribuição de valores
nome = "José";
sobrenome = "da Silva";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("nome_completo").innerHTML = nomeCompleto;

//Operadores Aritméticos
var valor1 = 5, valor2 = 2, soma, subtracao, multiplicacao, divisao, modulo;

document.getElementById("operadores_aritmeticos").innerHTML =
    `<p style="padding-right: 2rem;"><b>soma</b> = 
    ${soma = valor1 + valor2}</p>`;

document.getElementById("operadores_aritmeticos").innerHTML +=
    `<p style="padding-right: 2rem;"><b>subtracao</b> = 
    ${subtracao = valor1 - valor2}</p>`;

document.getElementById("operadores_aritmeticos").innerHTML +=
    `<p style="padding-right: 2rem;"><b>multiplicacao</b> = 
    ${multiplicacao = valor1 * valor2}</p>`;

document.getElementById("operadores_aritmeticos").innerHTML +=
    `<p style="padding-right: 2rem;"><b>divisao</b> = 
    ${divisao = valor1 / valor2}</p>`;

document.getElementById("operadores_aritmeticos").innerHTML +=
    `<p style="padding-right: 2rem;"><b>módulo</b> = 
    ${modulo = valor1 % valor2}</p>`;

// Operadores de Incremento e Decremento
var valor3 = 9, valor4 = 3;

document.getElementById("operadores_incremento_decremento").innerHTML =
    `<p style="padding-right: 2rem;"><b>valorIncremento</b> = ${valorIncremento = ++valor3}</p>`;

document.getElementById("operadores_incremento_decremento").innerHTML +=
    `<p style="padding-right: 2rem;"><b>valorDecremento</b> = ${valorDecremento = --valor4}</p>`;

// Operadores de Atribuição
var valorAtribuicao = 10;

document.getElementById("operadores_atribuicao").innerHTML =
    `<b>valorAtribuicao</b> = ${valorAtribuicao += 5}`;

// Operador de Concatenação
var texto1 = "Robert ", texto2 = "Downey Jr.";

document.getElementById("operadores_concatenacao").innerHTML =
    `<b>Concatenação</b> = ${texto1 + texto2}`;

// Operadores de Comparação
var valorComp1 = 10, valorComp2 = 5, valorComp3 = "5";

document.getElementById("operadores_comparacao").innerHTML =
    `<p style="padding-right: 2rem; text-align: center;">10 <b>==</b> 5<br>
    ${valorComp1 == valorComp2}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=
    `<p style="padding-right: 2rem; text-align: center;">5 <b>===</b> "5"<br>
    ${valorComp1 === valorComp3}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=    
    `<p style="padding-right: 2rem; text-align: center;">10 <b>!=</b> 5<br>
    ${valorComp1 != valorComp2}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=    
    `<p style="padding-right: 2rem; text-align: center;">10 <b>!==</b> 5<br>
    ${valorComp1 !== valorComp2}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=
    `<p style="padding-right: 2rem; text-align: center;">10 <b>></b> 5<br>
    ${valorComp1 > valorComp2}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=
    `<p style="padding-right: 2rem; text-align: center;">10 <b><</b> 5<br>
    ${valorComp1 < valorComp2}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=
    `<p style="padding-right: 2rem; text-align: center;">10 <b>>=</b> 5<br>
    ${valorComp1 >= valorComp2}</p>`;

document.getElementById("operadores_comparacao").innerHTML +=
    `<p style="padding-right: 2rem; text-align: center;">10 <b><=</b> 5<br>
    ${valorComp1 <= valorComp2}</p>`;

// Operador Condicional Ternário
var valorIdade = 18;
var valorResultado = (valorIdade >= 18) ? "Maior de Idade" : "Menor de Idade";

document.getElementById("operador_condicional_ternario").innerHTML =
    `O indivíduo é <b>${valorResultado}</b>`;

// Operadores Lógicos
var valorLogico1 = (valorIdade >= 18 && valorIdade <= 60) ? "Verdadeiro" : "Falso"; 
var valorLogico2 = (valorIdade === "18" || valorIdade === 60) ? "Verdadeiro" : "Falso";
var valorLogico3 = !(valorIdade === "18") ? "Verdadeiro" : "Falso";

document.getElementById("operadores_logicos").innerHTML =
    `<p>Se as duas condições são verdadeiras o resultado é = <b>${valorLogico1}</b></p>`;

document.getElementById("operadores_logicos").innerHTML +=
    `<p>Se uma das duas condições são verdadeiras o resultado é = <b>${valorLogico2}</b></p>`;

document.getElementById("operadores_logicos").innerHTML +=
    `<p>Se a condição é falsa o resultado é = <b>${valorLogico3}</b></p>`;

// Funções
var valor5 = 5, valor6 = 2;

function somar(valor5, valor6) {
    return valor5 + valor6;
}

document.getElementById("funcao_somar").innerHTML =
    `A soma de 5+2 é = ${somar(5, 2)}`;

//Objeto

var pessoa = {
    nome: "José",
    sobrenome: "da Silva",
    idade: 30,
    nomeCompleto: function () {
        return this.nome + " " + this.sobrenome;
    }
};

document.getElementById("objeto_pessoa").innerHTML =
    `O nome completo é = ${pessoa.nomeCompleto()}.`;

document.getElementById("objeto_pessoa_idade").innerHTML +=
    `A idade da pessoa é = ${pessoa.idade}`;

//Eventos

function clique() {
    alert("Você clicou no botão!");
}

function cliqueDuplo() {
    alert("Você clicou 2x!");
}

function mouseOver() {
    let div = document.getElementById("OnMouse");
    div.style.backgroundColor = "red";
    let txt = document.getElementById("OnMouse");
    txt.style.color = "white";
    let ptxt = document.getElementById("OnMouse").innerHTML = "<b>Você passou o mouse!</b>";
}

function mouseOut() {
    let div = document.getElementById("OnMouse");
    div.style.backgroundColor = "";
    let txt = document.getElementById("OnMouse");
    txt.style.color = "";
    let ptxt = document.getElementById("OnMouse").innerHTML = "Não passe o Mouse";
}

function mouseMove() {
    let div = document.getElementById("OnMouse1");
    div.style.backgroundColor = "blue";
    let txt = document.getElementById("OnMouse1");
    txt.style.color = "white";
    let ptxt = document.getElementById("OnMouse1").innerHTML = "<b>Moveu o mouse, pressione!</b>";
}

function mouseDown() {
    let div = document.getElementById("OnMouse1");
    div.style.backgroundColor = "green";
    let txt = document.getElementById("OnMouse1");
    txt.style.color = "white";
    let ptxt = document.getElementById("OnMouse1").innerHTML = "<b>Você pressionou o mouse!</b>";
}

function mouseUp() {
    let div = document.getElementById("OnMouse1");
    div.style.backgroundColor = "";
    let txt = document.getElementById("OnMouse1");
    txt.style.color = "";
    let ptxt = document.getElementById("OnMouse1").innerHTML = "<b>Você soltou o mouse!</b>";
}

function campoFocado() {
    document.getElementById("onFocus").value = "";
    let div = document.getElementById("onFocus");
    div.style.backgroundColor = "yellow";
    div.style.color = "black";
}

function campoDesfocado() {
    document.getElementById("onFocus").value = "Clique para apagar";
    let div = document.getElementById("onFocus");
    div.style.backgroundColor = "";
    div.style.color = "";

}

function teclaPressionada() {
    let tecla = document.getElementById("onFocus1");
    tecla.style.backgroundColor = "#c40000";
}

function teclaPressionadaELiberada() {
    let tecla = document.getElementById("onFocus1");
    tecla.style.backgroundColor = "#20b200";
    tecla.style.color = "white";
}

function teclaLiberada() {
    let tecla = document.getElementById("onFocus1");
    tecla.style.backgroundColor = "#000d89";
}

 //Arrays

 function campoAlterado() {
    alert("Os valores foram alterados!");
} //Esse evento é chamado quando o campo é alterado.

const frutas = ["Banana", "Maçã", "Morango", "Uva", "Pera"];
frutas[0] = "Abacaxi"; //Alterando o valor do índice 0, que era Banana agora é Abacaxi
frutas[5] = "Melancia"; //Adicionando um novo valor no índice 5
frutas.push("Laranja"); //Adicionando um novo valor no final do array

document.getElementById("array").innerHTML =
`Nossa salada de fruta contém: ${frutas}`;

document.getElementById("array1").innerHTML = (frutas[0]);
document.getElementById("array2").innerHTML = (frutas[1]);
document.getElementById("array3").innerHTML = (frutas[2]);
document.getElementById("array4").innerHTML = (frutas[3]);
document.getElementById("array5").innerHTML = (frutas[4]);
document.getElementById("array6").innerHTML = (frutas[frutas.length - 1]);

console.log(Array.isArray(frutas)); //Verifica se é um array  -  true / false
//console.log(frutas instanceof Array); //Também verifica se é um array  -  true / false

//Metodo join() - Converte o array em string
const graos = ["Arroz", "Feijão", "Lentilha", "Ervilha", "Grão de Bico"];

document.getElementById("matrizes").innerHTML = (graos.join(" - "));

//Metodo pop() - Deleta o útimo item do array
const verduras = ["Alface", "Rúcula", "Agrião", "Espinafre", "Repolho"];
verduras.pop()

document.getElementById("excluirUltimoArray").innerHTML = (verduras);

//Metodo shift() - Deleta o primeiro item do array
const padaria = ["Rosca", "Pão", "Bolo", "Biscoito", "Torta"];
padaria.shift()

document.getElementById("excluirPrimeiroArray").innerHTML = (padaria);

//Metodo unshift() - Adiciona um item por primeiro no array
const bebidas = ["Água", "Refrigerante", "Suco", "Café", "Chá"];
bebidas.unshift("Cerveja")

document.getElementById("adicionarInicioArray").innerHTML = (bebidas);

//Metodo unshift() - Adiciona um item no final do array
const carnes = ["Maminha", "Costela", "Peixe", "Lombo", "Frango"];
carnes.push("Alcatra")

document.getElementById("adicionarFinalArray").innerHTML = (carnes);

//Metodo splice() - Adiciona um item em qualquer lugar do array
const limpeza = ["Sabão", "Detergente", "Desinfetante", "Água Sanitária", "Esponja"];
limpeza.splice(2, 0, "Amaciante", "Lustra Móveis");

document.getElementById("adicionarMeioArray").innerHTML = (limpeza);

//Metodo concat() - Concatena arrays
const listaSupermercado = ["frutas", "graos", "verduras", "padaria"];
const listaEsquecida = ["bebidas", "carnes", "limpeza"];
const listaAdd = ["Leite", "Ovos", "Açúcar", "Sal", "Óleo"];
const compras = listaSupermercado.concat(listaEsquecida, listaAdd);

document.getElementById("concatenarArray").innerHTML = (compras);

//Metodo slice() - Corta o array
const higiene = ["Shampoo", "Condicionador", "Creme Dental", "Sabonete", "Papel Higiênico"];
const higiene1 = higiene.slice(1, 3);

document.getElementById("cortarArray").innerHTML = (higiene1);

//Metodo sort() - Ordena o array
const temperos = ["Sal", "Pimenta", "Açafrão", "Orégano", "Manjericão"];
const temperosOrdem = temperos.sort();

document.getElementById("ordenarArray").innerHTML = (temperosOrdem);

//Metodo sort(function...) - Ordena números no array
const gramas = [50, 450, 10, 320, 5];
const gramasOrdem = gramas.sort(function(a, b) {return a - b});

document.getElementById("ordenarArrayNum").innerHTML = (gramasOrdem);

//Método maior número
function maiorGrama(array) {
    return Math.max.apply(null, array);
}

document.getElementById("maiorArrayNum").innerHTML = (maiorGrama(gramas));

//Metodo filter() - Filtra o array
const maior100 = gramas.filter(filtragem);

function filtragem(value, index, array) {
    return value > 100;
}

document.getElementById("filtrarArrayNum").innerHTML = (maior100);

// Declarações Condicionais
var hora = new Date().getHours();
var saudacao;

if (hora < 12) {
    saudacao = "Bom dia!";
}
else if (hora < 18) {
    saudacao = "Boa tarde!";
}
else {
    saudacao = "Boa noite!";
}

document.getElementById("horaSistema").innerHTML = (saudacao);

// Declarações Condicionais c/ funções
function veriNome() {
    let nomeCondicional = document.getElementById("nomeCond").value;

    if  (nomeCondicional == "" || nomeCondicional == null) {
        let p = document.getElementById("resultNome")
        p.innerHTML = "Digite um nome!";
        p.style.color = "red";
    }

    else if (nomeCondicional.length < 3) {
        let p = document.getElementById("resultNome")
        p.innerHTML = "O nome deve ter mais de 3 caracteres!";
        p.style.color = "orange";
    }

    else {
        let p = document.getElementById("resultNome")
        p.innerHTML = `Ok, está completo`;
        p.style.color = "green";
    }
}

// Switch
function diaSemana() {
    let dia;
    switch (new Date().getDay()) {
        case 0:
            dia = "Hoje é Domingo";
            break;
        case 1:
            dia = "Hoje é Segunda-feira";
            break;
        case 2:
            dia = "Hoje é Terça-feira";
            break;
        case 3:
            dia = "Hoje é Quarta-feira";
            break;
        case 4:
            dia = "Hoje é Quinta-feira";
            break;
        case 5:
            dia = "Hoje é Sexta-feira";
            break;
        case 6:
            dia = "Hoje é Sábado";
            break;
        default:
            dia = "Não sei qual é o dia";

    }
    document.getElementById("switchCase").innerHTML = (dia);
}

/* Pode ser digitado como está acima de forma resumida ou da forma abaixo:

function diaSemana() {
    let dia = new Date().getDay();

    switch (dia) {
        case 0:
        document.getElementById("switchCase").innerHTML = "Hoje é Domingo";
            break;
        case 1:
        document.getElementById("switchCase").innerHTML = "Hoje é Segunda-feira";
            break;
        case 2:
        document.getElementById("switchCase").innerHTML = "Hoje é Terça-feira";
            break;
        case 3:
        document.getElementById("switchCase").innerHTML = "Hoje é Quarta-feira";
            break;
        case 4:
        document.getElementById("switchCase").innerHTML = "Hoje é Quinta-feira";
            break;
        case 5:    
        document.getElementById("switchCase").innerHTML = "Hoje é Sexta-feira";
            break;
        case 6:    
        document.getElementById("switchCase").innerHTML = "Hoje é Sábado";
            break;
        default:    
        document.getElementById("switchCase").innerHTML = "Não sei qual é o dia";
    }

}

*/

// Switch - Exemplo 2
function qualCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); //Transforma a string em minúscula
    let resultado = document.getElementById("switchCaseCor");

    switch (cor) {
        case "vermelho":
            resultado.innerHTML = "A cor é vermelha"; 
            resultado.style.backgroundColor = "red"; 
            resultado.style.color = "white";
            break;
        case "azul":
            resultado.innerHTML = "A cor é azul"; 
            resultado.style.backgroundColor = "blue"; 
            resultado.style.color = "white";
            break;
        case "verde":
            resultado.innerHTML = "A cor é verde";
            resultado.style.backgroundColor = "green"; 
            resultado.style.color = "white";
            break;
        case "amarelo":
            resultado.innerHTML = "A cor é amarela"; 
            resultado.style.backgroundColor = "yellow" 
            resultado.style.color = "black";
            break;
        default:
            resultado.innerHTML = "Não sei qual é a cor";
            resultado.style.backgroundColor = "white"; 
            resultado.style.color = "black";
    }
    
}

/* o switch case pode ser usado também para verificar se um campo é zero ou não.

function campoZero() {
    let campo = document.getElementById("campoVazio").value;

    switch (campo) {
        case "0":
            document.getElementById("campoZeroResult").innerHTML = `A variável é 0 / Texto`;    
            break;
        case "":
            document.getElementById("campoZeroResult").innerHTML = `A variável é zero absoluto / nulo`;    
            break;
        default:
            document.getElementById("campoZeroResult").innerHTML = `Não corresponde ao campo`;
    }
}       
*/

// Laços de repetição

for (let i = 0; i < 10; i++) {
    document.getElementById("repeticao").innerHTML += i + ", ";
}

let selcaoAno = (new Date().getFullYear());

for (let i = selcaoAno; i >= 1900; i--) {
    document.getElementById("selectAno").innerHTML += 
    "<option value='" + i + "'>" + i + "</option>";
}

const autos = [
    "Fiat", 
    "Ford", 
    "Chevrolet", 
    "Volkswagen", 
    "Renault", 
    "Peugeot", 
    "Toyota", 
    "Honda", 
    "Hyundai", 
    "Kia"];

var tamanho = autos.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("forArray").innerHTML += autos[i] + " | ";
}

// EVENTOS DE TEMPO NO JAVASCRIPT
function starCount() {
        document.getElementById("time").innerHTML = "Começou a contar!";
        tempo = setTimeout(function() { 
            document.getElementById("time").innerHTML = "Executou a contagem";
         }, 5000);
         clearTimeout(); //Para um determinado intervalo, mas não zera o tempo.
         setTimeout(function() { 
            document.getElementById("time").innerHTML = "Tempo Parado!";
         }, 7000);
         
}

function stopCount() {
    clearTimeout(tempo);
    document.getElementById("time").innerHTML = "Parou a contagem!";
    setTimeout(function() {
        document.getElementById("time").innerHTML = "Tempo Parado!";
    }, 2000);
}

//Contagem Regressiva
function starCount1() {
    tempo2 = setInterval(function() { 
        var cronometro = document.getElementById("time1").innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById("time1").innerHTML = "Acabou o tempo!";
            stopInt();
            zeraTempo();
        }
        else {
            document.getElementById("time1").innerHTML = soma;
        }

         }, 1000);
}

function stopInt() {
    clearTimeout(tempo2);
}

function zeraTempo() {
    setTimeout(function() { 
        document.getElementById("time1").innerHTML = "10";
     }, 2000);
}

function stopCount1() {
    clearTimeout(tempo2);
    document.getElementById("time1").innerHTML = "Parou a contagem!";
    setTimeout(function() { 
        document.getElementById("time1").innerHTML = "10";
     }, 2000);
}

//Classe em JavaScript
class Carro {
    constructor(vlr1, vlr2, vlr3) {
        this.marca = vlr1;
        this.modelo = vlr2;
        this.ano = vlr3;
        
    }
    buzina() {
        return this.modelo + " buzinou";
    }
}

const veiculo1 = new Carro("Fiat", "Palio", "2008")
const veiculo2 = new Carro("VW", "Gol", "2013")
const veiculo3 = new Carro("GM", "Vectra", "1994")

console.log(veiculo1.modelo);
console.log(veiculo2.buzina());
console.log(veiculo3);

veiculo3.ano = 1996
console.log(veiculo3);

document.getElementById("classes").innerHTML = 
`${veiculo1.marca}, ${veiculo2.modelo}, ${veiculo3.ano}`;


// Manipular datas no JavaScript

//Comando base para pegar a data atual.
let dataBase = new Date();

document.getElementById("tempo").innerHTML = (dataBase);
//console.log(dataBase);

//Comando para pegar o ano atual com 4 digitos.
let anoBase = dataBase.getFullYear();

document.getElementById("tempo2").innerHTML = (anoBase);
//console.log(anoBase);

//Comando para pegar o mês atual - Contagem de 0 = Janeiro à 11 = Dezembro, para solucionar o problema basa somar +1
let mesBase = dataBase.getMonth()+1;

document.getElementById("tempo3").innerHTML = (mesBase);
//console.log(mesBase);

//Fórmula para mostrar os meses de forma escrita.
const mesesAno = ["Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro",
    "Dezembro"];

let mesGregoriano = mesesAno[dataBase.getMonth()];

document.getElementById("tempo4").innerHTML = (mesGregoriano);
//console.log(mesGregoriano);

//Comando para pegar o dia do mês atual - Contagem de 1 à 31
let diaMBase = dataBase.getDate();

document.getElementById("tempo5").innerHTML = (diaMBase);
//console.log(diaMBase);

//Comando para pegar o dia da semana atual - Contagem de 0 à 6
let diaSBase = dataBase.getDay()+1;
//console.log(diaSBase);
document.getElementById("tempo6").innerHTML = (diaSBase);

//Fórmula para mostrar os dias da semana de forma escrita.
const diaSemanal = ["Domingo", 
    "Segunda-Feira", 
    "Terça-Feira", 
    "Quarta--Feira", 
    "Quinta-Feira", 
    "Sexta-Feira", 
    "Sábado"];

let semGregoriano = diaSemanal[dataBase.getDay()];

document.getElementById("tempo7").innerHTML = (semGregoriano);
//console.log(semGregoriano);

//Comando para pegar a hora atual - Contagem de 0 á 23
let horaAtual = dataBase.getHours();

document.getElementById("tempo8").innerHTML = (horaAtual);
//console.log(horaAtual);

//Comando para pegar os minutos atuais - Contagem de 0 á 59
let minAtual = dataBase.getMinutes();

document.getElementById("tempo9").innerHTML = (minAtual);
//console.log(minAtual);

//Comando para pegar os segundos atuais - Contagem de 0 á 59
let segAtual = dataBase.getSeconds();

document.getElementById("tempo10").innerHTML = (segAtual);
//console.log(segAtual);

//Comando para pegar os milisegundos atuais - Contagem de 0 á 999
let msegAtual = dataBase.getMilliseconds();

document.getElementById("tempo11").innerHTML = (msegAtual);
//console.log(msegAtual);

//Comando para pegar a data no padrão local (Brasileiro)
let dataBR = dataBase.toLocaleString('pt-BR');
//Comando para mostrar apenas a data
//let dataBR = dataBase.toLocaleString('pt-BR', {dateStyle:'short'});
//Comando para mostrar apenas a hora
//let dataBR = dataBase.toLocaleString('pt-BR', {timeStyle:'short'});
document.getElementById("tempo12").innerHTML = (dataBR);
//console.log(dataBR);

/*Fórmula para montar a data com os valores separados
dataMont = new Date();
diaMesMont = dataMont.getDate();
mesMont = dataMont.getMonth() + 1;
anoMont = dataMont.getFullYear();

function addZero(x){ return x < 10 ? '0' + x : '' + x;}; //Fórmula para adicionar "0" ao início da data quando não maior que "10".

let dataPtBr = addZero(diaMesMont) + "/" + addZero(mesMont) + "/" + anoMont;
console.log(dataPtBr);
*/



//Comparar datas maiores ou menores (Ex. Data de vencimento)
for (let diaV = 1; diaV <= 31; diaV++) {
    document.getElementById("boletoDia").innerHTML += 
    "<option value='" + diaV + "'>" + diaV + "</option>";}

for (let mesV = 1; mesV <= 12; mesV++) {
    document.getElementById("boletoMes").innerHTML += 
    "<option value='" + mesV + "'>" + mesV + "</option>";}

let sAno = (new Date().getFullYear());

for (let anoV = sAno; anoV >= 1900; anoV--) {
    document.getElementById("boletoAno").innerHTML += 
    "<option value='" + anoV + "'>" + anoV + "</option>";
}

function verVencimento(){
    let diaVenc = document.getElementById('boletoDia').value;
    let mesVenc = document.getElementById('boletoMes').value;
    let anoVenc = document.getElementById('boletoAno').value;
    
    let dia = parseInt(diaVenc);
    let mes = parseInt(mesVenc) - 1;
    let ano = parseInt(anoVenc);

    let hoje = new Date();
    let vencimento = new Date(ano, mes, dia);
    let mensagem = document.getElementById('boletoVencimento')

if (isNaN(vencimento.getTime())) {
        mensagem.innerHTML = "Selecione uma data válida";
        return;
}
if (hoje > vencimento){
    mensagem.innerHTML = "Sua conta está vencida";
    //console.log("Sua conta está vencida")
}
else {
    mensagem.innerHTML = "Ainda não venceu, tudo certo!";
    //console.log("Ainda não venceu, tudo certo!")
}
}



//Diferença entre duas datas em dias
document.addEventListener("DOMContentLoaded", function() {
    let selectDia = document.getElementById("compDia");
    let selectMes = document.getElementById("compMes");
    let selectAno = document.getElementById("compAno");

    for (let diaD = 1; diaD <= 31; diaD++) {
        let option = document.createElement("option");
        option.value = diaD;
        option.textContent = diaD;
        selectDia.appendChild(option);
    }

    for (let mesD = 1; mesD <= 12; mesD++) {
        let option = document.createElement("option");
        option.value = mesD;
        option.textContent = mesD;
        selectMes.appendChild(option);
    }

    let dAno = new Date().getFullYear();
    for (let anoD = dAno; anoD >= 1900; anoD--) {
        let option = document.createElement("option");
        option.value = anoD;
        option.textContent = anoD;
        selectAno.appendChild(option);
    }
});

function verComparativo() {
    let diaComp = parseInt(document.getElementById('compDia').value);
    let mesComp = parseInt(document.getElementById('compMes').value) - 1; // Mês começa do zero
    let anoComp = parseInt(document.getElementById('compAno').value);


    let dataInicial = new Date();
    let dataFinal = new Date(anoComp, mesComp, diaComp);

    let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
    let diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));

    document.getElementById('comparativo').innerHTML = diferencaDias + " dias";
    //console.log(diferencaDias + " dias");
}

//Fórmulas para inserir as manipulações de data no HTML


// JSON
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano:"2001",
    motor:["1.4","1.0"]
}

let txtJSON = JSON.stringify(carro)

document.getElementById('jsontxt').innerHTML = (txtJSON);

let objJSON = JSON.parse(txtJSON)

document.getElementById('jsonobj').innerHTML = (objJSON.modelo);

//Exemplo de uso do JSON
function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/');
    ajax.send();

    ajax.onload = function(){
//    document.getElementById('txtajax').innerHTML = this.responseText;
    let objajax = JSON.parse(this.responseText);
    let logradouro = objajax.logradouro;
    let bairro = objajax.bairro;
    let cidade = objajax.localidade;
    let estado = objajax.estado;
    let regiao = objajax.regiao;
    let ddd = objajax.ddd;

    document.getElementById('txtajax').innerHTML = 
    "Endereço: " + logradouro + 
    "<br>Bairro: " + bairro + 
    "<br>Cidade: " + cidade + 
    "<br>Estado: " + estado + 
    "<br>Região: " + regiao + 
    "<br>DDD: " + ddd;
    }
}

//Fim dos estudos, hora de um projeto novo!


/*Extras 
Esse é o script principal do site, tudo que não fizer parte do conteúdo de aprendizado será incluso logo abaixo
*/

//Scroll suave
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        const destino = $($.attr(this, 'href')); // ex: #javascript
        const container = $('#conteudo'); // div rolável

        if(destino.length && container.length){
            const posicao = destino.position().top + container.scrollTop();
            container.animate({ scrollTop: posicao }, 800);
        }
    });
});