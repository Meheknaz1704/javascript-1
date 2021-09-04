var a=20;
var b="kadur";
var c=false;
var d=null
var s;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(s);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof s);

function print() {
    console.log('hey');
}
print()

function sub(c,d) {
    var sub=c-d;
    console.log(sub);
}

sub(1,4);
sub(5,7);

function add(c,d){
    var add=c-d;
    return;
}
console.log(add(1,4))

var res=sub(1,2);
// Function expression
var sub1=function(c,d){
    var sub1=function(c,d){
        var sub=c-d;
        return sub;
    }
    var res=sub(1,2);
    console.log(res )

}

function marks(g){
     
    switch(true){
        case g<35:
        console.log("Fail");
        break;

        case g>=35 && g<60:
        console.log("Second class"); 
        break;

        case g>=60 && g<85:
        console.log("First class"); 
        break;
        
        case g>85:
        console.log("Distinction");
        break;
        
        default:
        console.log("Invalid");    
    }
}
marks(90);


var student ={
    name:'Mehek',
    age:20,
    address:'Chikmagakur',
    mobile:8088005931,
 }
 console.log(student)
 console.log(student.name)
 console.log(student.age)
 console.log(student.address)
 console.log(student.mobile)
 
 var student ={
    name:'Mehek',
    age:20,
    mobile:8088005931,
    address:{
        city:'Chikmagalur',
        place:'Karnataka',
        pin:577548,

    }
 }
 console.log(student)
 
 console.log(student.address.pin)
 console.log(student.address.city)
 console.log(student.address.place)

 var student2=student;

 student2.graduated=true
 console.log(student2)
console.log(student)


  var video={
      name:'access101 JS Tutorials',
      play: function(){
          console.log('Video Played')
      },
      timer:[0,20,80]

  }
  
  console.log(video.name)
  console.log(video.play())
  console.log(video.timer)


  var c=5;
var d='5';

if(c===d){
    console.log('equal')
}else{
    console.log('not equal')
}

function multipleByFour(input){
    return input*8;
}
var res=multipleByFour(3)

console.log(res);

// ES6
// instead of var in ES6 we use let and const
//  CONST
const G=6.67408;
console.log(G)

// LET
function letTest(){
    let x=4;
    if(true)
{
    let x=5;
    console.log(x)
}
console.log(x)
}
letTest()

// Functions 
function add(a,b){
    return a+b;
}
add(3,4);

// function expression
var add1=function(a,b){
    return a+b;
}
add1(4,5);

// ES6 Arrow Functions
const add2=(a,b) => a+b;
const mul =(a,b) => a*b;

var res=mul(4,6);
console.log(res);


// ES6 Arrow Functions
const add4=(a,b) => a + b;
const mul3 =(a,b) => a * b;

var res=mul(4,6);
console.log(res);

// Default parameters values
function demo(a,b,c){

    if(b===undefined){
      b=0;
}
if(c===undefined){
c=0;
}
return a + b + c;
};
let res1= demo(30,50);

const demo2 =(x,y=10,z=20)=>{
    return x + y + z;
}

const result=demo2(40);
console.log(result);

// String concatination
var name =' Anam';
var greeting = 'Happy Birthday';

var message = greeting + name+ ' Have a great year ahead';
console.log(message);

// Templates Literates

const mes = `${name} ${greeting} Have a great year ahead`
console.log(mes);

// array
const arr =[3,5,6,1];
const arry2=[]
for(let i=0;i<=arr.length -1;i++){
    arry2.push(arr[i] * 2)
} 
console.log(arry2);



// Array Helper Method
// Map, find,filter,foreach and reduce

const muly2 = arr.map(function(e){
    console.log(e)
})

const muly4 = arr.map((item)=>{
    return item * 4
})

console.log(arr)
console.log(muly4)

// ES6 Arrow Functions
const add5=(a,b) => a + b;
const mul5 =(a,b) => a * b;

var res=mul(4,6);
console.log(res);

// Default parameters values
function demo(a,b,c){

    if(b===undefined){
      b=0;
}
if(c===undefined){
c=0;
}
return a + b + c;
};
let res3= demo(30,50);

const demo3 =(x,y=10,z=20)=>{
    return x + y + z;
}

const result1=demo3(40);
console.log(result1);

// String concatination
var name =' Anam';
var greeting = 'Happy Birthday';

var message = greeting + name+ ' Have a great year ahead';
console.log(message);

// Templates Literates

const mess = `${name} ${greeting} Have a great year ahead`
console.log(mess);

// array
const arr1 =[3,5,6,1];
const arry3=[]
for(let i=0;i<=arr1.length -1;i++){
    arry3.push(arr1[i] * 2)
} 
console.log(arry3);



// Array Helper Method
// Map, find,filter,foreach and reduce

const mul2 = arr.map(function(e){
    console.log(e)
})

const mul4 = arr.map((item)=>{
    return item * 4
})

console.log(arr)
console.log(mul4)