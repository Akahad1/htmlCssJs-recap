// const num=document.getElementById('item1').style.color='red'


// const div=document.getElementById('div')
// const section=document.createElement('div')
// section.innerHTML=`
// <h1>ALL Dancer Here<h1/>
// <div>Samir<div/>
// <div>Kamir<div/>
// <div>Sakib<div/>
// <div>nakiv<div/>
// `
// div.appendChild(section)


// const section2 =document.createElement('div')
// const h1 =document.createElement('h1')
// h1.innerText='this is pro'
// section2.appendChild(h1)
// div.appendChild(section2)

class Instractor{
    name;
    designation ='web coruse instractor';
    team ='web team';
    loction;
    constructor(name,loction){
        this.name=name;
        this.loction=loction
    }
    startsupportsessinon(time){
        console.log(`start ${time}`)

    }


}
const sahad =new Instractor('sahad',"feni");
console.log(sahad)
sahad.startsupportsessinon(11)