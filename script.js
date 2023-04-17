var input = document.querySelector("#input");
var output = document.querySelector("#output");

function criptografar() {
  // Obter o valor da entrada
  var mensagem = input.value;

  // Criptografar a mensagem
  var mensagemCriptografada = mensagem.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
  .replace(/o/g, "ober").replace(/u/g, "ufat");

  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + mensagemCriptografada + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

  document.querySelector("#input").value = "";

}

function descriptografar() {
  // Obter o valor da entrada
  var mensagem = input.value;

  // Criptografar a mensagem
  var mensagemDecriptografada = mensagem.replace(/enter/g, "e").replace(/imes/g, "i")
  .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + mensagemDecriptografada + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

  document.querySelector("#input").value = "";

}

function copiar() {
  var textoCop = document.getElementById('input-texto');

  textoCop.select();
  document.execCommand('copy');
}  
