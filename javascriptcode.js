function addStudent()
{
    var outerDiv  = document.createElement("div");
    var innerDiv  = document.createElement("div");
    var buttonBtn = document.createElement("button");

    var inputValuebox  = document.querySelector('.input-group input');
    var colElement= document.getElementById('divdum');
    //console.log(colElement);



    outerDiv.className = "border border-primary";
    innerDiv.className = "col-sm";
    buttonBtn.className = "btn btn-primary";

    

    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(buttonBtn);
    colElement.appendChild(outerDiv);
    //colElement.appendChild(buttonBtn);
    
    //colElement.append("hi");
    
   
    buttonBtn.innerText = "Delete";
    innerDiv.innerText = inputValuebox.value;
    inputValuebox.value = "";
}