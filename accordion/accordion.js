(function() {
    dataLoad();
})();
var accordRef = document.getElementById("ownAccordion");
var collapse = document.getElementById("collapse");
var expand = document.getElementById("expand");

function dataLoad() {
    var refer = new XMLHttpRequest();
    refer.onreadystatechange = function() {
        if (refer.readyState == 4 && refer.status == 200) {
            var data = refer.responseText;
            var parsed = JSON.parse(data);
            process(parsed);
        }
    }
    refer.open("GET", "content.json", true);
    refer.send();
}

function process(data) {
    createElement(data);
}

function createElement(input) {
    var length = input.wrapper.length;
    for (var i = 0; i < length; i++) {
        var rootDiv = document.createElement("div");
        var createDiv = document.createElement("div");
        var createP = document.createElement("p");
        var createHeadingText = document.createTextNode(input.wrapper[i].heading);
        var createContent = document.createTextNode(input.wrapper[i].content);
        appendElements(rootDiv, createDiv, createP, createHeadingText, createContent, i);
    }
}

function appendElements(rdiv, div, p, t1, t2, i) {
    var appendedDiv = rdiv.appendChild(div);
    appendedDiv.appendChild(t1);
    var appendedP = rdiv.appendChild(p);
    appendedP.appendChild(t2);
    var appendedRdiv = accordRef.appendChild(rdiv);
    if (i == 0) {
        appendedRdiv.className = "accordion open";
    } else {
        appendedRdiv.className = "accordion close";
    }
    appendedDiv.addEventListener("click", behaviour, false);
}

function behaviour() {
    var open = document.getElementsByClassName("accordion open");
    if (this.parentNode.className == "accordion close") {
        for (var i = 0; i < open.length; i++) {
            open[i].className = "accordion close";
        }
        this.parentNode.className = "accordion open";
    } else {
        this.parentNode.className = "accordion close";
    }
}
collapse.addEventListener("click", collapseall, false);
expand.addEventListener("click", expandall, false);


function collapseall() {
	var children = accordRef.querySelectorAll("div.accordion");
    for (var i = 0; i < children.length; i++) {
        children[i].className = " ";
        children[i].className = "accordion close";
    }
}

function expandall() {
	var children = accordRef.querySelectorAll("div.accordion");
    for (var i = 0; i < children.length; i++) {
        children[i].className = " ";
        children[i].className = "accordion open";
    }
}
