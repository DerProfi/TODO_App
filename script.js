var schalter = document.getElementById('lightSwitch');
var neue = document.getElementById('newTodoText');
var title = document.getElementById('headerBackground')


schalter.onclick = function() {
    if (schalter.style.backgroundImage = 'url(./images/icon-sun.svg)'){
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        schalter.style.backgroundImage = 'url(./images/icon-moon.svg)';
        title.style.background = 'url(./images/bg-desktop-light.jpg)'
    }
    else if (schalter.style.backgroundImage = 'url(./images/icon-moon.svg)'){
        document.body.style.backgroundColor = 'black';
        schalter.style.backgroundImage = 'url(./images/icon-sun.svg)';
    }
}


var text = document.getElementById("newTodoText");

text.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        var lastone = document.getElementById("holder")
        var newBox = document.createElement("Div");
        newBox.innerHTML = text.value;                   
        lastone.prepend(newBox);
        newBox.classList.add("allTodo");
        text.value = '';  
    }
});