//Utilizando a sintaxe do Jquery
$("#teste").html("Teste");

//Adicionando uma classe com a sintaxe do Jquery.
$("p").addClass("paragrafoMain");

$(document).ready(function () {
  // window.alert("O Programa está pronto!");
  $("h1").html("Inserido com Jquery.");
  $("h1").addClass("h1-main");
  //$("h1").removeClass("title-yellow");
  $("div").addClass("container");
  $(".container").html("Container Principal!");
});

//Utilizando JavaScript Puro
document.getElementById("teste2").innerHTML = "Teste 2";
