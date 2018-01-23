console.log('wtf happened with my file');

var triggerklik = document.querySelector('input.comment');
var button = document.querySelector('input.commentsubmit');

/* var commenting = function() {
button.classList.toggle('commentsubmit2)
}

trigger.klik.addEventListener("click", commenting); */

/* fucntie tellen van checkboxes faves */

var countChecked = function () {
    var n = $("input:checked").length;
    $("#faves").text("Mijn verhalen " + n);
    console.log(n);
};
countChecked();
$("input[type=checkbox]").on("click", countChecked);

/* functie like, hartje */

var button2 = document.querySelector('h4.like');
var liking = function () {
    button2.classList.toggle('like2');
    var state1 = button2.innerHTML;

    if (state1 == '63') {
        button2.innerHTML = '64';
        var state2 = button2.innerHTML;
        console.log(state2 + " new num");
    } else if (state1 == '64') {
        button2.innerHTML = '63';
        console.log(button2.innerHTML);
    } else {
        button2.innerHTML == state1;
    }
};

button2.addEventListener("click", liking);

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

/* functie menu */

var filterbutton = document.getElementById("dropbtn");
var content = document.getElementById("menufull");
var resultatenbutton = document.getElementById("resultaten");
var arrow = document.getElementById("arrow");

var openmenu = function(){
    content.classList.remove('menu2');
    content.classList.add('menu');
    arrow.classList.remove('arrow1');
    arrow.classList.add('arrow2');
};

filterbutton.addEventListener("click", openmenu);

var closemenu = function(){
    content.classList.remove('menu');
    content.classList.add('menu2');  
    arrow.classList.remove('arrow2');
    arrow.classList.add('arrow1')
};

resultaten.addEventListener("click", closemenu);
