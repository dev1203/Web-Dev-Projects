var box=document.querySelectorAll(".row div div");

var refresh=document.querySelector(".container .play .col-sm-4 span");
refresh.addEventListener("click",setcolor);
var ans=random_rgb();

function random_rgb(){
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
}
setcolor();
function setcolor() {
	for(var i=0;i<box.length;i++){
	box[i].style.background=random_rgb();
	}
	ans=random_rgb();
}


box[Math.floor(Math.random() * 3)].style.background=ans;

var header=document.querySelector(".heading h1");
header.innerHTML=ans;

var stat=document.querySelector("#stat");

for(var i=0;i<box.length;i++){
	box[i].addEventListener("click",function(){
		if(this.style.background==ans){
			stat.innerHTML="You Win!"
			console.log(this.style.background);
			console.log(ans);
			for(var i=0;i<box.length;i++){
				box[i].style.background=ans;
			}
			var heading=document.querySelector(".heading");
			heading.style.background=ans;
		}
		else{
			this.style.background="transparent";
			stat.innerHTML="TRY AGAIN!"
		}

	})
}