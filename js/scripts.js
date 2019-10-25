$(document).ready(function(){

  $("button.submit").click(function(event){

    var ani = parseInt($("input:radio[name=animal]:checked").val());
    var hol = parseInt($("input:radio[name=holiday]:checked").val());
    var col = parseInt($("input:radio[name=color]:checked").val());
    var cel = parseInt($("input:radio[name=celebrity]:checked").val());
    var mov = parseInt($("input:radio[name=movie]:checked").val());
    var foo = parseInt($("input:radio[name=food]:checked").val());
    var anihol = ani + hol;
    var colcel = col + cel;
    var movfoo = mov + foo;

    if (anihol <= 5 && colcel > 5 && movfoo > 5) {
      $("#final-answer").show().text("Python");
      $("button#python").show().click(function(event){
        location.reload();
      });
      $("button#reset").show().click(function(event){
        location.reload();
      });
    }else if (anihol > 5 && colcel <= 5 && movfoo <= 5) {
      $("#final-answer").show().text("javaScript");
      $("button#javascript").show().click(function(event){
        location.reload();
      });
      $("button#reset").show().click(function(event){
        location.reload();
      });
    }else if (anihol <= 5 && colcel <= 5 && movfoo <= 5) {
      $("#final-answer").show().text("C#");
      $("button#c").show().click(function(event){
        location.reload();
      });
      $("button#reset").show().click(function(event){
        location.reload();
      });
    }else if (anihol > 1 && colcel > 1 && movfoo > 1) {
      $("#final-answer").show().text("Ruby");
      $("button#ruby").show().click(function(event){
        location.reload();
      });
      $("button#reset").show().click(function(event){
        location.reload();
      });
    }else {
      $("#final-answer").show().text("Check to make sure all fields are filled out");
      $("button#reset").show().click(function(event){
        location.reload();

      });

    };


  });


});
