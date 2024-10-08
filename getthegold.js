var canvas
var ctx
//ores
var dirt = 0
var copper = 0
var silver = 0
var gold = 0
var diamond = 0
var ruby = 0
var emerald = 0
var onyx = 0
//upgrades
var oremulti = 1
var coremulti = 1
var roremulti = 1
var orebase = 0
var reroll = 0
var gmulti = 1
var orepow = 1
var dmult = 1
//upgrade costs
var upg1 = 100
var upg2 = 25
var upg3 = 25
var upg4 = 10
var upg5 = 5
var upg6 = 5
var upg7 = 10
var upg8 = 1
//arrays and objects
var ores = []
var data = {}


if (localStorage.getItem("dirt") == null) {
    localStorage.setItem("dirt", dirt)
} else {
    dirt = parseInt(localStorage.getItem("dirt"))
}

if (localStorage.getItem("copper") == null) {
    localStorage.setItem("copper", copper)
} else {
    copper = parseInt(localStorage.getItem("copper"))
}

if (localStorage.getItem("silver") == null) {
    localStorage.setItem("silver", silver)
} else {
    silver = parseInt(localStorage.getItem("silver"))
}

if (localStorage.getItem("gold") == null) {
    localStorage.setItem("gold", gold)
} else {
    gold = parseInt(localStorage.getItem("gold"))
}

if (localStorage.getItem("diamond") == null) {
    localStorage.setItem("diamond", diamond)
} else {
    diamond = parseInt(localStorage.getItem("diamond"))
}

if (localStorage.getItem("ruby") == null) {
    localStorage.setItem("ruby", ruby)
} else {
    ruby = parseInt(localStorage.getItem("ruby"))
}

if (localStorage.getItem("emerald") == null) {
    localStorage.setItem("emerald", emerald)
} else {
    emerald = parseInt(localStorage.getItem("emerald"))
}

if (localStorage.getItem("onyx") == null) {
    localStorage.setItem("onyx", onyx)
} else {
    onyx = parseInt(localStorage.getItem("onyx"))
}

if (localStorage.getItem("orebase") == null) {
    localStorage.setItem("orebase", orebase)
} else {
    orebase = parseInt(localStorage.getItem("orebase"))
}

if (localStorage.getItem("oremulti") == null) {
    localStorage.setItem("oremulti", oremulti)
} else {
    oremulti = parseInt(localStorage.getItem("oremulti"))
}

if (localStorage.getItem("orepow") == null) {
    localStorage.setItem("orepow", orepow)
} else {
    orepow = parseInt(localStorage.getItem("orepow"))
}

if (localStorage.getItem("dmult") == null) {
    localStorage.setItem("dmult", dmult)
} else {
    dmult = parseInt(localStorage.getItem("dmult"))
}

if (localStorage.getItem("gmulti") == null) {
    localStorage.setItem("gmulti", gmulti)
} else {
    gmulti = parseInt(localStorage.getItem("gmulti"))
}

if (localStorage.getItem("reroll") == null) {
    localStorage.setItem("reroll", reroll)
} else {
    reroll = parseInt(localStorage.getItem("reroll"))
}

if (localStorage.getItem("coremulti") == null) {
    localStorage.setItem("coremulti", coremulti)
} else {
    coremulti = parseInt(localStorage.getItem("coremulti"))
}

if (localStorage.getItem("roremulti") == null) {
    localStorage.setItem("roremulti", roremulti)
} else {
    roremulti = parseInt(localStorage.getItem("roremulti"))
}

if (localStorage.getItem("upg1") == null) {
    localStorage.setItem("upg1", upg1)
} else {
    upg1 = parseInt(localStorage.getItem("upg1"))
}

if (localStorage.getItem("upg2") == null) {
    localStorage.setItem("upg2", upg2)
} else {
    upg2 = parseInt(localStorage.getItem("upg2"))
}

if (localStorage.getItem("upg3") == null) {
    localStorage.setItem("upg3", upg3)
} else {
    upg3 = parseInt(localStorage.getItem("upg3"))
}

if (localStorage.getItem("upg4") == null) {
    localStorage.setItem("upg4", upg4)
} else {
    upg4 = parseInt(localStorage.getItem("upg4"))
}

if (localStorage.getItem("upg5") == null) {
    localStorage.setItem("upg5", upg5)
} else {
    upg5 = parseInt(localStorage.getItem("upg5"))
}

if (localStorage.getItem("upg6") == null) {
    localStorage.setItem("upg6", upg6)
} else {
    upg6 = parseInt(localStorage.getItem("upg6"))
}

