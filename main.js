//get element
var modal = document.getElementById('simpleModal'); 
// Get open modal button 

var modalBtn = document.getElementById('modalBtn');

//get close button 

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for oepn click
modalBtn.addEventListener('click', openModal); 

//listen for close click
closeBtn.addEventListener('click', closeModal); 


//listen for outside click
closeBtn.addEventListener('click', OutsideClick); 


//function to open modal 

function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}


//function to close  modal if outside click
function OutsideClick(){
	
	if(e.target === modal ){
	   modal.style.display = 'none';
	   }
	
}