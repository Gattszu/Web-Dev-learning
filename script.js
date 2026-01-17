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

function ChangeInnerHTML(id, element, msg) {
    document.getElementById(id).innerHTML = element +msg+ element;
}