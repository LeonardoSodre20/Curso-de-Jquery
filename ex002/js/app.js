$(document).ready(function () {
  $("#btn").click(function () {
    // $("#teste").html("Mudei o Texto do Parágrafo");
    //$("#teste").hide(); //Esconde os parágrafos durante o click.
    // $("#btn").dblclick(function () {
    //   $("#teste").html("Mudei o Texto com o clique duplo!");
    // });//Clique duplo
  });

  // $("#btn").mouseenter(function () {
  //   alert("ativou o mouseenter!");
  // });

  // $("#btn").mouseleave(function () {
  //   alert("desativou o mouseleave!");
  // });

  $("#btn").hover(
    function () {
      $(this).text("Entrou o Mouse!");
    },
    function () {
      $(this).text("Saiu o Mouse");
    }
  );

  const styleInputCamp = () => {
    $("#campInput").focus(function () {
      $(this).css("background-color", "yellow");
      $(this).css("transform", "scale(1.2)");
      $(this).css("transition", "0.5s");
    });

    $("#campInput").blur(function () {
      $(this).css("background-color", "white");
      $(this).css("transform", "scale(1)");
      $(this).css("transition", "0.5s");
    });
  };

  $("#btn").on({
    mouseenter: function () {
      $(this).css("color", "red");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    },
    mouseleave: function () {
      $(this).css("color", "blue");
    },
  });

  styleInputCamp();
});
