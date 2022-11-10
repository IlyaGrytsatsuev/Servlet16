
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

function changeVisibility(count){
	if(state)
		hideAll();
	else
		showAll();

}

function showAll(size){
	
    var elem = document.getElementById("List").style.display = 'block';
    state = true;
}
function hideAll(size){
	var elem = document.getElementById("List").style.display = 'none';
    	state = false;
}

function hideSubLists(size){

	for(var i = 1; i <=size; i++){
		var Button = document.getElementById(i + "Button");
		Button.style.display = 'none';
	}
	for(var i = 1; i <=size; i++)
    			hide(i);
}


function Start(size){
	state = true;
	for(var i = 1; i <=size; i++)
    			hide(i);
}

