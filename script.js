var schalter = document.getElementById('lightSwitch');
var neue = document.getElementById('newTodoText');
var title = document.getElementById('headerBackground');
var todos = document.getElementsByClassName('newTodo');


schalter.onclick = function() {
    if (schalter.style.backgroundImage = 'url(./images/icon-sun.svg)'){
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        schalter.style.backgroundImage = 'url(./images/icon-moon.svg)';
        title.style.background = 'url(./images/bg-desktop-light.jpg)';
        todos.style.backgroundColor = 'hsl(0, 0%, 98%)';
    }
    else if (schalter.style.backgroundImage = 'url(./images/icon-moon.svg)'){
        document.body.style.backgroundColor = 'black';
        schalter.style.backgroundImage = 'url(./images/icon-sun.svg)';
    }
}

const text = document.getElementById("newTodoText");

text.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        const lastElement = document.getElementById("holder");
        const newBox = document.createElement("Div");
        const divCreateNewTodo = '<div>'+'<input type="checkbox" name="newTodo" id="newTodoCheck">'+ text.value +'</div>';
        newBox.innerHTML = divCreateNewTodo;                   
        lastElement.before(newBox);
        newBox.classList.add("allTodo");
        text.value = '';
    }
});

const checkbox = document.getElementById("newTodoCheck");
checkbox.addEventListener('click', function(e) {
    if (text.style.textDecoration="none"){
    text.style.textDecoration="line-through"
}
    else if (text.style.textDecoration="line-through"){
        text.style.textDecoration="none"
    }
})


