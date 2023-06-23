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
if(yell < 4){
    yell++} else{
    yell= yell-3}
switch(yell){
case 1 : 
    a.style.background = 'red';
    a.style.border = 'red';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    a.style.transition = '2s'
    yel.innerHTML = 'Red⠀⠀⠀⠀⠀';
    yel.style.color = 'red';
    yel.style.transition = '2s'
    yellow0.style.color = 'red';
    yellow0.style.transition = '2s'
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
if(redd < 4){
    redd++;} else{
    redd= redd-3}
switch(redd){
case 1 :  
    b.style.background = 'blue';
    b.style.border = 'blue';
    rad.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    b.style.transition = '2s';
    rad.style.color = 'blue';
    rad.style.transition = '2s';
    red0.style.color = 'blue';
    red0.style.transition = '2s';
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
if(bluu < 4){
    bluu++;} else{
    bluu= bluu-3}
switch (bluu){
case 1: 
    c.style.background = 'green';
    c.style.border = 'green';
    blu.innerHTML = 'Green⠀⠀⠀';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    c.style.transition = '2s';
    blu.style.color = 'green';
    blu.style.transition = '2s';
    blue0.style.color = 'green';
    blue0.style.transition = '2s';
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
if(gree < 4){
    gree++;} else{
    gree= gree-3}
switch(gree){
case 1: 
    d.style.background = 'yellow';
    d.style.border = 'yellow';
    gre.innerHTML = 'Yellow⠀⠀⠀';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    d.style.transition = '2s';
    gre.style.color = 'yellow';
    gre.style.transition = '2s';
    green0.style.color = 'yellow';
    green0.style.transition = '2s';
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
switch(yell){
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
switch(redd){
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
if(bluu == 2){
blu.style.color = 'orange';
blue0.style.color = 'orange';
c.style.background = 'orange';
c.style.border = 'orange';}
switch(bluu){
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
switch(gree){
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
}
} else if(back == 1){
document.body.style.background = 'black';
hps.style.color = 'rgb(219, 219, 219)';
imgy.setAttribute('src','https://i.pinimg.com/originals/cc/65/09/cc6509211d4eea95619a31b1c290c417.jpg')
back-- 
switch(yell){
    case 0: 
        yel.style.color = 'yellow';
        yellow0.style.color = 'yellow';
        a.style.background = 'yellow';
        a.style.border = 'yellow';
    case 1 : 
        a.style.background = 'red';
        a.style.border = 'red';
        a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        a.style.transition = '2s'
        yel.innerHTML = 'Red⠀⠀⠀⠀⠀';
        yel.style.color = 'red';
        yel.style.transition = '2s'
        yellow0.style.color = 'red';
        yellow0.style.transition = '2s'
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
        break;}
switch(redd){
    case 1 :  
        b.style.background = 'blue';
        b.style.border = 'blue';
        rad.innerHTML = 'Blue⠀⠀⠀⠀⠀';
        b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        b.style.transition = '2s';
        rad.style.color = 'blue';
        rad.style.transition = '2s';
        red0.style.color = 'blue';
        red0.style.transition = '2s';
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
switch (bluu){
    case 1: 
        c.style.background = 'green';
        c.style.border = 'green';
        blu.innerHTML = 'Green⠀⠀⠀';
        c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        c.style.transition = '2s';
        blu.style.color = 'green';
        blu.style.transition = '2s';
        blue0.style.color = 'green';
        blue0.style.transition = '2s';
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
switch(gree){
    case 1: 
        d.style.background = 'yellow';
        d.style.border = 'yellow';
        gre.innerHTML = 'Yellow⠀⠀⠀';
        d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
        d.style.transition = '2s';
        gre.style.color = 'yellow';
        gre.style.transition = '2s';
        green0.style.color = 'yellow';
        green0.style.transition = '2s';
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
        break;}}}