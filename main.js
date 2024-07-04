let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

const saveTodo = (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    li.innerText = input.value;
    li.className="list-group-item roundes-0";

    let delBtn= document.createElement("button");
    delBtn.className="btn btn-danger rounded-0 btn-sn float-end";
    delBtn.innerText="Delete";
    li.appendChild(delBtn);
    ul.appendChild(li);
    form.reset(); 
};
form.addEventListener("submit", saveTodo);

const deleteTodo = (e) =>{
    if(e.target.className.includes("btn-danger")){
    ul.removeChild(e.target.parentElement);
    }
};
ul.addEventListener("click",deleteTodo);

// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");

// const saveTodo = (e) => {
//   e.preventDefault();
//   let li = document.createElement("li");
//   li.innerText = input.value;
//   li.className = "list-group-item rounded-0";

//   let delBtn = document.createElement("button");
//   delBtn.className = "btn btn-danger rounded-0 btn-sm float-end";
//   delBtn.innerText = "Delete";
//   li.appendChild(delBtn);
//   ul.appendChild(li);
//   form.reset();
// };

// form.addEventListener("submit", saveTodo);

// const deleteTodo = (e) => {
//   if (e.target.className.includes("btn-danger")) {
//     ul.removeChild(e.target.parentElement);
//   }
// };

// ul.addEventListener("click", deleteTodo);