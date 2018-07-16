//ASync JS
// const one=()=>{
//     setInterval(()=>{
//         console.log('callback');
//     },1000)
// };
//
// const two=()=>{
//     console.log('Start');
//     one();
//     console.log('End');
// };
// two();

////////////////////////////////////////
// Callback hell

// const one=()=>{
//     setTimeout(()=>{
//         console.log('One');
//         setTimeout(()=>{
//             console.log('two');
//             setTimeout(()=>{
//                 console.log('Three');
//                 },1500);
//             },1500);
//         },2000);
// };
// one();