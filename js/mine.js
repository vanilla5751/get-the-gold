function canvasClicked() {

    var clickX = event.x;
    var clickY = event.y;
    
    clickX -= canvas.offsetLeft;
    clickY -= canvas.offsetTop;
    
    clickX += window.pageXOffset
    clickY += window.pageYOffset;
   

    
    row = Math.floor(clickX / 100)
    column = Math.floor(clickY / 100)
    
    switch (ground[row][column]) {
        case 1:
            console.log("you found dirt")
            ground[row][column] = 110
            found("#4f351f", row, column)
            dirt += (Math.pow(1+orebase,pow)) * oremulti * coremulti * dmult * dirtm
            document.getElementById("dirt").innerHTML = "dirt:" + dirt
            localStorage.setItem("dirt", dirt)
            break;
        case 2:
            console.log("you found copper")
            ground[row][column] = 120
            found("#b77438", row, column)
            copper += (Math.pow(1+orebase,pow)) * oremulti * coremulti * copperm
            document.getElementById("copper").innerHTML = "copper:" + copper
            localStorage.setItem("copper", copper)
            break;
        case 3:
            console.log("you found silver")
            ground[row][column] = 130
            found("#a59b91", row, column)
            silver += (Math.pow(1+orebase,pow)) * oremulti * coremulti * silverm
            document.getElementById("silver").innerHTML = "silver:" + silver
            localStorage.setItem("silver", silver)
            break;
        case 4:
            console.log("you found gold")
            ground[row][column] = 140
            found("#937f0a", row, column)
            gold += (Math.pow(1+orebase,pow)) * oremulti * coremulti * gmulti * goldm
            document.getElementById("gold").innerHTML = "gold:" + gold
            localStorage.setItem("gold", gold)
            break;
        case 5:
            console.log("you found diamond")
            ground[row][column] = 150
            found("#136d5d", row, column)
            diamond += (Math.pow(1+orebase,pow)) * oremulti * roremulti * diamondm
            document.getElementById("diamond").innerHTML = "diamond:" + diamond
            localStorage.setItem("diamond", diamond)
            break;
        case 6:
            console.log("you found ruby")
            ground[row][column] = 160
            found("#E24517", row, column)
            ruby += (Math.pow(1+orebase,pow)) * oremulti * roremulti * rubym
            document.getElementById("ruby").innerHTML = "ruby:" + ruby
            localStorage.setItem("ruby", ruby)
            break;
        case 7:
            console.log("you found emerald")
            ground[row][column] = 170
            found("#22E217", row, column)
            emerald += (Math.pow(1+orebase,pow)) * oremulti * roremulti * emeraldm
            document.getElementById("emerald").innerHTML = "emerald:" + emerald
            localStorage.setItem("emerald", emerald)
            break;
        case 8:
            console.log("you found onyx")
            ground[row][column] = 180
            found("#171817", row, column)
            onyx += (Math.pow(1+orebase,pow)) * oremulti * roremulti * onyxm
            document.getElementById("onyx").innerHTML = "onyx:" + onyx
            localStorage.setItem("onyx", onyx)
            rebirthpp = Math.log10(onyx)
            document.getElementById("rb").innerHTML = "rebirth for: " + rebirthpp + " rebirth points"
            localStorage.setItem("rebirthpp", rebirthpp)
            break;
        default:
            let sum = 0
            for (i = 0; i < 10; i++) {
                for (u = 0; u < 10; u++) {
                    if (ground[i][u] > 99) {
                        sum += 1
                    }
                }
            }
            if (sum > 99) {
                start()
            }
            break;

    }

}

function found(color, row, column) {
    ctx.beginPath()
    ctx.rect(row * 100, column * 100, 100, 100);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = "#191c0b";
    ctx.stroke();
    ctx.closePath()
}