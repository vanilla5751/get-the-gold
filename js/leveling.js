

function addExperience(points) {
    exp += Math.pow(points + expb,exppow) * expmulti
    localStorage.setItem("exp", exp);
    while (exp >= expRequired) {
        exp -= expRequired
        levelUp()
    }
    updateLevelDisplay()
}

function levelUp() {
    level++;
    expRequired = Math.floor(expRequired * 1.5)
    console.log("Level up! You are now level " + level)
    localStorage.setItem("level", level);
    localStorage.setItem("exp", exp);
    localStorage.setItem("expRequired", expRequired);

}

function updateLevelDisplay() {
    document.getElementById("lv").innerHTML = "Level: " + level + " (XP: " + exp + "/" + expRequired + ")"
}
