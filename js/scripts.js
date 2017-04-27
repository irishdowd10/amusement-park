$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height > 5) {
    $(".above-5").show();
  } else if (height < 5) {
    $(".under-5").show();
  };
});
