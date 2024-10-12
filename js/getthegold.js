var canvas
var ctx
var ran
//ores 
var dirt = 0
var copper = 0
var silver = 0
var gold = 0
var diamond = 0
var ruby = 0
var emerald = 0
var onyx = 0
//rebirth ores
var quartz = 0
var titanium = 0
var amythest = 0
var sapphire = 0
var topaz = 0
var peridot = 0
var uranium = 0
var plutonium = 0
var thorium = 0
//prestige ores
var amazonite = 0
var opal = 0
var krypton = 0
var calcite = 0
//sacrafice ores
var technicium = 0
var kryptonite = 0
var sulfur = 0
var painite = 0
//other ores

//upgrades
var oremulti = 1
var coremulti = 1
var roremulti = 1
var orebase = 0
var reroll = 1
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
//reset layers
var rebirthp
var rebirthpp
//levels
var level = 1
var exp = 0
var expRequired = 250
//mastery
var dirtm = 1
var copperm = 1 
var silverm = 1
var goldm = 1
var diamondm = 1
var rubym = 1
var emeraldm = 1
var onyxm = 1
//mastery requirements
var dirtmr = 10000
var coppermr = 10000
var silvermr = 10000
var goldmr = 1000
var diamondmr = 1000
var rubymr = 100
var emeraldmr = 100
var onyxmr = 10
//mastery cost
var dirtmc = 100
var coppermc = 100 
var silvermc = 100
var goldmc = 100
var diamondmc = 100
var rubymc = 100
var emeraldmc = 100
var onyxmc = 100
//arrays and objects
var ores = []
var ground = []
var val = []
var data = {}

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
    100 - found empty
    110 - found dirt
    120 - found copper
    130 - found silver
    140 - found gold
    150 - found diamond
    160 - found ruby
    170 - found emerald
    180 - found onyx
    Feel free to add other options
*/

function start() {
    getdata()
    text()

    canvas = document.getElementById("can")
    ctx = canvas.getContext("2d")
    canvas.width = 1000
    canvas.height = 1000

    pow = Math.log2(orepow)

    setGround()
    canvas.addEventListener("mousedown", canvasClicked, false);

    
}// end of start