if (localStorage.getItem("upg7") == null) {
    localStorage.setItem("upg7", upg7)
} else {
    upg7 = parseInt(localStorage.getItem("upg7"))
}

if (localStorage.getItem("upg8") == null) {
    localStorage.setItem("upg8", upg8)
} else {
    upg8 = parseInt(localStorage.getItem("upg8"))
}


//ground array
var ground = new Array()
/*Legend
    0 - empty
    1 - dirt
    2 - copper
    3 - silver 
    4 - gold
    5 - diamond
    6 - ruby
    7 - emerald
    8 - onyx
    10 - found empty
    11 - found dirt
    12 - found copper
    13 - found silver
    14 - found gold
    15 - found diamond
    16 - found ruby
    17 - found emerald
    18 - found onyx
    Feel free to add other options
*/

function start() {

    canvas = document.getElementById("can")
    ctx = canvas.getContext("2d")

    // change canvas size
    canvas.width = 1000
    canvas.height = 1000

    // turn ground array into a 2D array
    ground = [[], [], [], [], [], [], [], [], [], []]
    val = [[1, 1, 1, 1, 1, 1, 2, 2, 2], [1, 1, 1, 1, 2, 2, 2, 3, 3], [1, 1, 2, 2, 2, 2, 2, 3, 3], [1, 1, 1, 2, 2, 2, 3, 3, 4], [1, 1, 2, 3, 3, 4, 4, 4, 5], [1, 2, 3, 3, 4, 4, 5, 5, 6], [2, 3, 3, 4, 4, 5, 5, 6, 7], [3, 3, 4, 4, 4, 5, 6, 7, 8]]
    document.getElementById("dirt").innerHTML = "dirt:" + dirt
    document.getElementById("copper").innerHTML = "copper:" + copper
    document.getElementById("silver").innerHTML = "silver:" + silver
    document.getElementById("gold").innerHTML = "gold:" + gold
    document.getElementById("diamond").innerHTML = "diamond:" + diamond
    document.getElementById("ruby").innerHTML = "ruby:" + ruby
    document.getElementById("emerald").innerHTML = "emerald:" + emerald
    document.getElementById("onyx").innerHTML = "onyx:" + onyx

    document.getElementById("buy1").innerHTML = "cost:" + upg1
    document.getElementById("buy2").innerHTML = "cost:" + upg2
    document.getElementById("buy3").innerHTML = "cost:" + upg3
    document.getElementById("buy4").innerHTML = "cost:" + upg4
    document.getElementById("buy5").innerHTML = "cost:" + upg5
    document.getElementById("buy6").innerHTML = "cost:" + upg6
    document.getElementById("buy7").innerHTML = "cost:" + upg7
    document.getElementById("buy8").innerHTML = "cost:" + upg8

    for (i = 0; i < 10; i++) {
        for (u = 0; u < 10; u++) {
            ground[i][u] = val[Math.floor(Math.random() * (7 - 0 + 1) + 0)][Math.floor(Math.random() * (8 - 0 + 1) + 0)]
        }
    }

    setGround()
    canvas.addEventListener("mousedown", canvasClicked, false);

    


}// end of start



