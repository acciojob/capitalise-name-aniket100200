//your JS code here. If required.
let ele=document.getElementById("fname");

function fun(){
	ele.value=ele.value.toUpperCase();
}

ele.addEventListener('mouseleave',fun);

