function rebirth(){
    if (onyx>100){
        rebirthp = Math.log10(onyx)
        document.getElementById("rp").innerHTML = "rebirth points: " + rebirthp
        document.getElementById("rb").innerHTML = "cost:100 onyx"
        localStorage.setItem("rebirthpp", rebirthp)
        softreset1()
    }
}