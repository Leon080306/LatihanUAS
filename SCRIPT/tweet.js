function tweet() {
    var textarea = document.getElementById("text");
    var text = textarea.value;
    var textbox = "<div class = 'textbox'>" + text + "</div>"
    if (text.length <= 140) {
        document.getElementById("container").innerHTML += textbox;
    }
    else {
        alert("text tidak boleh lebih dari 140 karakter")
    }
}
function checkLength() {
    var textarea = document.getElementById("text");
    var text = textarea.value;
    if (text.length >= 140) {
        document.getElementById("inputerror").style.display = "inline"
    }
    else {
        document.getElementById("inputerror").style.display = "none"
    }
}