/* Função que fecha o popup permanentemente ao aceitar o cookie */
var aceito = document.getElementById('popup')

function acept(){
    localStorage.lgpd = "ativo"
    aceito.classList.remove('exibir')
}

if (localStorage.lgpd == "ativo"){
    aceito.classList.remove('exibir')
}else{
    aceito.classList.add('exibir')
}

/* Função que fecha o popup, mas reaparecerá quando recarregar a página */
function saida(){
    sair = "ativo"
    aceito.classList.remove('exibir')
}

if (sair == "ativo"){
    fechar.classList.remove('exibir')
}else{
    aceito.classList.add('exibir')
}
