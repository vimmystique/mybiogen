const results = document.querySelector("#results");
const getResults = document.querySelector("#button_id");
const menubtns = document.querySelector("#navbar");
const menu = document.querySelectorAll(".panel");
const input = document.querySelector('#serial_id');
const err = document.querySelector('#error');
const ans = document.querySelector('#answer');

const mobMenu = document.querySelector('.mobMenu');
const mobMenuCnt = document.querySelector('.mobMenuCnt');
const close = document.querySelector('.close');

let errCount = 0

getResults.addEventListener("click",(e)=>{
	if(input.value == '' ){
		e.preventDefault();
		results.classList.add("hide");
		err.innerHTML = "<span class='error'>No Entry</span>";
		
	}else{
		err.innerHTML = "<span class='good'>Generating...</span>";
		setTimeout(()=>{
		if(ans.childElementCount == 0){
			errCount++;
		if(errCount == 3){
			pageSwitch(1);
			errCount = 0;
			err.innerHTML = "<span class='good'>All Clear try again.</span>";
			input.value = ""
		}else {
			
		err.innerHTML = "<span class='error'>Invalid Input: See Help.</span>";
		results.classList.add("hide")
		}
		
	}else{
		err.innerHTML = "<span class='good'>CODE OK</span>";
		results.classList.remove("hide");
	}	
		},1000)
	
	} 
	
	
});
mobMenuCnt.addEventListener('click',(e)=>{
	
	switch(e.target.innerText){
		case 'X':
		mobMenuCnt.classList.toggle("shifty")
	
		;
		break;
		case 'UNLOCK':
		pageSwitch(0)
		pageSwitch2(0)
		;
		break;
		case 'HELP':
		pageSwitch(1)
		pageSwitch2(1)
		;
		break;
		default:
		break;
	}
})
mobMenu.addEventListener('click',()=>{
	mobMenuCnt.classList.toggle("shifty")
})

menubtns.addEventListener("click",(e)=>{
	switch(e.target.innerText){
		case 'UNLOCK':
		pageSwitch(0);
		pageSwitch2(0);
		break;
		case 'HELP':
		pageSwitch(1);
		pageSwitch2(1)
		break;
		case 'ACCOUNT':
		pageSwitch(2)
		pageSwitch2(null)
		;
		break;
		default:
		break;
	}
})

const pageSwitch = (p)=>{
	
const btn = document.querySelectorAll('.btnMenu');
	for(i=0; i < 3; i++){
		menu[i].classList.add('hide');
		btn[i].classList.remove('active');
		//console.log(b)
	}
	menu[p].classList.remove("hide")
	btn[p].classList.add("active")
	
}
const pageSwitch2 = (p)=>{
	
const btn = document.querySelectorAll('.mobMenuBtn');
	for(i=0; i < 2; i++){
		btn[i].classList.remove('active');
		//console.log(b)
	}
	if(p !== null){
	btn[p].classList.add("active")	
	}
	
	
}