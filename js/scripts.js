$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const answerOne = parseInt($("input:radio[name=city]:checked").val());
    const answerTwo = parseInt($("input:radio[name=burrito]:checked").val());
    const answerThree = parseInt($("input:radio[name=flavor]:checked").val());
    const answerFour = parseInt($("input:radio[name=flavor]:checked").val());
    const answerFive = parseInt($("input:radio[name=flavor]:checked").val());

    const result = answerOne + answerTwo + answerThree + answerFour + answerFive 
  }

}