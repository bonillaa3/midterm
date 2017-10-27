

function myFunction1(){
    var li = document.createElement("li");
    var node = document.createTextNode("You completed 50 pushups!");
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
       
    document.getElementById('b1').style.visibility = 'hidden';
    document.getElementById('i1').style.display = 'block';
    
}

function myFunction2(){
    var li = document.createElement("li");
    var node = document.createTextNode("You completed 20 pullups!");
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
    document.getElementById('b2').style.visibility = 'hidden';
    document.getElementById('i2').style.display = 'block';

    
}

function myFunction3(){
    var li = document.createElement("li");
    var node = document.createTextNode("You completed 50 situps!");
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
    document.getElementById('b3').style.visibility = 'hidden';
    document.getElementById('i3').style.display = 'block';


}    

function myFunction4(){
    var li = document.createElement("li");
    var node = document.createTextNode("You completed 40 squats!");
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
    document.getElementById('b4').style.visibility = 'hidden';
    document.getElementById('i4').style.display = 'block';

    
}


function deleteLast(){
    
    document.getElementById('b1').style.visibility = 'visible';
    document.getElementById('i1').style.display = 'none';
    
    document.getElementById('b2').style.visibility = 'visible';
    document.getElementById('i2').style.display = 'none';
   
    document.getElementById('b3').style.visibility = 'visible';
    document.getElementById('i3').style.display = 'none';
 
    document.getElementById('b4').style.visibility = 'visible';
    document.getElementById('i4').style.display = 'none';
    
    document.getElementById("list").remove();
    
}

