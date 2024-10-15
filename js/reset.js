function reset() {
    // Set default values for upgrades
    localStorage.setItem("upg1", 100)
    localStorage.setItem("upg2", 25)
    localStorage.setItem("upg3", 25)
    localStorage.setItem("upg4", 10)
    localStorage.setItem("upg5", 5)
    localStorage.setItem("upg6", 5)
    localStorage.setItem("upg7", 10)
    localStorage.setItem("upg8", 1)

    // Set default values for ores
    localStorage.setItem("dirt", 0)
    localStorage.setItem("copper", 0)
    localStorage.setItem("silver", 0)
    localStorage.setItem("gold", 0)
    localStorage.setItem("diamond", 0)
    localStorage.setItem("emerald", 0)
    localStorage.setItem("ruby", 0)
    localStorage.setItem("onyx", 0)

    // Set default values for rebirth ores
    localStorage.setItem("quartz", 0)
    localStorage.setItem("titanium", 0)
    localStorage.setItem("amythest", 0)
    localStorage.setItem("sapphire", 0)
    localStorage.setItem("topaz", 0)
    localStorage.setItem("peridot", 0)
    localStorage.setItem("uranium", 0)
    localStorage.setItem("plutonium", 0)
    localStorage.setItem("thorium", 0)

    // Set default values for prestige ores
    localStorage.setItem("amazonite", 0)
    localStorage.setItem("opal", 0)
    localStorage.setItem("krypton", 0)
    localStorage.setItem("calcite", 0)

    // Set default values for sacrifice ores
    localStorage.setItem("technicium", 0)
    localStorage.setItem("kryptonite", 0)
    localStorage.setItem("sulfur", 0)
    localStorage.setItem("painite", 0)

    // Set default values for upgrade multipliers
    localStorage.setItem("oremulti", 1)
    localStorage.setItem("coremulti", 1)
    localStorage.setItem("roremulti", 1)
    localStorage.setItem("orebase", 0)
    localStorage.setItem("reroll", 1)
    localStorage.setItem("gmulti", 1)
    localStorage.setItem("orepow", 1)
    localStorage.setItem("dmult", 1)

    // Set default values for mastery multipliers
    localStorage.setItem("dirtm", 1)
    localStorage.setItem("copperm", 1)
    localStorage.setItem("silverm", 1)
    localStorage.setItem("goldm", 1)
    localStorage.setItem("diamondm", 1)
    localStorage.setItem("rubym", 1)
    localStorage.setItem("emeraldm", 1)
    localStorage.setItem("onyxm", 1)

    // Set default values for mastery costs
    localStorage.setItem("dirtmc", 10000)
    localStorage.setItem("coppermc", 10000)
    localStorage.setItem("silvermc", 10000)
    localStorage.setItem("goldmc", 1000)
    localStorage.setItem("diamondmc", 1000)
    localStorage.setItem("rubymc", 100)
    localStorage.setItem("emeraldmc", 100)
    localStorage.setItem("onyxmc", 10)

    // Set default values for reset layers
    localStorage.setItem("rebirthp", 0)
    localStorage.setItem("rebirthpp", 0)

    // Set default values for levels
    localStorage.setItem("level", 1)
    localStorage.setItem("exp", 0)
    localStorage.setItem("expRequired", 250)

    //set values for level upgrade costs and levels
    localStorage.setItem("lv1", 3)
    localStorage.setItem("lv2", 10)
    localStorage.setItem("lv3", 25)
    localStorage.setItem("lv4", 15)
    localStorage.setItem("expb", 0)
    localStorage.setItem("exppow", 1)
    localStorage.setItem("expmulti", 1)
    localStorage.setItem("expreq", 1)


    // Update the displayed ores after reset
    document.getElementById("dirt").innerHTML = "dirt: " + localStorage.getItem("dirt")
    document.getElementById("copper").innerHTML = "copper: " + localStorage.getItem("copper")
    document.getElementById("silver").innerHTML = "silver: " + localStorage.getItem("silver")
    document.getElementById("gold").innerHTML = "gold: " + localStorage.getItem("gold")
    document.getElementById("diamond").innerHTML = "diamond: " + localStorage.getItem("diamond")
    document.getElementById("ruby").innerHTML = "ruby: " + localStorage.getItem("ruby")
    document.getElementById("emerald").innerHTML = "emerald: " + localStorage.getItem("emerald")
    document.getElementById("onyx").innerHTML = "onyx: " + localStorage.getItem("onyx")

    document.getElementById("quartz").innerHTML = "quartz: " + localStorage.getItem("quartz")
    document.getElementById("titanium").innerHTML = "titanium: " + localStorage.getItem("titanium")
    document.getElementById("amythest").innerHTML = "amythest: " + localStorage.getItem("amythest")
    document.getElementById("sapphire").innerHTML = "sapphire: " + localStorage.getItem("sapphire")
    document.getElementById("topaz").innerHTML = "topaz: " + localStorage.getItem("topaz")
    document.getElementById("peridot").innerHTML = "peridot: " + localStorage.getItem("peridot")
    document.getElementById("uranium").innerHTML = "uranium: " + localStorage.getItem("uranium")
    document.getElementById("plutonium").innerHTML = "plutoniumthorium: " + localStorage.getItem("plutonium")
    document.getElementById("thorium").innerHTML = "thorium: " + localStorage.getItem("thorium")

    document.getElementById("amazonite").innerHTML = "amazonite: " + localStorage.getItem("amazonite")
    document.getElementById("opal").innerHTML = "opal: " + localStorage.getItem("opal")
    document.getElementById("krypton").innerHTML = "krypton: " + localStorage.getItem("krypton")
    document.getElementById("calcite").innerHTML = "calcite: " + localStorage.getItem("calcite")

    document.getElementById("technicium").innerHTML = "technicium: " + localStorage.getItem("technicium")
    document.getElementById("kryptonite").innerHTML = "kryptonite: " + localStorage.getItem("kryptonite")
    document.getElementById("sulfur").innerHTML = "sulfur: " + localStorage.getItem("sulfur")
    document.getElementById("painite").innerHTML = "painite: " + localStorage.getItem("painite")

    // Update upgrade buttons
    document.getElementById("buy1").innerHTML = "cost:dirt " + localStorage.getItem("upg1")
    document.getElementById("buy2").innerHTML = "cost:copper " + localStorage.getItem("upg2")
    document.getElementById("buy3").innerHTML = "cost:silver " + localStorage.getItem("upg3")
    document.getElementById("buy4").innerHTML = "cost:gold " + localStorage.getItem("upg4")
    document.getElementById("buy5").innerHTML = "cost:diamond " + localStorage.getItem("upg5")
    document.getElementById("buy6").innerHTML = "cost:ruby " + localStorage.getItem("upg6")
    document.getElementById("buy7").innerHTML = "cost:emerald " + localStorage.getItem("upg7")
    document.getElementById("buy8").innerHTML = "cost:onyx " + localStorage.getItem("upg8")

    // Update mastery cost buttons
    document.getElementById("m1").innerHTML = "cost:dirt " + localStorage.getItem("dirtmc")
    document.getElementById("m2").innerHTML = "cost:copper " + localStorage.getItem("coppermc")
    document.getElementById("m3").innerHTML = "cost:silver " + localStorage.getItem("silvermc")
    document.getElementById("m4").innerHTML = "cost:gold " + localStorage.getItem("goldmc")
    document.getElementById("m5").innerHTML = "cost:diamond " + localStorage.getItem("diamondmc")
    document.getElementById("m6").innerHTML = "cost:ruby " + localStorage.getItem("rubymc")
    document.getElementById("m7").innerHTML = "cost:emerald " + localStorage.getItem("emeraldmc")
    document.getElementById("m8").innerHTML = "cost:onyx " + localStorage.getItem("onyxmc")

    // Update rebirth points
    document.getElementById("rp").innerHTML = "rebirth points: " + localStorage.getItem("rebirthp");
    document.getElementById("rb").innerHTML = "cost:100 onyx";
    
    // Update level
    document.getElementById("lv").innerHTML = "Level: " + localStorage.getItem("level") + " (XP: " + localStorage.getItem("exp") + "/" + localStorage.getItem("expRequired") + ")";
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