function canvasClicked() {
    /*
        changes the x & y positon for the box to be where you click
        INPUTS
            event - click event object
        OUTPUTS
            none
    */
    // assumes canvas is a global variable

    var clickX = event.x;
    var clickY = event.y;
    // adjust x and y to be relative to the canvas	
    clickX -= canvas.offsetLeft;
    clickY -= canvas.offsetTop;
    // adjust for any scrolling
    clickX += window.pageXOffset
    clickY += window.pageYOffset;
    // your code here

    // determine what row you clicked in
    row = Math.floor(clickX / 100)
    //determne what column you clicked in
    column = Math.floor(clickY / 100)
    //did you click on an empty cell and if so, what was in it (don't forget to update arrays)
    switch (ground[row][column]) {
        case 1:
            console.log("you found dirt")
            ground[row][column] = 11
            found("#4f351f", row, column)
            dirt += (Math.pow(1+orebase,orepow)) * oremulti * coremulti * dmult
            document.getElementById("dirt").innerHTML = "dirt:" + dirt
            localStorage.setItem("dirt", dirt)
            break;
        case 2:
            console.log("you found copper")
            ground[row][column] = 12
            found("#b77438", row, column)
            copper += ((1 + orebase) ^ orepow) * oremulti * coremulti
            document.getElementById("copper").innerHTML = "copper:" + copper
            localStorage.setItem("copper", copper)
            break;
        case 3:
            console.log("you found silver")
            ground[row][column] = 13
            found("#a59b91", row, column)
            silver += ((1 + orebase) ^ orepow) * oremulti * coremulti
            document.getElementById("silver").innerHTML = "silver:" + silver
            localStorage.setItem("silver", silver)
            break;
        case 4:
            console.log("you found gold")
            ground[row][column] = 14
            found("#937f0a", row, column)
            gold += ((1 + orebase) ^ orepow) * oremulti * coremulti * gmulti
            document.getElementById("gold").innerHTML = "gold:" + gold
            localStorage.setItem("gold", gold)
            break;
        case 5:
            console.log("you found diamond")
            ground[row][column] = 15
            found("#136d5d", row, column)
            diamond += ((1 + orebase) ^ orepow) * oremulti * roremulti
            document.getElementById("diamond").innerHTML = "diamond:" + diamond
            localStorage.setItem("diamond", diamond)
            break;
        case 6:
            console.log("you found ruby")
            ground[row][column] = 15
            found("#E24517", row, column)
            ruby += ((1 + orebase) ^ orepow) * oremulti * roremulti
            document.getElementById("ruby").innerHTML = "ruby:" + ruby
            localStorage.setItem("ruby", ruby)
            break;
        case 7:
            console.log("you found emerald")
            ground[row][column] = 15
            found("#22E217", row, column)
            emerald += ((1 + orebase) ^ orepow) * oremulti * roremulti
            document.getElementById("emerald").innerHTML = "emerald:" + emerald
            localStorage.setItem("emerald", emerald)
            break;
        case 8:
            console.log("you found onyx")
            ground[row][column] = 15
            found("#171817", row, column)
            onyx += ((1 + orebase) ^ orepow) * oremulti * roremulti
            document.getElementById("onyx").innerHTML = "onyx:" + onyx
            localStorage.setItem("onyx", onyx)
            break;
        default:
            let sum = 0
            for (i = 0; i < 10; i++) {
                for (u = 0; u < 10; u++) {
                    if (ground[i][u] > 8) {
                        sum += 1
                    }
                }
            }
            if (sum > 99) {
                start()
            }
            break;

    }

}// end of canvasClicked

function found(color, row, column) {
    ctx.beginPath()
    ctx.rect(row * 100, column * 100, 100, 100);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = "#191c0b";
    ctx.stroke();
    ctx.closePath()
}



function setGround() {//start of setGround
    /*
        INPUTS - none
        OUTPUTS - none
        Populates the ground array with random values
    */
    //double for loop to populate ground array
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

function buy(upg) {

    switch (upg) {
        case 1:
            if (dirt >= upg1) {
                dirt -= upg1
                document.getElementById("dirt").innerHTML = "dirt:" + dirt
                oremulti += 1
                localStorage.setItem("oremulti", oremulti)
                upg1 *= 3
                localStorage.setItem("upg1", upg1)
                document.getElementById("buy1").innerHTML = "cost:" + upg1
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
                localStorage.setItem("upg2", upg2)
                document.getElementById("buy2").innerHTML = "cost:" + upg2
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
                localStorage.setItem("upg3", upg3)
                document.getElementById("buy3").innerHTML = "cost:" + upg3
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
                localStorage.setItem("upg4", upg4)
                document.getElementById("buy4").innerHTML = "cost:" + upg4
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
                localStorage.setItem("upg5", upg5)
                document.getElementById("buy5").innerHTML = "cost:" + upg5
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
                localStorage.setItem("upg6", upg6)
                document.getElementById("buy6").innerHTML = "cost:" + upg6
                localStorage.setItem("ruby", ruby)
            }
            break;

        case 7:
            if (emerald >= upg7) {
                emerald -= upg7
                document.getElementById("emerald").innerHTML = "emerald:" + emerald
                orepow += 1
                localStorage.setItem("orepow", orepow)
                upg7 *= 10
                localStorage.setItem("upg7", upg7)
                document.getElementById("buy7").innerHTML = "cost:" + upg7
                localStorage.setItem("emerald", emerald)
            }
            break;

        case 8:
            if (onyx >= upg8) {
                onyx -= upg8
                document.getElementById("onyx").innerHTML = "onyx:" + onyx
                dmult += 1
                localStorage.setItem("dmult", dmult)
                upg8 *= 2
                localStorage.setItem("upg8", upg8)
                document.getElementById("buy8").innerHTML = "cost:" + upg8
                localStorage.setItem("onyx", onyx)
            }
            break;

    }

}

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
    localStorage.setItem("reroll", 0)
    localStorage.setItem("gmulti", 1)
    localStorage.setItem("orepow", 1)
    localStorage.setItem("dmult", 1)
}