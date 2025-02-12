//Exibir uma mensagem assim que a pagina abre
alert("Promoção do dia! 50% de desconto em todos os produtos.");

//Exercicio 2- criar um botão que ao clicar mostra uma mensagem ao usuario
function exibirMensage() {
    alert("Você ganhou mais um descontinho! 15% se pagar a vista.");
    //aqui to exibindo essa mensagem para o DEV, mostrando qual método estou usando
    //muito usado para que possamos saber  que esta acontecendo quando no thebug não da pra entender
    console.log("A página executou o método exibirMensage")
}

//Exercício 3- criar uma calculadora
//OPERADORES (+ - * /)
//FUNCTIOM é um método -sempre ter o nome do que vai fazer

function realizarCalculo() {
    //let é uma variável para dentro da função
    //var é usado fora de function, pois é global
    //const é usado quando o valor dele NÃO vai mudar nunca
    let numero1 = parseInt(prompt("Informe o primeiro valor:"));
    let numero2 = parseInt(prompt("Informe o segundo valor:"));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}

// valor1 e valor2 são parâmetros
function somar(valor1, valor2) {
    //operação
    let resultado = valor1 + valor2;
    //exibir no console
    console.log("O resultado da soma entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log("O resultado da subtração entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log("O resultado da divisão entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log("O resultado da multiplicação entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

//Calculadora "funcional"
var valor1 = "";
var valor2 = "";
var operacao = "";

function guardarNumero(valor) {
    //O ! é negação do que estiver escrito depois
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = "";
    valor2 = "";
    operacao = "";
}

//aqui usamos muito else if, mas como a variálvel é a mesma 
//só muda o valor, é melhor usar switch.
//o else if é mais usado quando muda a variável e o valor
function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;

    if (operacao == "+") {
        resultado = valor1 + valor2;
    } else if (operacao == "-") {
        resultado = valor1 - valor2;
    } else if (operacao == "*") {
        resultado = valor1 * valor2;
    } else if (operacao == "/") {
        resultado = valor1 / valor2;
    }

    alert("Resultado: " + resultado);
    limpar();
}

//Exemplo do switch
function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
    }
    alert("Resultado: " + resultado);
    limpar();
}

//Execício 4 - verificar se o usuário dormiu suficiente
function identificarSonoUsuario() {
    const horasDormidas = parseInt(prompt("Informe quantas horas você dormiu esta noite:"));
    const horasMinimasSono = 8;
    if (horasDormidas < horasMinimasSono) {
        alert("Você não dormiu o suficiente, melhore! ");
    } else {
        alert("Parabéns! Você dormiu o suficiente.");
    }
}

//Exercício 5 - Criar um método que retorna o horario em formato 12h
function idtHoraFormato12() {
    const qtdHora = prompt("Informe o horario atual");
    if (qtdHora > 12) {
        alert("São " + (qtdHora - 12) + "pm.");
    } else {
        alert("São " + qtdHora + "am.");
    }
}


//Exercício 6 - verificar idade, ingresso ou lista
function verificarEntradaBalada() {
    const idade = prompt("Informe sua idade");
    const lista = prompt("Você tem nome na lista? Digite Sim ou Não");
    const ingresso = prompt("Você tem ingresso? Diga Sim ou Não");

    if (idade >= 18 && (lista.toUpperCase() == "SIM" || ingresso.toUpperCase() == "SIM")) {
        alert("Entrada permitida!");
    } else {
        alert("Entrada negada.");
    }
}

//MELHORADA
function verificarEntradaMelhorada() {
    if (prompt("Informe sua idade") >= 18 &&
        (prompt("Você tem nome na lista? Digite Sim ou Não").toUpperCase() == "SIM" ||
            prompt("Você tem ingresso? Diga Sim ou Não").toUpperCase() == "SIM")) {
        alert("Entrada permitida!");
    } else {
        alert("Entrada negada.");
    }
}

//Exercício 7 - verificar meia entrada
function verificarMeiaEntrada() {
    const idadeUsuario = prompt("Informe sua idade:");
    if (idadeUsuario <= 12 || idadeUsuario >= 60) {
        alert("Você tem direito a meia-entrada.");
    } else {
        alert("Você paga a entrada inteira.");
    }
}

//Exercício 8 - Obrigar a informar nome
function identificarNomeUsuario() {
    const nomeUsuario = prompt("Informe seu nome:");
    if (!nomeUsuario) {
        alert("Entrada negada. É OBRIGATÓRIO você informar seu nome!");
        //para que fique em loop e peça novamente o nome do usuario, chamamos a function de novo.
        identificarNomeUsuario();
    } else {
        alert("Entrada liberada!");
    }
}
//Exercício 9- IMC(Indice de Massa Corporal)
function getIndiceCorporal() {
    const pesoUsuario = prompt("Qual seu peso?");
    let alturaUsuario = prompt("Qual sua altura?");

    //Verificar se esta em centimetros e converter para metros
    if (alturaUsuario.indexOf(".") == -1 && alturaUsuario.length > 1) {
        alturaUsuario = alturaUsuario / 100;
    }
    const valorIMC = pesoUsuario / (alturaUsuario * alturaUsuario);

    if (valorIMC <= 18.5) {
        alert("Você esta abaixo do peso.");
    } else if (valorIMC > 18.5 && valorIMC <= 25) {
        alert("Você esta no peso ideal.");
    } else if (valorIMC > 25 && valorIMC <= 30) {
        alert("Você esta acima do peso.");
    } else {
        alert("Você esta obeso(a)");
    }
}

