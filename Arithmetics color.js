const yel = document.querySelector(".yellow")
const rad = document.querySelector(".red")
const blu = document.querySelector(".blue")
const gre = document.querySelector(".green")
const yellow0 = document.querySelector('.yellow0')
const red0 = document.querySelector('.red0')
const blue0 = document.querySelector('.blue0')
const green0 = document.querySelector('.green0')
const a = document.querySelector(".test")
const b = document.querySelector(".test2")
const c = document.querySelector(".test3")
const d = document.querySelector(".test4")
const hps = document.querySelector('.h1c')
const imgs = document.querySelector('.imgs')
const product = document.querySelector('.product')
const results1 = document.querySelector('.results1')
const results2 = document.querySelector('.results2')
const results3 = document.querySelector('.results3')
const results4 = document.querySelector('.results4')
const results5 = document.querySelector('.results5')
const results6 = document.querySelector('.results6')
const resulted = document.querySelector('.resulted')
const resultid = document.querySelectorAll(".results1, .results2, .results3, .results4, .results5, .results6");
var color =[0,0,0,0];
var image = 0;
var count =[0,0,0,0];
function yellow(){count[0]++;
color[0]++
switch(count[0]){
case 1 : 
    a.style.background = 'red';
    a.style.border = 'red';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    a.style.transition = '2s';
    a.style.borderRadius = '20%';
    yel.innerHTML = 'Red';
    yel.style.color = 'red';
    yel.style.transition = '2s'
    yellow0.style.color = 'red';
    yellow0.style.transition = '2s';
    break;
case 2: 
    a.style.background = 'blue';
    a.style.border = 'blue';
    a.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    a.style.borderRadius = '40%';
    yel.innerHTML = 'Blue';
    yel.style.color = 'blue';
    yellow0.style.color = 'blue';
    break;
case 3: 
    a.style.background = 'green';
    a.style.border = 'green';
    a.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    a.style.borderRadius = '80%';
    yel.innerHTML = 'Green';
    yel.style.color = 'green';
    yellow0.style.color = 'green';
    break;  
case 4:  
    a.style.background = 'yellow';
    a.style.border = 'yellow';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    a.style.borderRadius = '10%';
    yel.innerHTML = 'Yellow';
    yel.style.color = 'yellow';
    yellow0.style.color = 'yellow';
    count[0]= count[0]-4
    break;
    }yellow0.innerHTML = color[0];}
