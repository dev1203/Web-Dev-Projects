var box=document.querySelectorAll(".container div");
var ans;
handleit();
var easy=document.querySelectorAll("button");
easy[1].addEventListener("click",function(){
	easy[0].classList.toggle("active");
	easy[1].classList.toggle("active");
	for(var i=0;i<3;i++){
		var a=document.querySelector(".container div");
		a.outerHTML="";
	}
	box=document.querySelectorAll(".container div");
	handleit();
});

easy[0].addEventListener("click",function(){
	easy[1].classList.toggle("active");
	easy[0].classList.toggle("active");
	for(var i=0;i<3;i++){
		var div = document.createElement("div");
		div.classList.add("box");
		document.querySelector(".container").appendChild(div);
	}
	box=document.querySelectorAll(".container div");
	handleit();
	
});
var refresh=document.querySelector("#new-color");
refresh.addEventListener("click",handleit);

function handleit(){
	ans=random_rgb();
	var header=document.querySelector(".heading h1");
	header.innerHTML=ans;
	setcolor();
	box[Math.floor(Math.random() * box.length)].style.background=ans;
	update();
}

function random_rgb(){
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
}

function setcolor(){
	for(var i=0;i<box.length;i++){
	box[i].style.background=random_rgb();
	}
}

function update(){
	var stat=document.querySelector("#stat");
	for(var i=0;i<box.length;i++){
		box[i].addEventListener("click",function(){
			if(this.style.background==ans){
				stat.innerHTML="You Win!";
				for(var i=0;i<box.length;i++){
					box[i].style.background=ans;
				}
				var heading=document.querySelector(".heading");
				heading.style.background=ans;
				var btn=document.querySelector(".active");
				btn.style.background=ans;
			}
			else{
				this.style.background="transparent";
				stat.innerHTML="TRY AGAIN!"
			}

		})
	}
}