//Exercício 10 - Switch - converter dias da semana em números
function diaDaSemana() {
    const DOMINGO = 1, SEGUNDA = 2, TERCA = 3, QUARTA = 4, QUINTA = 5, SEXTA = 6, SABADO = 7;
    getDiaUsuario = parseInt(prompt("Descubra que dia da semana é. Coloque um número de 1 a 7:"));

    switch (getDiaUsuario) {
        case DOMINGO:
            alert("Hoje é Domingo");
            break;
        case SEGUNDA:
            alert("Hoje é Segunda-feira");
            break;
        case TERCA:
            alert("Hoje é Terça-feira");
            break;
        case QUARTA:
            alert("Hoje é Quarta-feira");
            break;
        case QUINTA:
            alert("Hoje é Quinta-feira");
            break;
        case SEXTA:
            alert("Hoje é Sexta-feira");
            break;
        case SABADO:
            alert("Hoje é Sábado");
            break;
        default:
            alert("Dia invalido");
    }
}

//Exercício 11 - Calcular valor compra 
function calcularValorTotal() {
    const valorProduto = parseFloat(prompt("Informe o valor total da sua compra"));
    //calcular valor da forma de pagamento
    let total = valorProduto + calcularFormaPgto(valorProduto);
    console.log("Total com forma de pagamento: " + total);
    //calcular valor do desconto(se houver)
    total -= calcularDesconto(valorProduto);
    console.log("Total com cupom: " + total);
    //calcular valor do frete
    total += calcularFrete();
    alert("Total a pagar: R$ " + total);
}
//esse vlProduto é o valorProduto, ele pode ser passado com acrécimo e tals por isso o nome diferente. Mas podia ser igual
function calcularFormaPgto(vlProduto) {
    const formaPgto = parseInt(prompt("Informe a forma de paganto \n1 - Cartão de Débito\n2 - Pix\n3 - Cartão de Crédito\n4 - Boleto"));
    const CARTAODEB = 1, PIX = 2, CARTAOCRED = 3, BOLETO = 4;
    switch (formaPgto) {
        case CARTAODEB:
            return -(vlProduto * 0.05);
        case PIX:
            return -(vlProduto * 0.1);
        case CARTAOCRED:
            return vlProduto * 0.02;
        case BOLETO:
            return 0;
    }
}

function calcularDesconto(vlProduto) {
    const cupom = prompt("Você tem algum cupom de desconto? Se sim, digite-o.");
    let valorCupom = cupom.substring(0, 2);
    if (verificarCupomValido(valorCupom)) {
        //aplicar desconto
        return vlProduto * (valorCupom / 100);
    }
    return 0;
}
//verificando se é um numero.
//isNaN (é 'não é um numero') - !isNaN (não é 'não é um numero')
function verificarCupomValido(valorCupom) {
    return !isNaN(valorCupom);
}
function calcularFrete() {
    const tipoFrete = parseInt(prompt("Escolha o tipo de frete:\n1- Padrão\n2-Expresso"));
    const FRETEPADRAO = 1, FRETEESPRESSO = 2;
    switch (tipoFrete) {
        case FRETEPADRAO:
            return 10;
        case FRETEESPRESSO:
            return 20;
    }
    return 0;
}

//Exercício 12 LOOPS - FOR e WHILE
function contarDezFor() {
    for (let conta = 1; conta <= 10; conta++) {
        console.log(conta);
    }
}

function contarDezWhile() {
    let contagem = 1;
    while (contagem <= 10) {
        console.log(contagem);
        contagem++;
    }
}

//Decrescente 10 até 0
function contarZeroFor() {
    for (let conta = 10; conta > 0; conta--) {
        console.log(conta);
    }
}

function contarZeroWhile() {
    let contagem = 10;
    while (contagem > 0) {
        console.log(contagem);
        contagem--;
    }
}

//Só pares
function contarParFor() {
    for (let conta = 0; conta <= 10; conta += 2) {
        console.log(conta);
    }
}

function contarParWhile() {
    let contagem = 0;
    while (contagem <= 10) {
        console.log(contagem);
        contagem += 2;
    }
}

//Só ímpares
function contarImparFor() {
    for (let conta = 1; conta <= 10; conta += 2) {
        console.log(conta);
    }
}

