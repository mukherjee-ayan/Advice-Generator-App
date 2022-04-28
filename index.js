
const url = 'https://api.adviceslip.com/advice';

$('.img-dice').click(function(){
  makeHttpRequest();
});

function makeHttpRequest(){
  $.get(url, function(data, status){
    console.log(data);
    var obj = JSON.parse(data);
    var id = obj.slip.id;
    var advice = obj.slip.advice;
    $(".id").text("Advice #" + id);
    $(".advice-quote").text('"' + advice + '"');
  });
}
