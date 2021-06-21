$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const answerOne = parseInt($("input:radio[name=city]:checked").val());
    const answerTwo = parseInt($("input:radio[name=burrito]:checked").val());
    const answerThree = parseInt($("input:radio[name=recreational]:checked").val());
    const answerFour = parseInt($("input:radio[name=domicile]:checked").val());
    const answerFive = parseInt($("input:radio[name=music]:checked").val());
    const result = answerOne + answerTwo + answerThree + answerFour + answerFive;
    
    if(result < 9) {
      $("#hideAll").hide()
      $("#javascript").show()
    } else if (result >= 9 && result < 15) {
      $("#hideAll").hide()
      $("#ruby").show()
    } else if (result == 15) {
      $("#hideAll").hide()
      $("#python").show()
    }
      event.preventDefault();
  });
});

