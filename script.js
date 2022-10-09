document.getElementById("botaoEnviar").addEventListener("click", validaFormulario())

function validaFormulario(){
if(document.getElementById("username") != "" && document.getElementById("usermail") != ""){
    window.alert("Prontinho! Você receberá as novidades por email!")
}else{
    window.alert("Por favor, preencha todos os campos para realizar o envio!")
    //peça que a usuaria preencha os campos
}
}