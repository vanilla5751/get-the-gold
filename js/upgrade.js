function buy(upg) {

    switch (upg) {
        case 1:
            if (dirt >= upg1) {
                dirt -= upg1
                document.getElementById("dirt").innerHTML = "dirt:" + dirt
                oremulti += 1
                localStorage.setItem("oremulti", oremulti)
                upg1 *= 3
                upg1 = Math.round(upg1/Math.log10(reroll+1))
                localStorage.setItem("upg1", upg1)
                document.getElementById("buy1").innerHTML = "cost:dirt " + upg1
                localStorage.setItem("dirt", dirt)
            }
            break;

        case 2:
            if (copper >= upg2) {
                copper -= upg2
                document.getElementById("copper").innerHTML = "copper:" + copper
                coremulti += 1
                localStorage.setItem("coremulti", coremulti)
                upg2 *= 5
                upg2 = Math.round(upg2/Math.log10(reroll+1))
                localStorage.setItem("upg2", upg2)
                document.getElementById("buy2").innerHTML = "cost:copper " + upg2
                localStorage.setItem("copper", copper)
            }
            break;

        case 3:
            if (silver >= upg3) {
                silver -= upg3
                document.getElementById("silver").innerHTML = "silver:" + silver
                roremulti += 1
                localStorage.setItem("roremulti", roremulti)
                upg3 *= 5
                upg3 = Math.round(upg3/Math.log10(reroll+1))
                localStorage.setItem("upg3", upg3)
                document.getElementById("buy3").innerHTML = "cost:silver " + upg3
                localStorage.setItem("silver", silver)
            }
            break;

        case 4:
            if (gold >= upg4) {
                gold -= upg4
                document.getElementById("gold").innerHTML = "gold:" + gold
                orebase += 1
                localStorage.setItem("orebase", orebase)
                upg4 *= 5
                upg4 = Math.round(upg4/Math.log10(reroll+1))
                localStorage.setItem("upg4", upg4)
                document.getElementById("buy4").innerHTML = "cost:gold " + upg4
                localStorage.setItem("gold", gold)
            }
            break;

        case 5:
            if (diamond >= upg5) {
                diamond -= upg5
                document.getElementById("diamond").innerHTML = "diamond:" + diamond
                reroll += 1
                localStorage.setItem("reroll", reroll)
                upg5 *= 5
                upg5 = Math.round(upg5/Math.log10(reroll+1))
                localStorage.setItem("upg5", upg5)
                document.getElementById("buy5").innerHTML = "cost:diamond " + upg5
                localStorage.setItem("diamond", diamond)
            }
            break;

        case 6:
            if (ruby >= upg6) {
                ruby -= upg6
                document.getElementById("ruby").innerHTML = "ruby:" + ruby
                gmulti += 1
                localStorage.setItem("gmulti", gmulti)
                upg6 *= 5
                upg6 = Math.round(upg6/Math.log10(reroll+1))
                localStorage.setItem("upg6", upg6)
                document.getElementById("buy6").innerHTML = "cost:ruby " + upg6
                localStorage.setItem("ruby", ruby)
            }
            break;

        case 7:
            if (emerald >= upg7) {
                emerald -= upg7
                document.getElementById("emerald").innerHTML = "emerald:" + emerald
                orepow += 1
                pow = Math.log2(orepow)
                localStorage.setItem("orepow", orepow)
                upg7 *= 10
                upg7 = Math.round(upg7/Math.log10(reroll +1)) 
                localStorage.setItem("upg7", upg7)
                document.getElementById("buy7").innerHTML = "cost:emerald " + upg7
                localStorage.setItem("emerald", emerald)
            }
            break;

        case 8:
            if (onyx >= upg8) {
                onyx -= upg8
                document.getElementById("onyx").innerHTML = "onyx:" + onyx
                dmult += 1
                localStorage.setItem("dmult", dmult)
                upg8 *= 5
                upg8 = Math.round(upg8/Math.log10(reroll +1)) 
                localStorage.setItem("upg8", upg8)
                document.getElementById("buy8").innerHTML = "cost:onyx " + upg8
                localStorage.setItem("onyx", onyx)
            }
            break;

    }

}

function rbuy(upg){

    switch(upg){

        case 1:
            if(rebirthp>rbc1){
                rebirthp -= rbc1
                localStorage.setItem("rebirthp", rebirthp)
                rbc1 *= 2
                localStorage.setItem("rbc1", rbc1)
                oremulti2 += 1
                localStorage.setItem("oremulti2", oremulti2)
                document.getElementById("rp").innerHTML = "rebirth points: " + rebirthp
                document.getElementById("rbuy1").innerHTML = "cost:rebirth points  " + rbc1
            }
        break;

        case 2:
            if(rebirthp>rbc2){
                rebirthp -= rbc2
                localStorage.setItem("rebirthp", rebirthp)
                rbc2 *= 10
                localStorage.setItem("rbc2", rbc2)
                newores += 1
                localStorage.setItem("newores", newores)
                document.getElementById("rp").innerHTML = "rebirth points: " + rebirthp
                document.getElementById("rbuy2").innerHTML = "cost:rebirth points  " + rbc2
            }
        break;

        case 3:
            if(rebirthp>rbc3){
                rebirthp -= rbc3
                localStorage.setItem("rebirthp", rebirthp)
                rbc3 *= 10
                localStorage.setItem("rbc3", rbc3)
                unlocks += 1
                localStorage.setItem("unlocks", unlocks)
                document.getElementById("rp").innerHTML = "rebirth points: " + rebirthp
                document.getElementById("rbuy3").innerHTML = "cost:rebirth points  " + rbc3
            }
        break;

        case 4:
            if(rebirthp>rbc4){
                rebirthp -= rbc4
                localStorage.setItem("rebirthp", rebirthp)
                rbc4 *= 10
                localStorage.setItem("rbc4", rbc4)
                auto += 1
                localStorage.setItem("auto", auto)
                document.getElementById("rp").innerHTML = "rebirth points: " + rebirthp
                document.getElementById("rbuy4").innerHTML = "cost:rebirth points  " + rbc4
            }
        break;

        case 5:
            if(rebirthp>rbc5){
                rebirthp -= rbc5
                localStorage.setItem("rebirthp", rebirthp)
                rbc5 *= 10
                localStorage.setItem("rbc5", rbc5)
                adjacent += 1
                localStorage.setItem("adjacent", adjacent)
                document.getElementById("rp").innerHTML = "rebirth points: " + rebirthp
                document.getElementById("rbuy5").innerHTML = "cost:rebirth points  " + rbc5
            }
        break;

    }

}