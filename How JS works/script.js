
var object={
    name:"dev",
    yob:"1997",
    calculate_age:function(){
        console.log(2018-this.yob);
    }
};


var next={
    name:'next',
    yob:'2013'
}

next.calculate_age=object.calculate_age;
next.calculate_age();