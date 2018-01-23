console.log('testuuuuuu');

var filterbutton = document.getElementById("dropbtn");
var content = document.getElementById("menufull");
var resultatenbutton = document.getElementById("resultaten");
var arrow = document.getElementById("arrow");

var openmenu = function () {
    content.classList.remove('menu2');
    content.classList.add('menu');
    arrow.classList.remove('arrow1');
    arrow.classList.add('arrow2')
}

filterbutton.addEventListener("click", openmenu);

var closemenu = function () {
    content.classList.remove('menu');
    content.classList.add('menu2');
    arrow.classList.remove('arrow2');
    arrow.classList.add('arrow1')
}
resultaten.addEventListener("click", closemenu);

/* functie zoekbar */

var zoekbutton = document.getElementById("searchIcon");
var zoekbalk = document.getElementById("searchBar");
var zoek1 = zoekbalk.className;

console.log(zoek1);

var barUitschuiven = function () {
    var zoek1 = zoekbalk.className;
    
    if (zoek1 == "search2") {
        zoekbalk.classList.remove("search2");
        zoekbalk.classList.add("search1");
        console.log('2 naar 1');
        var zoek2 = zoekbalk.className;
    } 
    else if (zoek1 == "search1") {
        zoekbalk.classList.remove("search1");
        zoekbalk.classList.add("search2");
        console.log('1 naar 2');
    } 
    else {
        zoekbalk.classList.add("search2");
    }

};

zoekbutton.addEventListener("click", barUitschuiven);


/* fucntie tellen van checkboxes faves */

var countChecked = function () {
    var n = $("input:checked").length;
    if (n == 0) {
        $("#faves").text("Mijn verhalen ");
    } else {
        $("#faves").text("Mijn verhalen " + n);
    }
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

/* functie zoekbar */

/* var zoekbutton = document.getElementById("searchIcon");
var zoekbalk = document.getElementById("searchBar");

console.log(zoekbutton.src);

var barUitschuiven = function(){
    zoekbalk.classList.remove('search2');
    zoekbalk.classList.add('search1');
};

zoekbutton.addEventListener("click", barUitschuiven); */
