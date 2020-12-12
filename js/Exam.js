$('.answer-element input').on( "click", function() {
var selectedAnswer = $(this).parent();
  var allAnswers = $(this).parent().parent().children();
  allAnswers.removeClass('selected-answer');
  selectedAnswer.addClass('selected-answer');

});
$('.answer-element-images input').on( "click", function() {
  var selectedAnswer = $(this).parent();
    var allAnswers = $(this).parent().parent().children();
    allAnswers.removeClass('selected-answer');
    selectedAnswer.addClass('selected-answer');
  
  });
  
  document.querySelector("button").onclick = function() {
    //disable
    this.disabled = true;
    
    console.log(1234);
    //do some validation stuff
}