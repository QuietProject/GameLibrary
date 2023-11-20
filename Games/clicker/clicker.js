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

document.getElementById("manualAdder").addEventListener("click", function () {
    points = points + manualPoints
    document.getElementById("manualAdder").style.height = "17.5vw"
})

setInterval(() => {
    let i = (Triangles * 3) + (Squares * 40) + (Pentagons * 50) + (Hexagons * 60) + (Heptagon * 700) + (Octagon * 800) + (Nonagon * 900) + (Decagon * 1000)
    let j = (Hendecagon * 1100) + (Dodecagon * 12000) + (Tridecagon * 13000) + (Tetradecagon * 14000) + (Pentadecagon * 150000)
    let k = (Hexadecagon * 160000) + (Heptadecagon * 1700000) + (Octadecagon * 1800000) + (Enneadecagon * 1900000) + (Icosagon * 2000000)
    let ppt = (i + j + k) / 50
    points = points + ppt
    document.getElementById("pointNumber").innerText = Math.round(points)
}, 20);

document.getElementById("upgradeBuy3").addEventListener("click", function () {
    let multi = Math.pow(1.5, Triangles)
    let price = Math.round(30 * multi)
    if (points >= (price)) {
        points = points - price
        Triangles++
    }
    let multi2 = Math.pow(1.5, Triangles)
    let price2 = Math.round(30 * multi2)
    document.getElementById("upgradeBuy3Text").innerText = price2;
    if (Triangles == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(50% 5%, 0 95%, 100% 95%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount3").innerText = Triangles
})

document.getElementById("upgradeBuy4").addEventListener("click", function () {
    let multi = Math.pow(1.5, Squares)
    let price = Math.round(200 * multi)
    if (points >= (price)) {
        points = points - price
        Squares++
    }
    let multi2 = Math.pow(1.5, Squares)
    let price2 = Math.round(200 * multi2)
    document.getElementById("upgradeBuy4Text").innerText = price2;
    if (Squares == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount4").innerText = Squares
})

document.getElementById("upgradeBuy5").addEventListener("click", function () {
    let multi = Math.pow(1.5, Pentagons)
    let price = Math.round(1000 * multi)
    if (points >= (price)) {
        points = points - price
        Pentagons++
    }
    let multi2 = Math.pow(1.5, Pentagons)
    let price2 = Math.round(1000 * multi2)
    document.getElementById("upgradeBuy5Text").innerText = price2;
    if (Pentagons == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount5").innerText = Pentagons
})

document.getElementById("upgradeBuy6").addEventListener("click", function () {
    let multi = Math.pow(1.5, Hexagons)
    let price = Math.round(2000 * multi)
    if (points >= (price)) {
        points = points - price
        Hexagons++
    }
    let multi2 = Math.pow(1.5, Hexagons)
    let price2 = Math.round(2000 * multi2)
    document.getElementById("upgradeBuy6Text").innerText = price2;
    if (Hexagons == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount6").innerText = Hexagons
})

document.getElementById("upgradeBuy7").addEventListener("click", function () {
    let multi = Math.pow(1.5, Heptagon)
    let price = Math.round(7500 * multi)
    if (points >= (price)) {
        points = points - price
        Heptagon++
    }
    let multi2 = Math.pow(1.5, Heptagon)
    let price2 = Math.round(7500 * multi2)
    document.getElementById("upgradeBuy7Text").innerText = price2;
    if (Heptagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount7").innerText = Heptagon
})

document.getElementById("upgradeBuy8").addEventListener("click", function () {
    let multi = Math.pow(1.5, Octagon)
    let price = Math.round(15000 * multi)
    if (points >= (price)) {
        points = points - price
        Octagon++
    }
    let multi2 = Math.pow(1.5, Octagon)
    let price2 = Math.round(15000 * multi2)
    document.getElementById("upgradeBuy8Text").innerText = price2;
    if (Octagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount8").innerText = Octagon
})

document.getElementById("upgradeBuy9").addEventListener("click", function () {
    let multi = Math.pow(1.5, Nonagon)
    let price = Math.round(20000 * multi)
    if (points >= (price)) {
        points = points - price
        Nonagon++
    }
    let multi2 = Math.pow(1.5, Nonagon)
    let price2 = Math.round(20000 * multi2)
    document.getElementById("upgradeBuy9Text").innerText = price2;
    if (Nonagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount9").innerText = Nonagon
})

document.getElementById("upgradeBuy10").addEventListener("click", function () {
    let multi = Math.pow(1.5, Decagon)
    let price = Math.round(50000 * multi)
    if (points >= (price)) {
        points = points - price
        Decagon++
    }
    let multi2 = Math.pow(1.5, Decagon)
    let price2 = Math.round(50000 * multi2)
    document.getElementById("upgradeBuy10Text").innerText = price2;
    if (Decagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,90.45% 79.39%,65.45% 97.55%,34.55% 97.55%,9.55% 79.39%,0.00% 50.00%,9.55% 20.61%,34.55% 2.45%,65.45% 2.45%,90.45% 20.61%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount10").innerText = Decagon
})

document.getElementById("upgradeBuy11").addEventListener("click", function () {
    let multi = Math.pow(1.5, Hendecagon)
    let price = Math.round(100000 * multi)
    if (points >= (price)) {
        points = points - price
        Hendecagon++
    }
    let multi2 = Math.pow(1.5, Hendecagon)
    let price2 = Math.round(100000 * multi2)
    document.getElementById("upgradeBuy11Text").innerText = price2;
    if (Hendecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,92.06% 77.03%,70.77% 95.48%,42.88% 99.49%,17.26% 87.79%,2.03% 64.09%,2.03% 35.91%,17.26% 12.21%,42.88% 0.51%,70.77% 4.52%,92.06% 22.97%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount11").innerText = Hendecagon
})

document.getElementById("upgradeBuy12").addEventListener("click", function () {
    let multi = Math.pow(1.5, Dodecagon)
    let price = Math.round(500000 * multi)
    if (points >= (price)) {
        points = points - price
        Dodecagon++
    }
    let multi2 = Math.pow(1.5, Dodecagon)
    let price2 = Math.round(500000 * multi2)
    document.getElementById("upgradeBuy12Text").innerText = price2;
    if (Dodecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,93.30% 75.00%,75.00% 93.30%,50.00% 100.00%,25.00% 93.30%,6.70% 75.00%,0.00% 50.00%,6.70% 25.00%,25.00% 6.70%,50.00% 0.00%,75.00% 6.70%,93.30% 25.00%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount12").innerText = Dodecagon
})

document.getElementById("upgradeBuy13").addEventListener("click", function () {
    let multi = Math.pow(1.5, Tridecagon)
    let price = Math.round(1000000 * multi)
    if (points >= (price)) {
        points = points - price
        Tridecagon++
    }
    let multi2 = Math.pow(1.5, Tridecagon)
    let price2 = Math.round(1000000 * multi2)
    document.getElementById("upgradeBuy13Text").innerText = price2;
    if (Tridecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,94.27% 73.24%,78.40% 91.15%,56.03% 99.64%,32.27% 96.75%,12.57% 83.16%,1.45% 61.97%,1.45% 38.03%,12.57% 16.84%,32.27% 3.25%,56.03% 0.36%,78.40% 8.85%,94.27% 26.76%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount13").innerText = Tridecagon
})

document.getElementById("upgradeBuy14").addEventListener("click", function () {
    let multi = Math.pow(1.5, Tetradecagon)
    let price = Math.round(1750000 * multi)
    if (points >= (price)) {
        points = points - price
        Tetradecagon++
    }
    let multi2 = Math.pow(1.5, Tetradecagon)
    let price2 = Math.round(1750000 * multi2)
    document.getElementById("upgradeBuy14Text").innerText = price2;
    if (Tetradecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,95.05% 71.69%,81.17% 89.09%,61.13% 98.75%,38.87% 98.75%,18.83% 89.09%,4.95% 71.69%,0.00% 50.00%,4.95% 28.31%,18.83% 10.91%,38.87% 1.25%,61.13% 1.25%,81.17% 10.91%,95.05% 28.31%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount14").innerText = Tetradecagon
})

document.getElementById("upgradeBuy15").addEventListener("click", function () {
    let multi = Math.pow(1.5, Pentadecagon)
    let price = Math.round(2500000 * multi)
    if (points >= (price)) {
        points = points - price
        Pentadecagon++
    }
    let multi2 = Math.pow(1.5, Pentadecagon)
    let price2 = Math.round(2500000 * multi2)
    document.getElementById("upgradeBuy15Text").innerText = price2;
    if (Pentadecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,95.68% 70.34%,83.46% 87.16%,65.45% 97.55%,44.77% 99.73%,25.00% 93.30%,9.55% 79.39%,1.09% 60.40%,1.09% 39.60%,9.55% 20.61%,25.00% 6.70%,44.77% 0.27%,65.45% 2.45%,83.46% 12.84%,95.68% 29.66%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount15").innerText = Pentadecagon
})

document.getElementById("upgradeBuy16").addEventListener("click", function () {
    let multi = Math.pow(1.5, Hexadecagon)
    let price = Math.round(5000000 * multi)
    if (points >= (price)) {
        points = points - price
        Hexadecagon++
    }
    let multi2 = Math.pow(1.5, Hexadecagon)
    let price2 = Math.round(5000000 * multi2)
    document.getElementById("upgradeBuy16Text").innerText = price2;
    if (Hexadecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,96.19% 69.13%,85.36% 85.36%,69.13% 96.19%,50.00% 100.00%,30.87% 96.19%,14.64% 85.36%,3.81% 69.13%,0.00% 50.00%,3.81% 30.87%,14.64% 14.64%,30.87% 3.81%,50.00% 0.00%,69.13% 3.81%,85.36% 14.64%,96.19% 30.87%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount16").innerText = Hexadecagon
})

document.getElementById("upgradeBuy17").addEventListener("click", function () {
    let multi = Math.pow(1.5, Heptadecagon)
    let price = Math.round(10000000 * multi)
    if (points >= (price)) {
        points = points - price
        Heptadecagon++
    }
    let multi2 = Math.pow(1.5, Heptadecagon)
    let price2 = Math.round(10000000 * multi2)
    document.getElementById("upgradeBuy17Text").innerText = price2;
    if (Heptadecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,96.62% 68.06%,86.95% 83.68%,72.29% 94.76%,54.61% 99.79%,36.32% 98.09%,19.87% 89.90%,7.49% 76.32%,0.85% 59.19%,0.85% 40.81%,7.49% 23.68%,19.87% 10.10%,36.32% 1.91%,54.61% 0.21%,72.29% 5.24%,86.95% 16.32%,96.62% 31.94%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount17").innerText = Heptadecagon
})

document.getElementById("upgradeBuy18").addEventListener("click", function () {
    let multi = Math.pow(1.5, Octadecagon)
    let price = Math.round(25000000 * multi)
    if (points >= (price)) {
        points = points - price
        Octadecagon++
    }
    let multi2 = Math.pow(1.5, Octadecagon)
    let price2 = Math.round(25000000 * multi2)
    document.getElementById("upgradeBuy18Text").innerText = price2;
    if (Octadecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,96.98% 67.10%,88.30% 82.14%,75.00% 93.30%,58.68% 99.24%,41.32% 99.24%,25.00% 93.30%,11.70% 82.14%,3.02% 67.10%,0.00% 50.00%,3.02% 32.90%,11.70% 17.86%,25.00% 6.70%,41.32% 0.76%,58.68% 0.76%,75.00% 6.70%,88.30% 17.86%,96.98% 32.90%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount18").innerText = Octadecagon
})

document.getElementById("upgradeBuy19").addEventListener("click", function () {
    let multi = Math.pow(1.5, Enneadecagon)
    let price = Math.round(50000000 * multi)
    if (points >= (price)) {
        points = points - price
        Enneadecagon++
    }
    let multi2 = Math.pow(1.5, Enneadecagon)
    let price2 = Math.round(50000000 * multi2)
    document.getElementById("upgradeBuy19Text").innerText = price2;
    if (Enneadecagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,97.29% 66.23%,89.46% 80.71%,77.35% 91.86%,62.27% 98.47%,45.87% 99.83%,29.92% 95.79%,16.14% 86.79%,6.03% 73.80%,0.68% 58.23%,0.68% 41.77%,6.03% 26.20%,16.14% 13.21%,29.92% 4.21%,45.87% 0.17%,62.27% 1.53%,77.35% 8.14%,89.46% 19.29%,97.29% 33.77%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount19").innerText = Enneadecagon
})

document.getElementById("upgradeBuy20").addEventListener("click", function () {
    let multi = Math.pow(1.5, Icosagon)
    let price = Math.round(100000000 * multi)
    if (points >= (price)) {
        points = points - price
        Icosagon++
    }
    let multi2 = Math.pow(1.5, Icosagon)
    let price2 = Math.round(100000000 * multi2)
    document.getElementById("upgradeBuy20Text").innerText = price2;
    if (Icosagon == 1) {
        document.getElementById("manualAdder").style = "clip-path: polygon(100.00% 50.00%,97.55% 65.45%,90.45% 79.39%,79.39% 90.45%,65.45% 97.55%,50.00% 100.00%,34.55% 97.55%,20.61% 90.45%,9.55% 79.39%,2.45% 65.45%,0.00% 50.00%,2.45% 34.55%,9.55% 20.61%,20.61% 9.55%,34.55% 2.45%,50.00% 0.00%,65.45% 2.45%,79.39% 9.55%,90.45% 20.61%,97.55% 34.55%)";
    }
    document.getElementById("manualAdder").style.width = "17.5vw"
    document.getElementById("manualAdder").style.height = "17.5vw"
    document.getElementById("upgradeCount20").innerText = Icosagon
})