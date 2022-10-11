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


function hide(count){
	var elem = document.getElementById(count).style.display = 'none';
	
}

function show(element){
	element.style.display = 'block';
}

function hideAll(size){
	for(var i = 1; i <=size; i++)
    			hide(i);
}
