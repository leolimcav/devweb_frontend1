$(document).ready(() => {
  $(".gallery-second").hide();
  $("#btn-see").click(() => {
    $("#btn-see").hide();
    $(".gallery-second").show();
  });
});
