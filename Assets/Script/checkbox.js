console.log('blabla test');

/* var checked = 0;
function countboxes (){
    document.getElementsByName('fav')
} */

/* var inputs = document.getElementsByTagName("input");
var checked = 0;   
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && inputs[i].checked)
        checked++;
} */

/* var countChecked = function() {
  var checked = $( "input:checked" ).length;
  $( "div" ).text(checked);
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked ); */

var countChecked = function() {
  var n = $( "input:checked" ).length;
  $( "#faves" ).text( "Mijn verhalen " + n );
    console.log(n);
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );