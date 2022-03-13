$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });

  $(".container-div").click(function () {
    // $(".container-div").animate({
    //     left: "0",
    //     top: '250px'
    // });
    $(this).css("background-color", "blue").slideUp(2000).slideDown(2000);
  });
});

