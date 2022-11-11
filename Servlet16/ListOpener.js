
var state ;

function openList(count) {
    var Button = document.getElementById(count + "Button");
    var DownList = document.getElementById(count);

    if(Button.value == "+"){
        //DownList.style.display = 'block';
        show(DownList);
        Button.value = "-";
    }
    else{
    	//DownList.style.display = 'none';
    	hide(count);
    	Button.value ="+";
    	
    }
    
 } 
 
 
 function deleteAll(size){
 
 var xhr = new XMLHttpRequest();
 
 var data = "state=delete";
   

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
		hideSubLists(size);
        }
    }

    xhr.open("POST", "/Servlet16/List", true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

	
 
 }


function hide(count){
	var elem = document.getElementById(count).style.display = 'none';
	
}

function show(element){
	element.style.display = 'block';
}

function changeVisibility(size){
	
	if(state)
		hideAll(size);
		
	else if(!state)
		showAll(size);

}

function showAll(size){
    
    for(var i = 1; i < size; i++){
	        document.getElementById(i + "Button").value = "-";
		show(document.getElementById(i));
    }
    state = true;
}

function hideAll(size){
	for(var i = 1; i < size; i++){
	        document.getElementById(i + "Button").value = "+";
		hide(i);
    }
    	state = false;
}

function hideSubLists(size){
	for(var i = 1; i < size; i++){
		var Button = document.getElementById(i + "Button");
		Button.style.display = 'none';
    		hide(i);
    	}
}


function Start(size){
	state = false;
	for(var i = 1; i < size; i++)
    			hide(i);
}

