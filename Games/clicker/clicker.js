var points = 0
var manualPoints = 1
var Triangles = 0
var Squares = 0
var Pentagons = 0
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

document.getElementById("manualAdder").style.width= "17.5vw";
        document.getElementById("manualAdder").style.height= "17.5vw";

function setAdderPosition(s) {
    let adderLeft = 12.5 - (s/2)
    let adderTop = 40 - (s/2)
    document.getElementById("manualAdder").style.left= adderLeft+"vw";
    document.getElementById("manualAdder").style.top= adderTop+"vh";
    let done = false 
    if (points>=2 && done==false) {
        done = true
        document.getElementById("manualAdder").style.width= "1vw";
        document.getElementById("manualAdder").style.height= "20vw";
    }
}

setAdderPosition(17.5)

document.getElementById("manualAdder").addEventListener("click", function(){
    points = points + manualPoints
})

setInterval(() => {
    let i = (Triangles*3) + (Squares*4) + (Pentagons*5) + (Hexagons*6) + (Heptagon*7) + (Octagon*8) + (Nonagon*9) + (Decagon*10)
    let j = (Hendecagon*11) + (Dodecagon*12) + (Tridecagon*13) + (Tetradecagon*14) + (Pentadecagon*15)
    let k = (Hexadecagon*16) + (Heptadecagon*17) + (Octadecagon*18) + (Enneadecagon*19) + (Icosagon*20)
    let ppt = (i+j+k)/50
    points = points + ppt
    document.getElementById("pointNumber").innerText = Math.round(points)
}, 20);

// clip-path: polygon(0% 13.4%, 100% 13.4%, 50% 100%);