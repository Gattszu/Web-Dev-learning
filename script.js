function ChangeParagraphColor() {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.color = 'blue';
}

onload = function ChangeDemoContent() {
    document.getElementById("demo").innerHTML = "<h2>Nah Son</h2>";
}

function AlertMessage() {
    alert("Hello! This is an alert message.");
}

function Log() {
    console.log("Hello! This is a log message.");
}

function ChangeInnerHTML(id, element, msg) {
    var endTag = element.replace("<", "</");
    document.getElementById(id).innerHTML = element +msg+ endTag;
}