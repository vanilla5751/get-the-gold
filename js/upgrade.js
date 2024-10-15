function buy(upg) {
    const baseIncrease = 2
    const costMultipliers = [3, 5, 5, 5, 5, 5, 10, 5]

    switch (upg) {
        case 1:
            if (dirt >= upg1) {
                dirt -= upg1
                document.getElementById("dirt").innerHTML = "dirt:" + dirt
                oremulti += 1
                localStorage.setItem("oremulti", oremulti)
                upg1 = Math.round((upg1 * costMultipliers[0]) / Math.log10(reroll + 1))
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
                upg2 = Math.round((upg2 * costMultipliers[1]) / Math.log10(reroll + 1))
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
                upg3 = Math.round((upg3 * costMultipliers[2]) / Math.log10(reroll + 1))
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
                upg4 = Math.round((upg4 * costMultipliers[3]) / Math.log10(reroll + 1))
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
                upg5 = Math.round((upg5 * costMultipliers[4]) / Math.log10(reroll + 1))
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
                upg6 = Math.round((upg6 * costMultipliers[5]) / Math.log10(reroll + 1))
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
                upg7 = Math.round((upg7 * costMultipliers[6]) / Math.log10(reroll + 1))
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
                upg8 = Math.round((upg8 * costMultipliers[7]) / Math.log10(reroll + 1))
                localStorage.setItem("upg8", upg8)
                document.getElementById("buy8").innerHTML = "cost:onyx " + upg8
                localStorage.setItem("onyx", onyx)
            }
            break;
    }
}

function lv(val){
    switch (val) {
        case 1:
            if (level >= lv1) {
                level = 0
                document.getElementById("lv").innerHTML = "Level: 1 (XP: 0/250)"
                expb += 1
                localStorage.setItem("oremulti", oremulti)
                upg1 = Math.round((upg1 * costMultipliers[0]) / Math.log10(reroll + 1))
                localStorage.setItem("upg1", upg1)
                document.getElementById("buy1").innerHTML = "cost:dirt " + upg1
                localStorage.setItem("dirt", dirt)
            }
            break;

        case 2:
            if (level >= lv2) {
                level = 0
                document.getElementById("lv").innerHTML = "Level: 1 (XP: 0/250)"
                expmulti += 1
                localStorage.setItem("coremulti", coremulti)
                upg2 = Math.round((upg2 * costMultipliers[1]) / Math.log10(reroll + 1))
                localStorage.setItem("upg2", upg2)
                document.getElementById("buy2").innerHTML = "cost:copper " + upg2
                localStorage.setItem("copper", copper)
            }
            break;

        case 3:
            if (level >= lv3) {
                level = 0
                document.getElementById("lv").innerHTML = "Level: 1 (XP: 0/250)"
                exppow += 1
                localStorage.setItem("roremulti", roremulti)
                upg3 = Math.round((upg3 * costMultipliers[2]) / Math.log10(reroll + 1))
                localStorage.setItem("upg3", upg3)
                document.getElementById("buy3").innerHTML = "cost:silver " + upg3
                localStorage.setItem("silver", silver)
            }
            break;

        case 4:
            if (level >= lv4) {
                level = 0
                document.getElementById("lv").innerHTML = "Level: 1 (XP: 0/250)"
                expreq += 1
                localStorage.setItem("orebase", orebase)
                upg4 = Math.round((upg4 * costMultipliers[3]) / Math.log10(reroll + 1))
                localStorage.setItem("upg4", upg4)
                document.getElementById("buy4").innerHTML = "cost:gold " + upg4
                localStorage.setItem("gold", gold)
            }
            break;
        }



}