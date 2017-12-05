$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var total = parseInt($("input#total").val());
    var countBy = parseInt($("input#countBy").val());

    var result = 0;
    var remainder = (Math.floor(total/countBy)*countBy);

    for(var i = countBy ; result < remainder ; i = countBy) {
      result += countBy;
      alert(result);
    }

    event.preventDefault();
  });
});
