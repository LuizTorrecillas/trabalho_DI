
var botaoTema = document.getElementById("btn-tema");

if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-claro");

        // Informa aos leitores de tela qual é o estado atual do botão
        var claroAtivo = document.body.classList.contains("tema-claro");
        botaoTema.setAttribute("aria-pressed", claroAtivo);
    });
}


var tamanhoFonte = 16; // tamanho inicial em pixels

function aplicarTamanho() {
    document.body.style.fontSize = tamanhoFonte + "px";
}

var botaoAumentar = document.getElementById("btn-aumentar");
var botaoDiminuir = document.getElementById("btn-diminuir");
var botaoNormal = document.getElementById("btn-normal");

if (botaoAumentar) {
    botaoAumentar.addEventListener("click", function () {
        if (tamanhoFonte < 24) {   // limite para não quebrar o layout
            tamanhoFonte = tamanhoFonte + 2;
            aplicarTamanho();
        }
    });
}

if (botaoDiminuir) {
    botaoDiminuir.addEventListener("click", function () {
        if (tamanhoFonte > 12) {
            tamanhoFonte = tamanhoFonte - 2;
            aplicarTamanho();
        }
    });
}

if (botaoNormal) {
    botaoNormal.addEventListener("click", function () {
        tamanhoFonte = 16;
        aplicarTamanho();
    });
}



var slides = document.querySelectorAll(".slide");
var slideAtual = 0;

function mostrarSlide(indice) {
    // esconde todos
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }
    // mostra só o escolhido
    slides[indice].classList.add("ativo");

    // atualiza o texto do contador (lido por leitores de tela)
    var contador = document.getElementById("contador-slide");
    if (contador) {
        contador.textContent = "Imagem " + (indice + 1) + " de " + slides.length;
    }
}

var botaoProximo = document.getElementById("btn-proximo");
var botaoAnterior = document.getElementById("btn-anterior");

if (botaoProximo) {
    botaoProximo.addEventListener("click", function () {
        slideAtual = slideAtual + 1;
        if (slideAtual >= slides.length) {
            slideAtual = 0;   // volta para a primeira imagem
        }
        mostrarSlide(slideAtual);
    });
}

if (botaoAnterior) {
    botaoAnterior.addEventListener("click", function () {
        slideAtual = slideAtual - 1;
        if (slideAtual < 0) {
            slideAtual = slides.length - 1;   // vai para a última imagem
        }
        mostrarSlide(slideAtual);
    });
}



var campoBusca = document.getElementById("campo-busca");
var projetos = document.querySelectorAll(".projeto");
var resultadoBusca = document.getElementById("resultado-busca");

if (campoBusca) {
    campoBusca.addEventListener("input", function () {
        var termo = campoBusca.value.toLowerCase();
        var encontrados = 0;

        for (var i = 0; i < projetos.length; i++) {
            var textoDoCard = projetos[i].textContent.toLowerCase();

            if (textoDoCard.indexOf(termo) !== -1) {
                projetos[i].classList.remove("escondido");
                encontrados = encontrados + 1;
            } else {
                projetos[i].classList.add("escondido");
            }
        }

        resultadoBusca.textContent = encontrados + " projeto(s) encontrado(s)";
    });
}

var formContato = document.getElementById("form-contato");

if (formContato) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();   // impede o recarregamento da página

        var aviso = document.getElementById("aviso-form");
        aviso.textContent = "Mensagem registrada! (o envio real ainda será implementado)";

        formContato.reset();
    });
}


var formLogin = document.getElementById("form-login");

if (formLogin) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var usuario = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;
        var aviso = document.getElementById("aviso-login");

        if (usuario === "" || senha === "") {
            aviso.textContent = "Preencha usuário e senha.";
        } else if (senha.length < 6) {
            aviso.textContent = "A senha deve ter pelo menos 6 caracteres.";
        } else {
            aviso.textContent = "Login validado no navegador. Falta o back-end.";
        }
    });
}
