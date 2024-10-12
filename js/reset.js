function reset(){
    localStorage.setItem("upg1", 100)
    localStorage.setItem("upg2", 25)
    localStorage.setItem("upg3", 25)
    localStorage.setItem("upg4", 10)
    localStorage.setItem("upg5", 5)
    localStorage.setItem("upg6", 5)
    localStorage.setItem("upg7", 10)
    localStorage.setItem("upg8", 1)

    localStorage.setItem("dirt", 0)
    localStorage.setItem("copper", 0)
    localStorage.setItem("silver", 0)
    localStorage.setItem("gold", 0)
    localStorage.setItem("diamond", 0)
    localStorage.setItem("emerald", 0)
    localStorage.setItem("ruby", 0)
    localStorage.setItem("onyx", 0)

    localStorage.setItem("oremulti", 1)
    localStorage.setItem("coremulti", 1)
    localStorage.setItem("roremulti", 1)
    localStorage.setItem("orebase", 0)
    localStorage.setItem("reroll", 1)
    localStorage.setItem("gmulti", 1)
    localStorage.setItem("orepow", 1)
    localStorage.setItem("dmult", 1)

    localStorage.setItem("dirtm", 1)
    localStorage.setItem("copperm", 1)
    localStorage.setItem("silverm", 1)
    localStorage.setItem("goldm", 1)
    localStorage.setItem("diamondm", 1)
    localStorage.setItem("rubym", 1)
    localStorage.setItem("emeraldm", 1)
    localStorage.setItem("onyxm", 1)

    localStorage.setItem("dirtmc", 10000)
    localStorage.setItem("coppermc", 10000)
    localStorage.setItem("silvermc", 10000)
    localStorage.setItem("goldmc", 1000)
    localStorage.setItem("diamondmc", 1000)
    localStorage.setItem("rubymc", 100)
    localStorage.setItem("emeraldmc", 100)
    localStorage.setItem("onyxmc", 10)

    localStorage.setItem("rebirthp", 0)
    localStorage.setItem("rebirthpp", 0)

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

    document.getElementById("rp").innerHTML = "rebirth points: " + 0
    document.getElementById("rb").innerHTML = "cost:100 onyx"
}

function softreset1(){

    localStorage.setItem("upg1", 100)
    localStorage.setItem("upg2", 25)
    localStorage.setItem("upg3", 25)
    localStorage.setItem("upg4", 10)
    localStorage.setItem("upg5", 5)
    localStorage.setItem("upg6", 5)
    localStorage.setItem("upg7", 10)
    localStorage.setItem("upg8", 1) 

    localStorage.setItem("dirt", 0)
    localStorage.setItem("copper", 0)
    localStorage.setItem("silver", 0)
    localStorage.setItem("gold", 0)
    localStorage.setItem("diamond", 0)
    localStorage.setItem("emerald", 0)
    localStorage.setItem("ruby", 0)
    localStorage.setItem("onyx", 0)

    localStorage.setItem("oremulti", 1)
    localStorage.setItem("coremulti", 1)
    localStorage.setItem("roremulti", 1)
    localStorage.setItem("orebase", 0)
    localStorage.setItem("reroll", 1)
    localStorage.setItem("gmulti", 1)
    localStorage.setItem("orepow", 1)
    localStorage.setItem("dmult", 1)

    localStorage.setItem("dirtm", 1)
    localStorage.setItem("copperm", 1)
    localStorage.setItem("silverm", 1)
    localStorage.setItem("goldm", 1)
    localStorage.setItem("diamondm", 1)
    localStorage.setItem("rubym", 1)
    localStorage.setItem("emeraldm", 1)
    localStorage.setItem("onyxm", 1)

    localStorage.setItem("dirtmc", 10000)
    localStorage.setItem("coppermc", 10000)
    localStorage.setItem("silvermc", 10000)
    localStorage.setItem("goldmc", 1000)
    localStorage.setItem("diamondmc", 1000)
    localStorage.setItem("rubymc", 100)
    localStorage.setItem("emeraldmc", 100)
    localStorage.setItem("onyxmc", 10)

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

}