let count = false;

function goodBoy() {

    document.getElementById("heading").textContent = "Thank you";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById('main').style.justifyContent = "center";
    document.getElementById('main').style.alignItems = "center";

}

function notGoodBoy() {
    if (count === false) {
        count = true;
        document.getElementById("main").style.justifyContent = "end";
        document.getElementById('main').style.alignItems = "end";
    } else {
        document.getElementById('main').style.justifyContent = "center";
        document.getElementById('main').style.alignItems = "center";
        count = false;
    }
}