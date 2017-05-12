$(document).ready(function(){
    $(".pulse-button").delay(2000).hide(1000)
    $(".pulse-button-done").delay(2000).fadeIn(1000)
    $(".pulse-button-done").delay(1000).hide(1000)
    $("#traininfo").delay(5000).slideDown()
});

$(".maxbut").click(function(){
    $(".container").empty();
    $("h1").remove();
    $("<h1>Today</h1>").appendTo("#maxcenter");
    $("<img id="+'maximg'+" class="+'img'+'img-repsonsive'+" src="+"london.png"+">").appendTo("html");
    $("<img id="+'maximg2'+" class="+'img'+'img-repsonsive'+" src="+"london2.png"+">").appendTo("html");
});