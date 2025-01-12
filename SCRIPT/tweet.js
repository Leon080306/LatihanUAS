function tweet() {
    var text = document.getElementById("text").value;
    var textbox = "<div class = 'textbox'>" + text + "</div>"
    if (text.length <= 140) {
        document.getElementById("container").innerHTML += textbox;
    }
    else {
        alert("text tidak boleh lebih dari 140 karakter")
    }
}
function checkLength() {
    var text = document.getElementById("text").value;
    if (text.length >= 140) {
        document.getElementById("inputerror").style.display = "inline"
    }
    else {
        document.getElementById("inputerror").style.display = "none"
    }
}
