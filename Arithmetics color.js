var background = document.body.style.backgroundColor = 'black'
var yel = document.getElementById("yellow")
var rad = document.getElementById("red")
var blu = document.getElementById("blue")
var gre = document.getElementById("green")
var yellow0 = document.getElementById('yellow0')
var red0 = document.getElementById('red0')
var blue0 = document.getElementById('blue0')
var green0 = document.getElementById('green0')
var a = document.getElementById("test")
var b = document.getElementById("test2")
var c = document.getElementById("test3")
var d = document.getElementById("test4") 
var result = document.getElementById('result')
var result2 = document.getElementById('result2')
var result3 = document.getElementById('result3')
var result4 = document.getElementById('result4')
var result5 = document.getElementById('result5')
var result6 = document.getElementById('result6')
var hps = document.getElementById('h1s')
var back = 0;
var yell = 0;
var redd = 0;
var bluu = 0;
var gree = 0;
var county = 0;
var countr = 0;
var countb = 0;
var countg = 0;
function yellow(){
yell++;
switch(yell){
case 1 : 
    a.style.background = 'red';
    a.style.border = 'red';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    a.style.transition = '2s'
    yel.innerHTML = 'Red⠀⠀⠀⠀⠀';
    yel.style.color = 'red';
    yellow0.style.color = 'red';
    break;
case 2: 
    a.style.background = 'blue';
    a.style.border = 'blue';
    a.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    yel.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    yel.style.color = 'blue';
    yellow0.style.color = 'blue';
    break;
case 3: 
    a.style.background = 'green';
    a.style.border = 'green';
    a.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    yel.innerHTML = 'Green⠀⠀⠀';
    yel.style.color = 'green';
    yellow0.style.color = 'green';
    break;  
case 4:  
    a.style.background = 'yellow';
    a.style.border = 'yellow';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    yel.innerHTML = 'Yellow⠀⠀⠀';
    yel.style.color = 'yellow';
    yellow0.style.color = 'yellow';
    break;
    }
county++;
yellow0.innerHTML = county;}
function red(){ 
redd++;
switch(redd){
case 1 :  
    b.style.background = 'blue';
    b.style.border = 'blue';
    rad.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    rad.style.color = 'blue';
    red0.style.color = 'blue';
    break;
case 2 :
    b.style.background = 'green';
    b.style.border = 'green';
    rad.innerHTML = 'Green⠀⠀⠀';
    b.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    rad.style.color = 'green';
    red0.style.color = 'green'; 
    break;
case 3 :
    b.style.background = 'yellow';
    b.style.border = 'yellow';
    rad.innerHTML = 'Yellow⠀⠀⠀';
    b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    rad.style.color = 'yellow';
    red0.style.color = 'yellow';
    break;
case 4 :
    b.style.background = 'red';
    b.style.border = 'red';
    rad.innerHTML = 'Red⠀⠀⠀⠀⠀';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    rad.style.color = 'red';
    red0.style.color = 'red';
    break;}
countr++;
red0.innerHTML = countr;}
function blue(){
bluu++;
switch (bluu){
case 1: 
    c.style.background = 'green';
    c.style.border = 'green';
    blu.innerHTML = 'Green⠀⠀⠀';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    blu.style.color = 'green';
    blue0.style.color = 'green';
    break;
case 2:
    c.style.background = 'yellow';
    c.style.border = 'yellow';
    blu.innerHTML = 'Yellow⠀⠀⠀';
    c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    blu.style.color = 'yellow';
    blue0.style.color = 'yellow';
    break;
case 3:
    c.style.background = 'red';
    c.style.border = 'red';
    blu.innerHTML = 'Red⠀⠀⠀⠀⠀';
    c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    blu.style.color = 'red';
    blue0.style.color = 'red';
    break;
case 4:
    c.style.background = 'blue';
    c.style.border = 'blue';
    blu.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    blu.style.color = 'blue';
    blue0.style.color = 'blue';
    break;}
countb++;
blue0.innerHTML = countb;}
function green(){
gree++;
switch(gree){
case 1: 
    d.style.background = 'yellow';
    d.style.border = 'yellow';
    gre.innerHTML = 'Yellow⠀⠀⠀';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    gre.style.color = 'yellow';
    green0.style.color = 'yellow';
    break;
case 2:
    d.style.background = 'red';
    d.style.border = 'red';
    gre.innerHTML = 'Red⠀⠀⠀⠀⠀';
    d.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
    gre.style.color = 'red';
    green0.style.color = 'red';
    break;
case 3:
    d.style.background = 'blue';
    d.style.border = 'blue';
    gre.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    gre.style.color = 'blue';
    green0.style.color = 'blue';
    break;
case 4:
    d.style.background = 'green';
    d.style.border = 'green';
    gre.innerHTML = 'Green⠀⠀⠀';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    gre.style.color = 'green';
    green0.style.color = 'green';
    break;}
countg++;
green0.innerHTML = countg;}
function rest(){
result.value= Number(county+countr+countb+countg)}
function rest2(){
result2.value= Number(-county-countr-countb-countg)}
function rest3(){
result3.value= Number(county*countr*countb*countg)}
function rest4(){
result4.value= Number(county/countr/countb/countg)}
function rest5(){
result5.value = Number(county%countr%countb%countg)}
function rest6(){
result6.value = Number(county**countr**countb**countg)}
function img() {if(back == 0){
document.body.style.background = 'white';
hps.style.color = 'black';
imgy.setAttribute('src','https://i.pinimg.com/originals/c9/c1/cf/c9c1cf41920598394f613f1fc38a08ff.jpg')
back++
if(yell == 0 || 4){
yel.style.color = 'orange';
yellow0.style.color = 'orange';}
if(redd == 3){
rad.style.color = 'orange';
red0.style.color = 'orange';}
if(bluu == 2){
blu.style.color = 'orange';
blue0.style.color = 'orange';}
if(gree == 1){
gre.style.color = 'orange';
green0.style.color = 'orange';
}} else if(back == 1){
document.body.style.background = 'black';
hps.style.color = 'rgb(219, 219, 219)';
imgy.setAttribute('src','https://i.pinimg.com/originals/cc/65/09/cc6509211d4eea95619a31b1c290c417.jpg')
back--}}