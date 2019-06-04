var red = document.getElementsByClassName("tshred");
var white = document.getElementsByClassName("tsh");
var yellow = document.getElementsByClassName("tshyel");
document.getElementById("white").addEventListener("click",function (w) {
    white[0].style.display="inline";
    red[0].style.display="none";
    yellow[0].style.display="none";
});
document.getElementById("red").addEventListener("click",function (e) {
    white[0].style.display="none";
    red[0].style.display="inline";
    yellow[0].style.display="none";
});
document.getElementById("yellow").addEventListener("click",function (y) {
    white[0].style.display="none";
    red[0].style.display="none";
    yellow[0].style.display="inline";
});