$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const answerOne = parseInt($("input:radio[name=city]:checked").val());
    const answerTwo = parseInt($("input:radio[name=burrito]:checked").val());
    const answerThree = parseInt($("input:radio[name=recreational]:checked").val());
    const answerFour = parseInt($("input:radio[name=domicile]:checked").val());
    const answerFive = parseInt($("input:radio[name=music]:checked").val());
    const result = answerOne + answerTwo + answerThree + answerFour + answerFive;
    
    if(result < 9) {
      document.getElementById("javascript").style.display ="block";
      document.getElementById("hideAll").style.display ="none";
    } else if (result >= 9 && result < 15) {
      document.getElementById("ruby").style.display ="block";
      document.getElementById("hideAll").style.display ="none";
    } else if (result == 15) {
      document.getElementById("python").style.display ="block";
      document.getElementById("hideAll").style.display ="none";
    }

      


      

      event.preventDefault();
    
    
});
});

