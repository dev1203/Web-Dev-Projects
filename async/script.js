function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve([10,20,30,40]);
		},1500);
	});
}
function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve([111,222,333,444])
		},1500);
	});
}

one().
then((result)=>{
	console.log(...result);
	return two();
})
.then((el)=>{
	console.log(...el);
})
.catch((error)=>{
	console.log(error);
})