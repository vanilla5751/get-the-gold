
function mastery(upg) {

    switch (upg) {
        case 1:
            if (dirt >= dirtmc) {
                dirt -= dirtmc
                document.getElementById("dirt").innerHTML = "dirt:" + dirt
                dirtm += 1
                localStorage.setItem("dirtm", dirtm)
                dirtmc *= 100
                localStorage.setItem("dirtmc", dirtmc)
                document.getElementById("m1").innerHTML = "cost:dirt " + dirtmc
                localStorage.setItem("dirt", dirt)
            }
            break;

        case 2:
            if (copper >= coppermc) {
                copper -= coppermc
                document.getElementById("copper").innerHTML = "copper:" + copper
                copperm += 1
                localStorage.setItem("copperm", copperm)
                coppermc *= 100
                localStorage.setItem("coppermc", coppermc)
                document.getElementById("m2").innerHTML = "cost:copper " + coppermc
                localStorage.setItem("copper", copper)
            }
            break;

        case 3:
            if (silver >= silvermc) {
                silver -= silvermc
                document.getElementById("silver").innerHTML = "silver:" + silver
                silverm += 1
                localStorage.setItem("silverm", silverm)
                silvermc *= 100
                localStorage.setItem("silvermc", silvermc)
                document.getElementById("m3").innerHTML = "cost:silver " + silvermc
                localStorage.setItem("silver", silver)
            }
            break;

        case 4:
            if (gold >= goldmc) {
                gold -= goldmc
                document.getElementById("gold").innerHTML = "gold:" + gold
                goldm += 1
                localStorage.setItem("goldm", goldm)
                goldmc *= 1000
                localStorage.setItem("goldmc", goldmc)
                document.getElementById("m4").innerHTML = "cost:gold " + goldmc
                localStorage.setItem("gold", gold)
            }
            break;

        case 5:
            if (diamond >= diamondmc) {
                diamond -= diamondmc
                document.getElementById("diamond").innerHTML = "diamond:" + diamond
                diamondm += 1
                localStorage.setItem("diamondm", diamondm)
                diamondmc *= 1000
                localStorage.setItem("diamondmc", diamondmc)
                document.getElementById("m5").innerHTML = "cost:diamond " + diamondmc
                localStorage.setItem("diamond", diamond)
            }
            break;

        case 6:
            if (ruby >= rubymc) {
                ruby -= rubymc
                document.getElementById("ruby").innerHTML = "ruby:" + ruby
                rubym += 1
                localStorage.setItem("rubym", rubym)
                rubymc *= 1000
                localStorage.setItem("rubymc", rubymc)
                document.getElementById("m6").innerHTML = "cost:ruby " + rubymc
                localStorage.setItem("ruby", ruby)
            }
            break;

        case 7:
            if (emerald >= emeraldmc) {
                emerald -= emeraldmc
                document.getElementById("emerald").innerHTML = "emerald:" + emerald
                emeraldm += 1
                localStorage.setItem("emeraldm", emeraldm)
                emeraldmc *= 1000
                localStorage.setItem("emeraldmc", emeraldmc)
                document.getElementById("m6").innerHTML = "cost:emerald " + emeraldmc
                localStorage.setItem("emerald", emerald)
            }
            break;

        case 8:
            if (onyx >= onyxmc) {
                onyx -= onyxmc
                document.getElementById("onyx").innerHTML = "onyx:" + onyx
                onyxm += 1
                localStorage.setItem("onyxm", onyxm)
                onyxmc *= 1000
                localStorage.setItem("onyxmc", onyxmc)
                document.getElementById("m8").innerHTML = "cost:onyx " + onyxmc
                localStorage.setItem("onyx", onyx)
                rebirthpp = Math.log10(onyx)
                document.getElementById("rb").innerHTML = "rebirth for: " + rebirthpp + " rebirth points"
                localStorage.setItem("rebirthpp", rebirthpp)
            }
            break;

    }

}