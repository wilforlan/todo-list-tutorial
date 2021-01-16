// https://www.w3schools.com/js/js_arrays.asp
const todoListItems = document.getElementById("todo-list-items");
const itemList = [];
const EMPTY_MARKER_TEXT = "You do not have any todo item created!";
const emptyMarker = document.getElementById("empty_marker");

// initialize a function
const displayDate = function () {
    const dateToday = new Date();
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    const dateBox = document.getElementById("date_today");
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    dateBox.innerText = dateToday.toLocaleDateString();
};

const isTodoEmpty = () => {
    const hasTodo = itemList.length > 0;

    // tenary operators
    emptyMarker.innerText = hasTodo ? "" : EMPTY_MARKER_TEXT;
    
    // regular if/else
    // if(hasTodo) emptyMarker.innerText = "";
    // else emptyMarker.innerText = EMPTY_MARKER_TEXT
};

const insertItem = function (item) {
    // https://www.w3schools.com/jsref/met_document_createelement.asp
    var paragraph = document.createElement("P"); 
    paragraph.className = 'item';
    paragraph.innerText = ` - ${item}`;
    todoListItems.appendChild(paragraph);
}

// using forloops. Alternatives, array.find, array.filter
const isExisting = (value) => {
    // https://www.w3schools.com/js/js_loop_for.asp
    for (let index = 0; index < itemList.length; index++) {
        const item = itemList[index];
        if(item === value) return true;
    }
    return false;
};

// 2nd way to initialize a function
// arrow functions
const onTodoSubmit = () => {
    const todoInput = document.getElementById("todo-input");
    const todoItem = todoInput.value.trim();
    const exist = isExisting(todoItem);

    // check if the item already exists
    if ((todoItem.length < 1) || exist) return;
    
    insertItem(todoItem);
    itemList.push(todoItem);
    isTodoEmpty();
};

// Another way to initialize a function
function activateSubmitButton (params) {
    const submitButton = document.getElementById("submit-todo");
    // use the button onclick event
    submitButton.onclick = onTodoSubmit;
};

displayDate();
activateSubmitButton();
