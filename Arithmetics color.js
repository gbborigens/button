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
const resulted = document.querySelector('.resulted')
const resultid = document.querySelectorAll(".results1, .results2, .results3, .results4, .results5, .results6");
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const plus2 = document.querySelector(".plus2")
const minus2 = document.querySelector(".minus2")
const plus3 = document.querySelector(".plus3")
const minus3 = document.querySelector(".minus3")
const plus4 = document.querySelector(".plus4")
const minus4 = document.querySelector(".minus4")
var color =[0,0,0,0];
var image = 0;
var count =[0,0,0,0];
const modelStyle = (button, word, number, plus, minus, color, boxShadow, borderRadius,leftWord,leftNumber) =>{
    button.style.background = color;
    button.style.border = color; 
    button.style.boxShadow = boxShadow
    button.style.borderRadius = borderRadius;
    word.style.color = color;
    word.innerHTML = color;
    word.style.font="normal 25px arial";
    word.style.position="relative";
    word.style.left=leftWord;
    number.style.color = color;
    number.style.font="normal 25px arial";
    number.style.position="relative";
    number.style.left =leftNumber;
    plus.style.background=color;
    plus.style.border=color;
    minus.style.background=color;
    minus.style.border=color;}
var sum1 = (sm1,sb1) =>{
switch(sm1){
case 0:case 4:case -4:
modelStyle(a,yel,yellow0,plus,minus,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%')
count[0] = 0
break;
case 1 :case -3:
modelStyle(a,yel,yellow0,plus,minus,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%')
break;
case 2:case -2:
modelStyle(a,yel,yellow0,plus,minus,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%')
break;
case 3:case -1:
modelStyle(a,yel,yellow0,plus,minus,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%')
break;}
switch(sb1){
    case 0:case 4:case -4:
    modelStyle(a,yel,yellow0,plus,minus,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%')
    count[0] = 0
    break;
    case 1 :case -3:
    modelStyle(a,yel,yellow0,plus,minus,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%')
    break;
    case 2:case -2:
    modelStyle(a,yel,yellow0,plus,minus,'Purple','-1px -1px 0px rgb(0, 50, 0) inset','40%')
    break;
    case 3:case -1:
    modelStyle(a,yel,yellow0,plus,minus,'Salmon','-1px -1px 0px rgb(0, 0, 50) inset','80%')
    break;}}
var  sum2 = (sm2,sb2) =>{
switch(sm2){
case 0:case 4:case -4:
modelStyle(b,rad,red0,plus2,minus2,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%','8%','12%')
count[1] = 0;
break;
case 1 : case -3:
modelStyle(b,rad,red0,plus2,minus2,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%')
break;
case 2 : case -2:
modelStyle(b,rad,red0,plus2,minus2,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%')
break;
case 3 : case -1:
modelStyle(b,rad,red0,plus2,minus2,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%')
break;}
switch(sb2){
    case 0:case 4:case -4:
    modelStyle(b,rad,red0,plus2,minus2,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%','8%','12%')
    count[1] = 0;
    break;
    case 1 : case -3:
    modelStyle(b,rad,red0,plus2,minus2,'Purple','-1px -1px 0px rgb(0, 0, 50) inset','40%')
    break;
    case 2 : case -2:
    modelStyle(b,rad,red0,plus2,minus2,'Salmon','-1px -1px 0px rgb(0, 50, 0) inset','80%')
    break;
    case 3 : case -1:
    modelStyle(b,rad,red0,plus2,minus2,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%')
    break;}}
var  sum3 = (sm3,sb3) =>{
switch(sm3){
case 0: case 4: case -4:
modelStyle(c,blu,blue0,plus3,minus3,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%','17%','24%')
count[2] = 0;
break;
case 1: case -3:
modelStyle(c,blu,blue0,plus3,minus3,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%')
break;
case 2: case -2:
modelStyle(c,blu,blue0,plus3,minus3,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%')
break;
case 3: case -1:
modelStyle(c,blu,blue0,plus3,minus3,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%')
break;}switch(sb3){
    case 0: case 4: case -4:
    modelStyle(c,blu,blue0,plus3,minus3,'Purple','-1px -1px 0px rgb(0, 0, 50) inset','40%','17%','24%')
    count[2] = 0;
    break;
    case 1: case -3:
    modelStyle(c,blu,blue0,plus3,minus3,'Salmon','-1px -1px 0px rgb(0, 50, 0) inset','80%')
    break;
    case 2: case -2:
    modelStyle(c,blu,blue0,plus3,minus3,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%')
    break;
    case 3: case -1:
    modelStyle(c,blu,blue0,plus3,minus3,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%')
    break;}}
var sum4 = (sm4,sb4) =>{
switch(sm4){
case 0: case 4: case -4:
modelStyle(d,gre,green0,plus4,minus4,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%','26%','36%')
count[3] = 0;
break;
case 1: case -3:
modelStyle(d,gre,green0,plus4,minus4,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%')
break;
case 2: case -2:
modelStyle(d,gre,green0,plus4,minus4,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%')
break;
case 3: case -1:
modelStyle(d,gre,green0,plus4,minus4,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%')
break;}
switch(sb4){
    case 0: case 4: case -4:
    modelStyle(d,gre,green0,plus4,minus4,'Salmon','-1px -1px 0px rgb(0, 50, 0) inset','80%','26%','36%')
    count[3] = 0;
    break;
    case 1: case -3:
    modelStyle(d,gre,green0,plus4,minus4,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%')
    break;
    case 2: case -2:
    modelStyle(d,gre,green0,plus4,minus4,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%')
    break;
    case 3: case -1:
    modelStyle(d,gre,green0,plus4,minus4,'Purple','-1px -1px 0px rgb(0, 0, 50) inset','40%')
    break;}}          
const work =()=>{
image = 0
document.body.style.background = 'black';
hps.style.color = 'white';
product.style.color = 'Red'
imgs.setAttribute('src','https://i.pinimg.com/originals/cc/65/09/cc6509211d4eea95619a31b1c290c417.jpg');
const atr = [a,b,c,d,yel,rad,blu,gre,yellow0,red0,blue0,green0,plus,plus2,plus3,plus4,minus,minus2,minus3,minus4,resulted,hps];
for( let i in atr){                    
atr[i].style.transition = "2s";}
sum1(count[0]);
sum2(count[1]);
sum3(count[2]);
sum4(count[3]);
for(let i in resultid){
resulted.style.color = "white";
resultid[i].style.backgroundColor = 'black';
resultid[i].style.color= "white";
resultid[i].style.borderColor = 'white';
resultid[i].style.transition = "2s";}
}   
plus.addEventListener('click',function(){
count[0]++
color[0]++
if(image === 1){
sum1('',count[0]);}
else{sum1(count[0]);}
yellow0.innerHTML = color[0];})
plus2.addEventListener('click',function(){
count[1]++
color[1]++
if(image==1){
sum2('',count[1]);}
else{sum2(count[1]);}
red0.innerHTML = color[1];})  
plus3.addEventListener('click',function(){
count[2]++
color[2]++
if(image === 1){
sum3('',count[2]);}
else{sum3(count[2]);}
blue0.innerHTML = color[2];})      
plus4.addEventListener('click',function(){
count[3]++
color[3]++
if(image === 1){
sum4('',count[3])}
else{sum4(count[3]);}
green0.innerHTML = color[3];})    
minus.addEventListener('click',function(){
count[0]--
color[0]--
if(image === 1){
sum1('',count[0]);}
else{sum1(count[0]);}
yellow0.innerHTML = color[0];})
minus2.addEventListener('click',function(){
count[1]--
color[1]--
if(image==1){
sum2('',count[1]);}
else{sum2(count[1]);}
red0.innerHTML = color[1];})
minus3.addEventListener('click',function(){
count[2]--
color[2]--
if(image === 1){
sum3('',count[2]);}
else{sum3(count[2]);}
blue0.innerHTML = color[2];})
minus4.addEventListener('click',function(){
count[3]--
color[3]--
if(image === 1){
sum4('',count[3])}
else{sum4(count[3]);}
green0.innerHTML = color[3];})
resultid[0].addEventListener("click", function(){
product.innerHTML= Number(Math.abs(color[0])+Math.abs(color[1])+Math.abs(color[2])+Math.abs(color[3]))});
resultid[1].addEventListener("click",function(){
product.innerHTML= Number(-Math.abs(color[0])-Math.abs(color[1])-Math.abs(color[2])-Math.abs(color[3]))});
resultid[2].addEventListener("click", function(){
product.innerHTML= Number(color[0]*color[1]*color[2]*color[3])});
resultid[3].addEventListener("click",function(){
product.innerHTML= Number(color[0]/color[1]/color[2]/color[3])});
resultid[4].addEventListener("click",function(){
product.innerHTML = Number(color[0]%color[1]%color[2]%color[3])});
resultid[5].addEventListener("click", function(){
product.innerHTML = Number(color[0]**color[1]**color[2]**color[3])});
imgs.addEventListener("click",function() {image++
if(image === 1){
sum1('',count[0]);
sum2('',count[1]);
sum3('',count[2]);
sum4('',count[3]);
document.body.style.background = 'white';
hps.style.color = 'black';
product.style.color = 'Brown'
imgs.setAttribute('src','https://i.pinimg.com/originals/c9/c1/cf/c9c1cf41920598394f613f1fc38a08ff.jpg');
for(let i in resultid){
resulted.style.color = "black";
resultid[i].style.backgroundColor = 'white';
resultid[i].style.color = 'black';
resultid[i].style.borderColor = 'black';}
}else{work();}});
work();