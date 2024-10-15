function text() {

    document.getElementById("dirt").innerHTML = "dirt: " + dirt
    document.getElementById("copper").innerHTML = "copper: " + copper
    document.getElementById("silver").innerHTML = "silver: " + silver
    document.getElementById("gold").innerHTML = "gold: " + gold
    document.getElementById("diamond").innerHTML = "diamond: " + diamond
    document.getElementById("ruby").innerHTML = "ruby: " + ruby
    document.getElementById("emerald").innerHTML = "emerald: " + emerald
    document.getElementById("onyx").innerHTML = "onyx: " + onyx

    document.getElementById("buy1").innerHTML = "cost:dirt " + upg1
    document.getElementById("buy2").innerHTML = "cost:copper " + upg2
    document.getElementById("buy3").innerHTML = "cost:silver " + upg3
    document.getElementById("buy4").innerHTML = "cost:gold " + upg4
    document.getElementById("buy5").innerHTML = "cost:diamond " + upg5
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

    document.getElementById("lv").innerHTML = "Level: " + level + " (XP: " + exp + "/" + expRequired + ")"

}

function setGround() {//start of setGround


    ground = [[], [], [], [], [], [], [], [], [], []]

    for (i = 0; i < 10; i++) {
        for (u = 0; u < 10; u++) {


            let rand = Math.random() * 100; // Generate a random number between 0 and 100

            if (rand < 40) { // 40% chance for Dirt
                ground[i][u] = 1
            } else if (rand < 70) { // 30% chance for Copper (40% + 30%)
                ground[i][u] = 2
            } else if (rand < 85) { // 15% chance for Silver (70% + 15%)
                ground[i][u] = 3
            } else if (rand < 93) { // 8% chance for Gold (85% + 8%)
                ground[i][u] = 4
            } else if (rand < 97) { // 4% chance for Diamond (93% + 4%)
                ground[i][u] = 5
            } else if (rand < 98.5) { // 1.5% chance for Ruby (97% + 1.5%)
                ground[i][u] = 6
            } else if (rand < 99.5) { // 1% chance for Emerald (98.5% + 1%)
                ground[i][u] = 7
            } else { // Remaining 0.5% chance for Onyx
                ground[i][u] = 8
            }



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
    }// end of setGround
}

function swap(val) {
    switch (val) {
        case 1:
            document.getElementById("shop").style.display = 'block'
            document.getElementById("inventory").style.display = 'none'
            document.getElementById("rebirth").style.display = 'none'
            document.getElementById("mastery").style.display = 'none'
            document.getElementById("settings").style.display = 'none'
            document.getElementById("level").style.display = 'none'
            break;

        case 2:
            document.getElementById("shop").style.display = 'none'
            document.getElementById("inventory").style.display = 'block'
            document.getElementById("rebirth").style.display = 'none'
            document.getElementById("mastery").style.display = 'none'
            document.getElementById("settings").style.display = 'none'
            document.getElementById("level").style.display = 'none'
            break;

        case 3:
            document.getElementById("shop").style.display = 'none'
            document.getElementById("inventory").style.display = 'none'
            document.getElementById("rebirth").style.display = 'block'
            document.getElementById("mastery").style.display = 'none'
            document.getElementById("settings").style.display = 'none'
            document.getElementById("level").style.display = 'none'
            break;

        case 4:
            document.getElementById("shop").style.display = 'none'
            document.getElementById("inventory").style.display = 'none'
            document.getElementById("rebirth").style.display = 'none'
            document.getElementById("mastery").style.display = 'block'
            document.getElementById("settings").style.display = 'none'
            document.getElementById("level").style.display = 'none'
            break;

        case 5:
            document.getElementById("shop").style.display = 'none'
            document.getElementById("inventory").style.display = 'none'
            document.getElementById("rebirth").style.display = 'none'
            document.getElementById("mastery").style.display = 'none'
            document.getElementById("settings").style.display = 'block'
            document.getElementById("level").style.display = 'none'
            break;

        case 6:
            document.getElementById("shop").style.display = 'none'
            document.getElementById("inventory").style.display = 'none'
            document.getElementById("rebirth").style.display = 'none'
            document.getElementById("mastery").style.display = 'none'
            document.getElementById("settings").style.display = 'none'
            document.getElementById("level").style.display = 'block'
            break;


    }


}