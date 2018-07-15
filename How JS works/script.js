// // // const year=[1990,1997,2015,2014];
// // //
// // // //ES5
// // // // year.map(function(element){
// // // // 	console.log(element);
// // // // });
// // //
// // // //ES6
// // //
// // // // year.map((element)=>{
// // // // 	console.log(element);
// // // // })
// // //
// // //
// // // let ages=year.map(el => 2018-el);
// // //
// // // // console.log(ages);
// // //
// // //
// // // ages=year.map( (element,index) =>
// // // 	`element ${index} age's is ${2018-element}`
// // // 	);
// // //
// // // // console.log(ages);
// // //
// // // ages=year.map((el,index) => {
// // // 	console.log(el);
// // // 	console.log(index);
// // // 	return el*index;
// // // });
// // //
// // // console.log(ages);
// //
// // var box5={
// //     color:'green',
// //     postiion: 1,
// //     clickme:function (){
// //         console.log(this.color);
// //         document.querySelector('.green').addEventListener('click',function(){
// //            alert("Color of the box is "+box5.color);
// //         });
// //     }
// // };
// //
// // box5.clickme();
// //
// // const box6={
// //     color:'green',
// //     postiion: 1,
// //     clickme:function (){
// //         console.log(this.color);
// //         document.querySelector('.green').addEventListener('click',()=>{
// //            alert('This is box' +this.color);
// //         });
// //     }
// // };
// // box6.clickme();
//
// var person=function(name){
//     this.name=name;
// };
//
// person.prototype.seefriend=function(friends){
//     var arr=friends.map((el)=>{
//         return el+' nice '+this.name;
//     });
//     console.log(arr);
//
//     var arr=friends.map(function(el){
//         return  el+' nice '+this.name;
//     });
//     console.log(arr);
// }
// var friends=['Chang',"Annie",'Kat','Mat'];
// new person('Dev').seefriend(friends);
//
// function returnName(){
//     return ['Dev','Singh']
// }
//
// const [firstName,lastName]=returnName();
//
// console.log(firstName);
// console.log(lastName);

// var box=Array.from(document.querySelectorAll('.box'));
// for(const el of box){
//     console.log(el.textContent);
// }
// var ages=[8,12,34,5,3,223];
// var fullages=ages.map(function (el) {
//    return el>18;
// });
// console.log(fullages);
//
//
// const ages=[1,23,4,5,6];
// const yob=[1997,1992,1995,1990];
//
// const final=[...ages,...yob];

//
// function fullage(...arg) {
//   console.log(args);
// }
//
var question=new Map();

question.set('Name','dev');
question.set('Age','21');

for(let [key,value] of question){
    console.log(key);
    console.log(value);
}