function red(){color[1]++;count[1]++
switch(count[1]){
case 1 :  
    b.style.background = 'blue';
    b.style.border = 'blue';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    b.style.transition = '2s';
    b.style.borderRadius = '40%';
    rad.innerHTML = 'Blue';
    rad.style.color = 'blue';
    rad.style.transition = '2s';
    red0.style.color = 'blue';
    red0.style.transition = '2s';
    break;
case 2 :
    b.style.background = 'green';
    b.style.border = 'green';
    b.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    b.style.borderRadius = '80%';
    rad.innerHTML = 'Green';
    rad.style.color = 'green';
    red0.style.color = 'green'; 
    break;
case 3 :
    b.style.background = 'yellow';
    b.style.border = 'yellow';
    b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    b.style.borderRadius = '10%';
    rad.innerHTML = 'Yellow';
    rad.style.color = 'yellow';
    red0.style.color = 'yellow';
    break;
case 4 :
    b.style.background = 'red';
    b.style.border = 'red';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    b.style.borderRadius = '20%';
    rad.innerHTML = 'Red';
    rad.style.color = 'red';
    red0.style.color = 'red';
    count[1]=count[1]-4
    break;}
red0.innerHTML = color[1];}
function blue(){color[2]++;count[2]++
switch (count[2]){
case 1: 
    c.style.background = 'green';
    c.style.border = 'green';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    c.style.transition = '2s';
    c.style.borderRadius = '80%';
    blu.innerHTML = 'Green';
    blu.style.color = 'green';
    blu.style.transition = '2s';
    blue0.style.color = 'green';
    blue0.style.transition = '2s';
    break;
case 2:
    c.style.background = 'yellow';
    c.style.border = 'yellow';
    c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    c.style.borderRadius = '10%';
    blu.innerHTML = 'Yellow';
    blu.style.color = 'yellow';
    blue0.style.color = 'yellow';
    break;
case 3:
    c.style.background = 'red';
    c.style.border = 'red';
    c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    c.style.borderRadius = '20%';
    blu.innerHTML = 'Red';
    blu.style.color = 'red';
    blue0.style.color = 'red';
    break;
case 4:
    c.style.background = 'blue';
    c.style.border = 'blue';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    c.style.borderRadius = '40%';
    blu.innerHTML = 'Blue';
    blu.style.color = 'blue';
    blue0.style.color = 'blue';
    count[2]=count[2]-4
    break;}
blue0.innerHTML = color[2];}
function green(){color[3]++;count[3]++
switch(count[3]){
case 1: 
    d.style.background = 'yellow';
    d.style.border = 'yellow';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    d.style.transition = '2s';
    d.style.borderRadius = '10%';
    gre.innerHTML = 'Yellow';
    gre.style.color = 'yellow';
    gre.style.transition = '2s';
    green0.style.color = 'yellow';
    green0.style.transition = '2s';
    break;
case 2:
    d.style.background = 'red';
    d.style.border = 'red';
    d.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    d.style.borderRadius = '20%';
    gre.innerHTML = 'Red';
    gre.style.color = 'red';
    green0.style.color = 'red';
    break;
case 3:
    d.style.background = 'blue';
    d.style.border = 'blue';
    d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    d.style.borderRadius = '40%';
    gre.innerHTML = 'Blue';
    gre.style.color = 'blue';
    green0.style.color = 'blue';
    break;
case 4:
    d.style.background = 'green';
    d.style.border = 'green';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    d.style.borderRadius = '80%';
    gre.innerHTML = 'Green';
    gre.style.color = 'green';
    green0.style.color = 'green';
    count[3] = count[3]- 4;
    break;}
green0.innerHTML = color[3];}
a.addEventListener("click",yellow)
b.addEventListener("click",red)
c.addEventListener("click",blue)
d.addEventListener("click",green)
function rest(){
product.innerHTML= Number(color[0]+color[1]+color[2]+color[3])}
function rest2(){
product.innerHTML= Number(-color[0]-color[1]-color[2]-color[3])}
function rest3(){
product.innerHTML= Number(color[0]*color[1]*color[2]*color[3])}
function rest4(){
product.innerHTML= Number(color[0]/color[1]/color[2]/color[3])}
function rest5(){
product.innerHTML = Number(color[0]%color[1]%color[2]%color[3])}
function rest6(){
product.innerHTML = Number(color[0]**color[1]**color[2]**color[3])}
results1.addEventListener("click",rest);
results2.addEventListener("click",rest2);
results3.addEventListener("click",rest3);
results4.addEventListener("click",rest4);
results5.addEventListener("click",rest5);
results6.addEventListener("click",rest6);
imgs.addEventListener("click",img)
function img() {if(image == 0){
document.body.style.background = 'white';
hps.style.color = 'black';
hps.style.transition = '2s';
imgs.setAttribute('src','https://i.pinimg.com/originals/c9/c1/cf/c9c1cf41920598394f613f1fc38a08ff.jpg')
image++
for (let i = 0; i < resultid.length; i++) {
    resulted.style.color = "black";
    resulted.style.transition ='2s';
    resultid[i].style.backgroundColor = 'white';
    resultid[i].style.color = 'black';
    resultid[i].style.borderColor = 'black';
    resultid[i].style.transition = '2s';
}
switch(count[0]){
case 0:
    yel.style.color = 'orange';
    yellow0.style.color = 'orange';
    a.style.background = 'orange';
    a.style.border = 'orange';
    break;
case 1:
    yel.style.color = 'brown';
    yellow0.style.color = 'brown';
    a.style.background = 'brown';
    a.style.border = 'brown';
    break;
case 2:
    yel.style.color = 'purple';
    yellow0.style.color = 'purple';
    a.style.background = 'purple';
    a.style.border = 'purple';
    break;
case 3:
    yel.style.color = 'salmon';
    yellow0.style.color = 'salmon';
    a.style.background = 'salmon';
    a.style.border = 'salmon';
    break;
case 4:
    yel.style.color = 'orange';
    yellow0.style.color = 'orange';
    a.style.background = 'orange';
    a.style.border = 'orange';
    break;
}
switch(count[1]){
    case 0:
        rad.style.color = 'brown';
        red0.style.color = 'brown';
        b.style.background = 'brown';
        b.style.border = 'brown';
        break;
    case 1:
        rad.style.color = 'purple';
        red0.style.color = 'purple';
        b.style.background = 'purple';
        b.style.border = 'purple';
        break;
    case 2:
        rad.style.color = 'salmon';
        red0.style.color = 'salmon';
        b.style.background = 'salmon';
        b.style.border = 'salmon';
        break;
    case 3:
        rad.style.color = 'orange';
        red0.style.color = 'orange';
        b.style.background = 'orange';
        b.style.border = 'orange';
        break;
    case 4:
        rad.style.color = 'brown';
        red0.style.color = 'brown';
        b.style.background = 'brown';
        b.style.border = 'brown';
        break;
}
switch(count[2]){
    case 0:
        blu.style.color = 'purple';
        blue0.style.color = 'purple';
        c.style.background = 'purple';
        c.style.border = 'purple';
        break;
    case 1:
        blu.style.color = 'salmon';
        blue0.style.color = 'salmon';
        c.style.background = 'salmon';
        c.style.border = 'salmon';
        break;
    case 2:
        blu.style.color = 'orange';
        blue0.style.color = 'orange';
        c.style.background = 'orange';
        c.style.border = 'orange';
        break;
    case 3:
        blu.style.color = 'brown';
        blue0.style.color = 'brown';
        c.style.background = 'brown';
        c.style.border = 'brown';
        break;
    case 4:
        blu.style.color = 'purple';
        blue0.style.color = 'purple';
        c.style.background = 'purple';
        c.style.border = 'purple';
        break;
}
switch(count[3]){
    case 0:
        gre.style.color = 'salmon';
        green0.style.color = 'salmon';
        d.style.background = 'salmon';
        d.style.border = 'salmon';
        break;
    case 1:
        gre.style.color = 'orange';
        green0.style.color = 'orange';
        d.style.background = 'orange';
        d.style.border = 'orange';
        break;
    case 2:
        gre.style.color = 'brown';
        green0.style.color = 'brown';
        d.style.background = 'brown';
        d.style.border = 'brown';
        break;
    case 3:
        gre.style.color = 'purple';
        green0.style.color = 'purple';
        d.style.background = 'purple';
        d.style.border = 'purple';
        break;
    case 4:
        gre.style.color = 'salmon';
        green0.style.color = 'salmon';
        d.style.background = 'salmon';
        d.style.border = 'salmon';
        break;
} }else if(image == 1){
document.body.style.background = 'black';
hps.style.color = 'rgb(219, 219, 219)';
imgs.setAttribute('src','https://i.pinimg.com/originals/cc/65/09/cc6509211d4eea95619a31b1c290c417.jpg')
image-- 
for (let i = 0; i < resultid.length; i++) {
    resulted.style.color = "white";
    resultid[i].style.backgroundColor= 'black';
    resultid[i].style.color= "white";
    resultid[i].style.borderColor = 'white';;}
switch(count[0]){
    case 0: 
        yel.style.color = 'yellow';
        yellow0.style.color = 'yellow';
        a.style.background = 'yellow';
        a.style.border = 'yellow';
        break;
    case 1 : 
        a.style.background = 'red';
        a.style.border = 'red';
        a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        a.style.transition = '2s'
        yel.innerHTML = 'Red';
        yel.style.color = 'red';
        yel.style.transition = '2s'
        yellow0.style.color = 'red';
        yellow0.style.transition = '2s'
        break;
    case 2: 
        a.style.background = 'blue';
        a.style.border = 'blue';
        a.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        yel.innerHTML = 'Blue';
        yel.style.color = 'blue';
        yellow0.style.color = 'blue';
        break;
    case 3: 
        a.style.background = 'green';
        a.style.border = 'green';
        a.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        yel.innerHTML = 'Green';
        yel.style.color = 'green';
        yellow0.style.color = 'green';
        break;  
    case 4:  
        a.style.background = 'yellow';
        a.style.border = 'yellow';
        a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        yel.innerHTML = 'Yellow';
        yel.style.color = 'yellow';
        yellow0.style.color = 'yellow';
        break;}
switch(count[1]){
    case 0: 
        rad.style.color = 'red';
        red0.style.color = 'red';
        b.style.background = 'red';
        b.style.border = 'red';
        break;
    case 1 :  
        b.style.background = 'blue';
        b.style.border = 'blue';
        b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        b.style.transition = '2s';
        rad.innerHTML = 'Blue';
        rad.style.color = 'blue';
        rad.style.transition = '2s';
        red0.style.color = 'blue';
        red0.style.transition = '2s';
        break;
    case 2 :
        b.style.background = 'green';
        b.style.border = 'green';
        b.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        rad.innerHTML = 'Green';
        rad.style.color = 'green';
        red0.style.color = 'green'; 
        break;
    case 3 :
        b.style.background = 'yellow';
        b.style.border = 'yellow';
        b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        rad.innerHTML = 'Yellow';
        rad.style.color = 'yellow';
        red0.style.color = 'yellow';
        break;
    case 4 :
        b.style.background = 'red';
        b.style.border = 'red';
        b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        rad.innerHTML = 'Red';
        rad.style.color = 'red';
        red0.style.color = 'red';
        break;}
switch (count[2]){
    case 0: 
        blu.style.color = 'blue';
        blue0.style.color = 'blue';
        c.style.background = 'blue';
        c.style.border = 'blue';
    break;
    case 1: 
        c.style.background = 'green';
        c.style.border = 'green';
        c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        c.style.transition = '2s';
        blu.innerHTML = 'Green';
        blu.style.color = 'green';
        blu.style.transition = '2s';
        blue0.style.color = 'green';
        break;
    case 2:
        c.style.background = 'yellow';
        c.style.border = 'yellow';
        c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        blu.innerHTML = 'Yellow';
        blu.style.color = 'yellow';
        blue0.style.color = 'yellow';
        break;
    case 3:
        c.style.background = 'red';
        c.style.border = 'red';
        c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        blu.innerHTML = 'Red';
        blu.style.color = 'red';
        blue0.style.color = 'red';
        break;
    case 4:
        c.style.background = 'blue';
        c.style.border = 'blue';
        c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        blu.innerHTML = 'Blue';
        blu.style.color = 'blue';
        blue0.style.color = 'blue';
        break;}
switch(count[3]){
    case 0:
        gre.style.color = 'green';
        green0.style.color = 'green';
        d.style.background = 'green';
        d.style.border = 'green';
        break;
    case 1:
        d.style.background = 'yellow';
        d.style.border = 'yellow';
        d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        d.style.transition = '2s';
        gre.innerHTML = 'Yellow';
        gre.style.color = 'yellow';
        gre.style.transition = '2s';
        green0.style.color = 'yellow';
        green0.style.transition = '2s';
        break;
    case 2:
        d.style.background = 'red';
        d.style.border = 'red';
        d.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        gre.innerHTML = 'Red';
        gre.style.color = 'red';
        green0.style.color = 'red';
        break;
    case 3:
        d.style.background = 'blue';
        d.style.border = 'blue';
        d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        gre.innerHTML = 'Blue';
        gre.style.color = 'blue';
        green0.style.color = 'blue';
        break;
    case 4:
        d.style.background = 'green';
        d.style.border = 'green';
        d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        gre.innerHTML = 'Green';
        gre.style.color = 'green';
        green0.style.color = 'green';
        break;}}}