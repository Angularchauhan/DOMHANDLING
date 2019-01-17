// window.onclick = function(){
//    //#endregion
//    var ulElement= document.querySelector("ul");
//    //
//    var liList = document.querySelectorAll(".list-group-item");
//    var searchStudent = document.querySelector(".searchStudent"); 
//    //console.log(liList);
//    console.log(searchStudent);
//    ulElement.addEventListener("click",function(event){
//       console.log("I am from UL");
//      if (event.target.className=="delete"){ 
//        //console.log("Removed from DOM..")
//        //event.target.parentElement.remove();  
//      }
//      },false) //caputuring false
   
//    liList.forEach(function(element,index,nodeList){
//         var deleteItem = element.querySelector(".delete");
//        // console.log(deleteItem);
//         deleteItem.addEventListener("click",function(event){
//            // element.remove();
//            console.log("Click from LI span" );
//           // deleteItem.parentElement.remove(); 
//         })  
//    },false)  
   
//    //for keyup
//    searchStudent.addEventListener("keyup",function(event){
//       var inputValuefromText = (event.target.value).toLowerCase();
//       console.log(inputValuefromText);
//       liList.forEach(function(data,index,arr){
//         var student = (data.querySelector(".student").innerText).toLowerCase();
//         if (student.indexOf(inputValuefromText) !== -1){
//           console.log(student);
//           data.style.display="block";
//         }else{
//           if (inputValuefromText !=="" || inputValuefromText!==null){
//             data.style.display="none"; 
//           }else{
//            data.style.display="block";
//           }
           
//         }
       
//       })
      
//    })
   
   
   
   
   
//    function addItem(){
//      event.preventDefault();  //remove submit 
//      console.log("onsubmit" + event);
//      //alert(event.target);
//      var inputValue = document.querySelector('.form-group input');
//       var li  = document.createElement("li");
//        var spanStudent  = document.createElement("span");
//        var spanDelete  = document.createElement("span");
       
//        li.className="list-group-item";
//        spanStudent.className="student";
//        spanDelete.className="delete";
       
//        li.append(spanStudent);
//        li.append(spanDelete);
       
//        ulElement.append(li);
       
//        spanStudent.innerText=inputValue.value;
//        spanDelete.innerText="Delete";
//        inputValue.value= "";
//    }
       

// }