function contarImparWhile() {
    let contagem = 1;
    while (contagem <= 10) {
        console.log(contagem);
        contagem += 2;
    }
}

//Exercício 13 - dizer uma nota de 0 a 10
function pedirNota() {
    let nota;
    while (true) {
        nota = parseInt(prompt("Informe uma nota:"));
        if (nota > 10 || nota < 0) {
            alert("Nota errada, coloque uma nota entre 0 e 10");
        } else {
            break;
        }
    }
    alert("Nota valida!");
}

//Exercício 14 - Crie uma senha e faça o usuario dizer certo
function fazerLogin() {
    const senhaUsuario = "Fernanda", senhaNumeros = "12358";
    let usuario, senha;
    while (true) {
        usuario = prompt("Digite o usuario:");
        senha = prompt("Digite senha:");
        if (usuario != senhaUsuario || senha != senhaNumeros) {
            alert("Usuario ou senha invalidos.");
        } else {
            break;
        }
    }
    alert("Liberado");
}

//Exercício 15 - Envie palavras (Ignorar palavras com menos de 3 caracters e dizer o porque, 
//parar quando a palavra for "sair")

function solicitarPalavra() {
    let palavraUsuario;
    while (palavraUsuario != "sair") {
        palavraUsuario = prompt("Escreva uma palavra:");
        if (palavraUsuario.length < 4) {
            alert(palavraUsuario + " esta fora dos padões esperados.");
            continue;
        }
    }
}

//Exercício 16 - ARRAY
//colocar nome a lista vip

function listaVip() {
    let nomeUsuario = [];
    for (let i = 0; i < 10; i++) {
        nomeUsuario.push(prompt("Nome completo"));
    }
    console.log(nomeUsuario);
}

//Exercício 17 - ARRAY
//validar usuario e senha

function realizarLoginUsuarios() {
    const usuarios = ["@Fskoula", "Ana_Paula", "Gaby125"];
    const senhas = ["fe1996", "aninha", "Gabriela125"];
    let usuarioLogin = prompt("Digite seu usuário");
    let senhaLogin = prompt("Digite sua senha");
    let fezLogin = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == usuarioLogin && senhas[i] == senhaLogin) {
            fezLogin = true;
            alert("Login realizado");
            break;
        }
    }
    if (!fezLogin) {
        alert("Login inválido");
    }
}

//Exercício 18 -contar as letras na palavras
//usando alert e console.log
function contarLetras() {
    const palavras = ["gato", "cachorro", "elefante", "arara"];
    palavras.forEach(letras => {
        console.log("A palavra " + letras + " tem " + letras.length + " letras.");
        alert("A palavra " + letras + " tem " + letras.length + " letras.");
    })
}

//para usar só o console.log ou alert
//function contarLetras() {
//   const palavras = ["gato", "cachorro", "elefante", "arara"];
//    palavras.forEach(letras => console.log("A palavra " + letras + " tem " + letras.length + " letras."));
//}

//Exercício 19 - manipulando HTML - texto e conteúdo

function contandoClicks() {
    const resultado = document.getElementById("resultado");
    resultado.innerText = parseInt(resultado.innerText) + 1;
}

//Exercício 2, - manipulando HTML - Propriedades

function visualizarSenha() {
    const senha = document.getElementById('senha');
    const iconeSenha = document.getElementById('iconeSenha');
    if (senha.type == 'text') {
        senha.type = 'password';
        iconeSenha.innerHTML = '<svg onclick="visualizarSenha()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
            + '<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 '
            +'13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>'
            + '<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>'
            + '</svg>'
    } else {
        senha.type = 'text';
        iconeSenha.innerHTML = '<svg onclick="visualizarSenha()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">'
        +'<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 '
        +'8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>'
        +'<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>'
        +'<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 '
        +'13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/> </svg>'
    }
}
function esconderTexto(){
    const textoEsconder = document.getElementById('texto-esconder');
    textoEsconder.classList.add('escondido');
}

function mostrarTexto(){
    const textoEsconder = document.getElementById('texto-esconder');
    textoEsconder.classList.remove('escondido');
}

function esconderMostrarTexto(){
    const btMostraEsconde = document.getElementById('bt-mostra-esconde');
    if (btMostraEsconde.innerText=='Esconder texto'){
        btMostraEsconde.innerText='Mostrar texto';
        esconderTexto();
    } else {
        btMostraEsconde.innerText='Esconder texto';
        mostrarTexto();
    }
}

function incluirTexto(){
    const textoUsuario = document.getElementById('texto-usuario');
    const conteudoTexto = document.getElementById('conteudo-texto');
    const texto = document.createElement('p');
    texto.innerText = textoUsuario.value;
    conteudoTexto.appendChild(texto);
    textoUsuario.value ='';

}

function limpar() {
    const conteudoTexto =document.getElementById('conteudo-texto');
    conteudoTexto.innerHTML='';
}