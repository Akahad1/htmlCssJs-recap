// string to number
const num='10'
console.log(typeof Number(num))

// kibaber number badate hoy
var number =12;
number+=10
console.log(number)

// dosomic yer pore koto nibo 
const apple =23.9876
var sum=apple.toFixed(3)
console.log(sum)

// index
const data =[23,56,98,789,89]
console.log(data[4])

// number chage kora
const data1 =[23,56,98,789,89]
data1[1]=12
console.log(data1)

// indexof
const data2 =[23,56,98,789,89]
console.log(data2.indexOf(98))

// while loop

var bat =0;
while(bat<2){
    console.log('bat den Please')
    bat++
}

// for loop
for(var bat=0; bat<5;bat++){
    console.log('bat den vai')
}

// const fruits ={apple:5, mango:9, jakfruit:7}
// odd man jokfoll

const studentsRoll =[12,5,14,2,2,76,1,1]
 let sums =0
for( i=0;i<studentsRoll.length;i++){
    const studentRoll=studentsRoll[i]
   if(studentRoll%2 ==0){
   console.log('this is even number ') 

   }
   else{
    // console.log(studentRoll)
    sums=sums+studentRoll;
    console.log(sums)
   }
}