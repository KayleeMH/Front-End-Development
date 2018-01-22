console.log('test');

var huidigealinea = document.getElementById('tekst').src;
console.log(huidigealinea);

function alinea() {

    if (huidigealinea = 'Assets/Script/Nichterig/Desktop/Alinea1.png') {
        document.getElementById('tekst').src =
            'Assets/Script/Nichterig/Desktop/Alinea2.png';
        var newalinea = document.getElementById('tekst').src;
        console.log(newalinea);
    } /* else if (newalinea = 'Assets/Script/Nichterig/Desktop/Alinea2.png') {
        document.getElementById('tekst').src =
            'Assets/Script/Nichterig/Desktop/Alinea3.png';
    } else {
        document.getElementById('tekst').src =
            'Assets/Script/Nichterig/Desktop/Alinea4.png';
    } */
    
    
    
    else if (newalinea = 'Assets/Script/Nichterig/Desktop/Alinea2.png') {
        document.getElementById('tekst').src =
            'Assets/Script/Nichterig/Desktop/Alinea3.png';
    }
}

/* window.onscroll = function () {
    console.log('scrolling');
}; */


/* window.onscroll = function() alinea2()};

function alinea2() {
    if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
        document.getElementById("tekst").className = "slideUp";
} */
