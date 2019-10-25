
function clicou(){
    alert("Voce clicou em mim");
    document.getElementById("agradecimentos").innerHTML = "Obrigado por clicar em mim";


}


function redirecionar(){
    window.open("https://globallabs.ventures/");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passa o mouse em mim";

}
function voltar(elemento){
    elemento.innerHTML = "passe o mouse sobre mim";

}

function load(){
 alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);

}