$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    
    const answerOne = parseInt($("input:radio[name=city]:checked").val());
    const answerTwo = parseInt($("input:radio[name=burrito]:checked").val());
    const answerThree = parseInt($("input:radio[name=recreational]:checked").val());
    const answerFour = parseInt($("input:radio[name=domicile]:checked").val());
    const answerFive = parseInt($("input:radio[name=music]:checked").val());
    
    if(answerOne + answerTwo + answerThree + answerFour + answerFive < 8) {
      document.getElementById("javascript").style.display = "block";
    } else if (answerOne + answerTwo + answerThree + answerFour + answerFive <= 9 && 14)
      document.getElementById("ruby").style.display = "block";
      else if (answerOne + answerTwo + answerThree + answerFour + answerFive == 15)
      document.getElementById("python").style.display = "block";

      

      event.preventDefault();
    
    
});
});
