var data=document.getElementById("input");
var button=document.getElementById("button");
var list=document.getElementById("todolist");
var arr=[];

button.addEventListener("click", addInfo);

function addInfo(){
    arr.push(data.value)
    console.log(arr)
    data.value=""
    showData()
};

function showData(){
    list.innerHTML=""

    arr.forEach(function(item,index){
        list.innerHTML +=` <li>${item}<a onclick="edit(${index})"> Edit</a> <a onclick="deleteItem(${index})">X | </a></li>`
    })
};

function deleteItem(i){
    arr.splice(i,1)
    showData()
};

function edit(j){
    var new_value=prompt("Enter the New Value")
    arr.splice(j,1,new_value)
    showData()
};