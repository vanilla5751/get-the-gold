function getdata() {
    const variables = {
        // Ores
        dirt: dirt,
        copper: copper,
        silver: silver,
        gold: gold,
        diamond: diamond,
        ruby: ruby,
        emerald: emerald,
        onyx: onyx,
        
        // Rebirth Ores
        quartz: quartz,
        titanium: titanium,
        amythest: amythest,
        sapphire: sapphire,
        topaz: topaz,
        peridot: peridot,
        uranium: uranium,
        plutonium: plutonium,
        thorium: thorium,

        // Prestige Ores
        amazonite: amazonite,
        opal: opal,
        krypton: krypton,
        calcite: calcite,

        // Sacrifice Ores
        technicium: technicium,
        kryptonite: kryptonite,
        sulfur: sulfur,
        painite: painite,

        // Upgrades
        oremulti: oremulti,
        coremulti: coremulti,
        roremulti: roremulti,
        orebase: orebase,
        reroll: reroll,
        gmulti: gmulti,
        orepow: orepow,
        dmult: dmult,

        // Upgrade Costs
        upg1: upg1,
        upg2: upg2,
        upg3: upg3,
        upg4: upg4,
        upg5: upg5,
        upg6: upg6,
        upg7: upg7,
        upg8: upg8,

        // Reset Layers
        rebirthp: rebirthp,
        rebirthpp: rebirthpp,

        // Levels
        level: level,
        exp: exp,
        expRequired: expRequired,
        lv1: lv1,
        lv2: lv2,
        lv3: lv3,
        lv4: lv4,
        expb: expb,
        expmulti: expmulti,
        exppow: exppow,
        expreq: expreq,

        // Mastery
        dirtm: dirtm,
        copperm: copperm,
        silverm: silverm,
        goldm: goldm,
        diamondm: diamondm,
        rubym: rubym,
        emeraldm: emeraldm,
        onyxm: onyxm,

        // Mastery Requirements
        dirtmr: dirtmr,
        coppermr: coppermr,
        silvermr: silvermr,
        goldmr: goldmr,
        diamondmr: diamondmr,
        rubymr: rubymr,
        emeraldmr: emeraldmr,
        onyxmr: onyxmr,

        // Mastery Costs
        dirtmc: dirtmc,
        coppermc: coppermc,
        silvermc: silvermc,
        goldmc: goldmc,
        diamondmc: diamondmc,
        rubymc: rubymc,
        emeraldmc: emeraldmc,
        onyxmc: onyxmc
    }

    // Loop through variables, checking and setting from localStorage
    for (let key in variables) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, variables[key])
        } else {
            window[key] = parseInt(localStorage.getItem(key))
        }
    }
}


function exportdata() {
    // Collect all the game data into an object
    const gameData = {
        ores: {
            dirt: dirt,
            copper: copper,
            silver: silver,
            gold: gold,
            diamond: diamond,
            ruby: ruby,
            emerald: emerald,
            onyx: onyx
        },
        rebirthOres: {
            quartz: quartz,
            titanium: titanium,
            amythest: amythest,
            sapphire: sapphire,
            topaz: topaz,
            peridot: peridot,
            uranium: uranium,
            plutonium: plutonium,
            thorium: thorium
        },
        prestigeOres: {
            amazonite: amazonite,
            opal: opal,
            krypton: krypton,
            calcite: calcite
        },
        sacraficeOres: {
            technicium: technicium,
            kryptonite: kryptonite,
            sulfur: sulfur,
            painite: painite
        },
        upgrades: {
            oremulti: oremulti,
            coremulti: coremulti,
            roremulti: roremulti,
            orebase: orebase,
            reroll: reroll,
            gmulti: gmulti,
            orepow: orepow,
            dmult: dmult
        },
        upgradeCosts: {
            upg1: upg1,
            upg2: upg2,
            upg3: upg3,
            upg4: upg4,
            upg5: upg5,
            upg6: upg6,
            upg7: upg7,
            upg8: upg8
        },
        resetLayers: {
            rebirthp: rebirthp,
            rebirthpp: rebirthpp
        },
        mastery: {
            dirtm: dirtm,
            copperm: copperm,
            silverm: silverm,
            goldm: goldm,
            diamondm: diamondm,
            rubym: rubym,
            emeraldm: emeraldm,
            onyxm: onyxm
        },
        masteryRequirements: {
            dirtmr: dirtmr,
            coppermr: coppermr,
            silvermr: silvermr,
            goldmr: goldmr,
            diamondmr: diamondmr,
            rubymr: rubymr,
            emeraldmr: emeraldmr,
            onyxmr: onyxmr
        },
        levels: {
            level: level,
            exp: exp,
            expRequired: expRequired,
            lv1: lv1,
            lv2: lv2,
            lv3: lv3,
            lv4: lv4,
            expb: expb,
            exppow: exppow,
            expmulti: expmulti,
            expreq: expreq
        },
        masteryCost: {
            dirtmc: dirtmc,
            coppermc: coppermc,
            silvermc: silvermc,
            goldmc: goldmc,
            diamondmc: diamondmc,
            rubymc: rubymc,
            emeraldmc: emeraldmc,
            onyxmc: onyxmc
        },
        oresArray: ores,
        groundArray: ground,
        valArray: val
    };


    const jsonStr = JSON.stringify(gameData, null, 2)


    const blob = new Blob([jsonStr], { type: "application/json" })


    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "game_data.json"
    link.click()
}

