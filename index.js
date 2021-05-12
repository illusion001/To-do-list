let items = document.getElementById("items");
let form = document.getElementById("addForm");
let filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addNewItem);

//delete event
items.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


function addNewItem(evt){
    evt.preventDefault();
    let item = document.querySelector("#item");
    if(item.value !== ''){
        //new li element
        let newItem = document.createElement('li');

        //add class
        newItem.className = "list-group-item";

        //add text node with input value
        newItem.appendChild(document.createTextNode(item.value));

        //make delete button;
        let deleteBtn = document.createElement('button');
        deleteBtn.className = "btn btn-danger btn-sm float-right delete";
        deleteBtn.appendChild(document.createTextNode("X"));
        
        //add delete btn in newItem
        newItem.appendChild(deleteBtn);

        //append in items
        items.appendChild(newItem);

        //Reset value
        item.value = "";
    }
}


//deleteItem Function 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            items.removeChild(li);

        }
    }
}


//filterItems event

function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    
    //Get li elements
    var liItems = items.getElementsByTagName('li');

    //convert to an array
    Array.from(liItems).forEach(function(item){
        var ItemName = item.firstChild.textContent;
        if(ItemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
    
}