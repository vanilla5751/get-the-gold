function text(){

    document.getElementById("dirt").innerHTML = "dirt:" + dirt
    document.getElementById("copper").innerHTML = "copper:" + copper
    document.getElementById("silver").innerHTML = "silver:" + silver
    document.getElementById("gold").innerHTML = "gold:" + gold
    document.getElementById("diamond").innerHTML = "diamond:" + diamond
    document.getElementById("ruby").innerHTML = "ruby:" + ruby
    document.getElementById("emerald").innerHTML = "emerald:" + emerald
    document.getElementById("onyx").innerHTML = "onyx:" + onyx

    document.getElementById("buy1").innerHTML = "cost:dirt " + upg1
    document.getElementById("buy2").innerHTML = "cost:copper " + upg2
    document.getElementById("buy3").innerHTML = "cost:silver " + upg3
    document.getElementById("buy4").innerHTML = "cost:gold " + upg4
    document.getElementById("buy5").innerHTML = "cost:diamond" + upg5
    document.getElementById("buy6").innerHTML = "cost:ruby " + upg6
    document.getElementById("buy7").innerHTML = "cost:emerald " + upg7
    document.getElementById("buy8").innerHTML = "cost:onyx " + upg8

    document.getElementById("m1").innerHTML = "cost:dirt " + dirtmc
    document.getElementById("m2").innerHTML = "cost:copper " + coppermc
    document.getElementById("m3").innerHTML = "cost:silver " + silvermc
    document.getElementById("m4").innerHTML = "cost:gold " + goldmc
    document.getElementById("m5").innerHTML = "cost:diamond" + diamondmc
    document.getElementById("m6").innerHTML = "cost:ruby " + rubymc
    document.getElementById("m7").innerHTML = "cost:emerald " + emeraldmc
    document.getElementById("m8").innerHTML = "cost:onyx " + onyxmc

}

function setGround() {//start of setGround
    ground = [[], [], [], [], [], [], [], [], [], []]
    val = [[1, 1, 1, 1, 1, 1, 2, 2, 2], [1, 1, 1, 1, 2, 2, 2, 3, 3], [1, 1, 2, 2, 2, 2, 2, 3, 3], [1, 1, 1, 2, 2, 2, 3, 3, 4], [1, 1, 2, 3, 3, 4, 4, 4, 5], [1, 2, 3, 3, 4, 4, 5, 5, 6], [2, 3, 3, 4, 4, 5, 5, 6, 7], [3, 3, 4, 4, 4, 5, 6, 7, 8]]
    
    for (i = 0; i < 10; i++) {
        for (u = 0; u < 10; u++) {
            ground[i][u] = val[Math.floor(Math.random() * (7 - 0 + 1) + 0)][Math.floor(Math.random() * (8 - 0 + 1) + 0)]
        }
    }

    for (i = 0; i < 1000; i += 100) {
        for (u = 0; u < 1000; u += 100) {
            ctx.beginPath()
            ctx.rect(i, u, 100, 100);
            ctx.fillStyle = "#664c28";
            ctx.fill();
            ctx.fillStyle = "#191c0b";
            ctx.stroke();
            ctx.closePath()
        }
    }
}// end of setGround