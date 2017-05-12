function hideshizzle(){
$("._1").hide();
$("._2").hide();
$("._3").hide();
$("._4").hide();
$("._5").hide();
$("._6").hide();
$("._7").hide();
$("._8").hide();
$("._9").hide();
}
hideshizzle();
var printInterval;
var times = 0;
var timesrun = 0;

start();

function start() {
    function print() {
        times += 1;
        $("._" + times).fadeIn( 1000 );
        if (times == 10) {
            times = 0;
            hideshizzle();
            stop();
            
        }
        if (times==4 && timesrun == 0){
            timesrun += 1;
            $(".firstdel").remove();
            $('<span class="col-sm-12 glyphicon glyphicon-ok"></span>').appendTo('.first');
            $("#header").text("Carriage 1 (2)");
        }
        if (times==7 && timesrun == 1){
            timesrun += 1;
            $(".seconddel").remove();
            $('<span class="col-sm-12 glyphicon glyphicon-ok"></span>').appendTo('.second');
            $("#header").text("Carriage 1 (1)");
        }
        if (times==9 && timesrun == 2){
            timesrun += 1;
            $(".thirddel").remove();
            $('<span class="col-sm-12 glyphicon glyphicon-ok"></span>').appendTo('.third');
            $("#header").text("Carriage 1 clear");
        }
    }
    printInterval = setInterval(print, 800);
}

function stop() {
      clearInterval(printInterval);
    }