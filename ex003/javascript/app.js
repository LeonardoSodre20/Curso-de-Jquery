$(document).ready(function () {
  //   $(".btnOcultar").click(function () {
  //     $(".items").hide(2000, function () {
  //       alert("Terminou de Esconder");
  //     }); //Ocultar os Items
  //   });

  //   $(".btnExibir").click(function () {
  //     $(".items").show(2000, function () {
  //       alert("Terminou de Exibir");
  //     }); //Mostrar os Items
  //   });

  $(".btnExibirAndOcultar").click(function () {
    $(".items").toggle(2000, function () {
      alert("Exibiu e Ocultou os Items");
    });
  });

  $(".btnExibirAndOcultar").click(function () {
    $(".items").fadeOut();
  });
});
