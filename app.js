let inp=document.querySelector("input");
let btn1=document.querySelector(".add");
let ul=document.querySelector("ul");
let editbtn=document.querySelector(".edit");
let delbtn=document.querySelector(".delete");
let li=document.querySelector("li");


btn1.addEventListener("click",function(){
    console.log(inp.value);
    let itemlist=document.createElement("li");
    itemlist.innerText=inp.value;
    itemlist.classList.add("item");
    ul.appendChild(itemlist);
    inp.value="";

    let editbutton=document.createElement("button");
    editbutton.classList.add("edit");
    editbutton.innerText="Edit";
    itemlist.appendChild(editbutton);
    
    let delbutton=document.createElement("button");
    delbutton.classList.add("delete");
    delbutton.innerText="delete";
    itemlist.appendChild(delbutton);
});