console.log('testu');

var triggerklik = document.querySelector('input.comment');
var button = document.querySelector('input.commentsubmit');

/* var commenting = function() {
	button.classList.toggle('commentsubmit2')
}

triggerklik.addEventListener("click", commenting); */

/* functie comment */

var focusEl = document.activeElement;
var commenting = function () {
    if (focusEl = triggerklik) {
        button.classList.add('commentsubmit2');
        console.log('has focus');
    } else {
        button.classList.remove('commentsubmit2');
        console.log('no more focus');
    }
};

/* functie like, hartje */

var button2 = document.querySelector('h4.like');
var liking = function () {
    button2.classList.toggle('like2');
    var state1 = button2.innerHTML;
    
    if (state1 == '63') {
        button2.innerHTML = '64';
        var state2 = button2.innerHTML;
        console.log(state2 + 'new num');
    }
    else if (state1 == '64') {
        button2.innerHTML = '63';
        console.log(button2.innerHTML);
    }
    else {
        button2.innerHTML == state1;
    }
};

button2.addEventListener("click", liking);

/* functie tellen van checkboxes faves */

var countChecked = function() {
  var n = $( "input:checked" ).length;
  $( "#faves" ).text( "Mijn verhalen " + n );
    console.log(n);
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );


/* BRONNEN
https://www.w3schools.com/jsref/event_onfocus.asp onfocus element 
https://stackoverflow.com/questions/36430561/how-can-i-check-if-my-element-id-has-focus gebruikt voor vergelijken van elementen actief/niet actief
https://codepen.io/joostf/pen/bwrryR basis van de microinteractie */
