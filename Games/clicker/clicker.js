var points = 0
var Triangles = 0
var Squares = 0
var Pentagos = 0
var Hexagons = 0
var Heptagon = 0
var Octagon = 0
var Nonagon = 0
var Decagon = 0
var Hendecagon = 0
var Dodecagon = 0
var Tridecagon = 0
var Tetradecagon = 0
var Pentadecagon = 0
var Hexadecagon = 0
var Heptadecagon = 0
var Octadecagon = 0
var Enneadecagon = 0
var Icosagon = 0

function setAdderPosition(s) {
    var adderLeft = 12.5 - (s/2)
    var adderTop = 40 - (s/2)
    document.getElementById("manualAdder").style.left= adderLeft+"vw";
    document.getElementById("manualAdder").style.top= adderTop+"vh";
}

setAdderPosition(1)

document.getElementById("manualAdder").addEventListener("click", function(){
    points++
})



