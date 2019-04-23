$(document).ready(() => {
  $("#tel").inputmask({ mask: "(99) 9-9999-9999" });
});

$(document).ready(() => {
  $("#submit").click(() => {
    alert("Message Sent!");
  });
});