function importData(event) {
    const file = event.target.files[0]  // Get the selected file
    const reader = new FileReader()     // Create a FileReader to read the file

    reader.onload = function(e) {
        try {
            // Parse the JSON data from the file
            const importedData = JSON.parse(e.target.result)

            // Assign the imported data to the game's variables
            if (importedData.ores) {
                dirt = importedData.ores.dirt || 0
                copper = importedData.ores.copper || 0
                silver = importedData.ores.silver || 0
                gold = importedData.ores.gold || 0
                diamond = importedData.ores.diamond || 0
                ruby = importedData.ores.ruby || 0
                emerald = importedData.ores.emerald || 0
                onyx = importedData.ores.onyx || 0
                localStorage.setItem("dirt", dirt)
                localStorage.setItem("copper", copper)
                localStorage.setItem("silver", silver)
                localStorage.setItem("gold", gold)
                localStorage.setItem("diamond", diamond)
                localStorage.setItem("ruby", ruby)
                localStorage.setItem("emerald", emerald)
                localStorage.setItem("onyx", onyx)
                document.getElementById("dirt")= dirt
                document.getElementById("copper")= copper
                document.getElementById("silver")= silver
                document.getElementById("gold")= gold
                document.getElementById("diamond")= diamond
                document.getElementById("ruby")= ruby
                document.getElementById("emerald")= emerald
                document.getElementById("onyx")= onyx
            }

            if (importedData.rebirthOres) {
                quartz = importedData.rebirthOres.quartz || 0
                titanium = importedData.rebirthOres.titanium || 0
                amythest = importedData.rebirthOres.amythest || 0
                sapphire = importedData.rebirthOres.sapphire || 0
                topaz = importedData.rebirthOres.topaz || 0
                peridot = importedData.rebirthOres.peridot || 0
                uranium = importedData.rebirthOres.uranium || 0
                plutonium = importedData.rebirthOres.plutonium || 0
                thorium = importedData.rebirthOres.thorium || 0
                localStorage.setItem("quartz", quartz)
                localStorage.setItem("titanium", titanium)
                localStorage.setItem("amythest", amythest)
                localStorage.setItem("sapphire", sapphire)
                localStorage.setItem("topaz", topaz)
                localStorage.setItem("peridot", peridot)
                localStorage.setItem("uranium", uranium)
                localStorage.setItem("plutonium", plutonium)
                localStorage.setItem("thorium", thorium)
                document.getElementById("quartz")= quartz
                document.getElementById("titanium")= titanium
                document.getElementById("amythest")= amythest
                document.getElementById("sapphire")= sapphire
                document.getElementById("topaz")= topaz
                document.getElementById("peridot")= peridot
                document.getElementById("uranium")= uranium
                document.getElementById("plutonium")= plutonium
                document.getElementById("thorium")= thorium
            }

            if (importedData.prestigeOres) {
                amazonite = importedData.prestigeOres.amazonite || 0
                opal = importedData.prestigeOres.opal || 0
                krypton = importedData.prestigeOres.krypton || 0
                calcite = importedData.prestigeOres.calcite || 0
                localStorage.setItem("amazonite", amazonite)
                localStorage.setItem("opal", opal)
                localStorage.setItem("krypton", krypton)
                localStorage.setItem("calcite", calcite)
                document.getElementById("amazonite")= amazonite
                document.getElementById("opal")= opal
                document.getElementById("krypton")= krypton
                document.getElementById("calcite")= calcite
            }

            if (importedData.sacraficeOres) {
                technicium = importedData.sacraficeOres.technicium || 0
                kryptonite = importedData.sacraficeOres.kryptonite || 0
                sulfur = importedData.sacraficeOres.sulfur || 0
                painite = importedData.sacraficeOres.painite || 0
                localStorage.setItem("technicium", technicium)
                localStorage.setItem("kryptonite", kryptonite)
                localStorage.setItem("sulfur", sulfur)
                localStorage.setItem("painite", painite)
                document.getElementById("technicium")= technicium
                document.getElementById("kryptonite")= kryptonite
                document.getElementById("sulfur")= sulfur
                document.getElementById("painite")= painite
            }

            if (importedData.upgrades) {
                oremulti = importedData.upgrades.oremulti || 1
                coremulti = importedData.upgrades.coremulti || 1
                roremulti = importedData.upgrades.roremulti || 1
                orebase = importedData.upgrades.orebase || 0
                reroll = importedData.upgrades.reroll || 1
                gmulti = importedData.upgrades.gmulti || 1
                orepow = importedData.upgrades.orepow || 1
                dmult = importedData.upgrades.dmult || 1
                localStorage.setItem("oremulti", oremulti)
                localStorage.setItem("coremulti", coremulti)
                localStorage.setItem("roremulti", roremulti)
                localStorage.setItem("orebase", orebase)
                localStorage.setItem("reroll", reroll)
                localStorage.setItem("gmulti", gmulti)
                localStorage.setItem("orepow", orepow)
                localStorage.setItem("dmult", dmult)
            }

            if (importedData.upgradeCosts) {
                upg1 = importedData.upgradeCosts.upg1 || 100
                upg2 = importedData.upgradeCosts.upg2 || 25
                upg3 = importedData.upgradeCosts.upg3 || 25
                upg4 = importedData.upgradeCosts.upg4 || 10
                upg5 = importedData.upgradeCosts.upg5 || 5
                upg6 = importedData.upgradeCosts.upg6 || 5
                upg7 = importedData.upgradeCosts.upg7 || 10
                upg8 = importedData.upgradeCosts.upg8 || 1
                localStorage.setItem("upg1", upg1)
                localStorage.setItem("upg2", upg2)
                localStorage.setItem("upg3", upg3)
                localStorage.setItem("upg4", upg4)
                localStorage.setItem("upg5", upg5)
                localStorage.setItem("upg6", upg6)
                localStorage.setItem("upg7", upg7)
                localStorage.setItem("upg8", upg8)
                document.getElementById("buy1")= "cost: " + upg1 + "dirt"
                document.getElementById("buy2")= "cost: " + upg2 + "copper"
                document.getElementById("buy3")= "cost: " + upg3 + "silver"
                document.getElementById("buy4")= "cost: " + upg4 + "gold"
                document.getElementById("buy5")= "cost: " + upg5 + "diamond"
                document.getElementById("buy6")= "cost: " + upg6 + "ruby"
                document.getElementById("buy7")= "cost: " + upg7 + "emerald"
                document.getElementById("buy8")= "cost: " + upg8 + "onyx"
            }

            if (importedData.resetLayers) {
                rebirthp = importedData.resetLayers.rebirthp || 0
                rebirthpp = importedData.resetLayers.rebirthpp || 0
                localStorage.setItem("rebirthp", rebirthp)
                localStorage.setItem("rebirthpp", rebirthpp)
            }
            
            if (importedData.mastery) {
                dirtm = importedData.mastery.dirtm || 1
                copperm = importedData.mastery.copperm || 1
                silverm = importedData.mastery.silverm || 1
                goldm = importedData.mastery.goldm || 1
                diamondm = importedData.mastery.diamondm || 1
                rubym = importedData.mastery.rubym || 1
                emeraldm = importedData.mastery.emeraldm || 1
                onyxm = importedData.mastery.onyxm || 1
                localStorage.setItem("dirtm", dirtm)
                localStorage.setItem("copperm", copeprm)
                localStorage.setItem("silverm", silverm)
                localStorage.setItem("goldm", goldm)
                localStorage.setItem("diamondm", diamondm)
                localStorage.setItem("rubym", rubym)
                localStorage.setItem("emeraldm", emeraldm)
                localStorage.setItem("onyxm", onyxm)
            }

            if (importedData.masteryRequirements) {
                dirtmr = importedData.masteryRequirements.dirtmr || 10000
                coppermr = importedData.masteryRequirements.coppermr || 10000
                silvermr = importedData.masteryRequirements.silvermr || 10000
                goldmr = importedData.masteryRequirements.goldmr || 1000
                diamondmr = importedData.masteryRequirements.diamondmr || 1000
                rubymr = importedData.masteryRequirements.rubymr || 100
                emeraldmr = importedData.masteryRequirements.emeraldmr || 100
                onyxmr = importedData.masteryRequirements.onyxmr || 10
                localStorage.setItem("dirtmr", dirtmr)
                localStorage.setItem("coppermr", copeprmr)
                localStorage.setItem("silvermr", silvermr)
                localStorage.setItem("goldmr", goldmr)
                localStorage.setItem("diamondmr", diamondmr)
                localStorage.setItem("rubymr", rubymr)
                localStorage.setItem("emeraldmr", emeraldmr)
                localStorage.setItem("onyxmr", onyxmr)
                document.getElementById("m1")= "cost: " + dirtmr + " dirt"
                document.getElementById("m2")= "cost: " + coppermr + " copper"
                document.getElementById("m3")= "cost: " + silvermr + " silver"
                document.getElementById("m4")= "cost: " + goldmr + " gold"
                document.getElementById("m5")= "cost: " + diamondmr + " diamond"
                document.getElementById("m6")= "cost: " + rubymr + " ruby"
                document.getElementById("m7")= "cost: " + emeraldmr + " emerald"
                document.getElementById("m8")= "cost: " + onyxmr + " onyx"
            }

            if (importedData.levels) {
                level = importedData.levels.level || 1
                exp = importedData.levels.exp || 0
                expRequired = importedData.levels.expRequired || 250

                lv1 = importedData.levels.lv1 || 3
                lv2 = importedData.levels.lv2 || 10
                lv3 = importedData.levels.lv3 || 25
                lv4 = importedData.levels.lv4 || 15

                expb = importedData.levels.expb || 0
                expmulti = importedData.levels.expmulti || 1
                exppow = importedData.levels.exppow || 1
                expreq = importedData.levels.expreq || 1
            }

            if (importedData.masteryCost) {
                dirtmc = importedData.masteryCost.dirtmc || 100
                coppermc = importedData.masteryCost.coppermc || 100
                silvermc = importedData.masteryCost.silvermc || 100
                goldmc = importedData.masteryCost.goldmc || 100
                diamondmc = importedData.masteryCost.diamondmc || 100
                rubymc = importedData.masteryCost.rubymc || 100
                emeraldmc = importedData.masteryCost.emeraldmc || 100
                onyxmc = importedData.masteryCost.onyxmc || 100
                localStorage.setItem("dirtmc", dirtmc)
                localStorage.setItem("coppermc", copeprmc)
                localStorage.setItem("silvermc", silvermc)
                localStorage.setItem("goldmc", goldmc)
                localStorage.setItem("diamondmc", diamondmc)
                localStorage.setItem("rubymc", rubymc)
                localStorage.setItem("emeraldmc", emeraldmc)
                localStorage.setItem("onyxmc", onyxmc)
            }

            if (importedData.oresArray) {
                ores = importedData.oresArray || []
            }

            if (importedData.groundArray) {
                ground = importedData.groundArray || []
            }

            if (importedData.valArray) {
                val = importedData.valArray || []
            }

            alert("Game data successfully imported! refresh the page")

        } catch (error) {
            console.error("Error importing data: ", error)
            alert("Failed to import data. Please make sure the file is in the correct format.");
        }
    }

    // Read the file as text
    reader.readAsText(file);
}
