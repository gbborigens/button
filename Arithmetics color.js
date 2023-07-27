const yel = document.getElementById("yellow")
const rad = document.getElementById("red")
const blu = document.getElementById("blue")
const gre = document.getElementById("green")
const yellow0 = document.getElementById('yellow0')
const red0 = document.getElementById('red0')
const blue0 = document.getElementById('blue0')
const green0 = document.getElementById('green0')
const a = document.getElementById("test")
const b = document.getElementById("test2")
const c = document.getElementById("test3")
const d = document.getElementById("test4") 
const result = document.getElementById('result')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')
const result4 = document.getElementById('result4')
const result5 = document.getElementById('result5')
const result6 = document.getElementById('result6')
const hps = document.getElementById('h1s')
const imgy = document.getElementById('imgy')
var color =[0,0,0,0,0,0,0,0,0];
function yellow(){
if(color[0] < 4)
{ color[0]++} else
{color[0]= color[0]-3}
switch(color[0]){
case 1 : 
    a.style.background = 'red';
    a.style.border = 'red';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    a.style.transition = '2s';
    a.style.borderRadius = '20%';
    yel.innerHTML = 'Red⠀⠀⠀⠀⠀';
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
    yel.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    yel.style.color = 'blue';
    yellow0.style.color = 'blue';
    break;
case 3: 
    a.style.background = 'green';
    a.style.border = 'green';
    a.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    a.style.borderRadius = '80%';
    yel.innerHTML = 'Green⠀⠀⠀';
    yel.style.color = 'green';
    yellow0.style.color = 'green';
    break;  
case 4:  
    a.style.background = 'yellow';
    a.style.border = 'yellow';
    a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    a.style.borderRadius = '10%';
    yel.innerHTML = 'Yellow⠀⠀⠀';
    yel.style.color = 'yellow';
    yellow0.style.color = 'yellow';
    break;
    }
color[4]++;
yellow0.innerHTML = color[4];}
function red(){ 
if(color[1] < 4){
    color[1]++;} else{
    color[1]= color[1]-3}
switch(color[1]){
case 1 :  
    b.style.background = 'blue';
    b.style.border = 'blue';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    b.style.transition = '2s';
    b.style.borderRadius = '40%';
    rad.innerHTML = 'Blue⠀⠀⠀⠀⠀';
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
    rad.innerHTML = 'Green⠀⠀⠀';
    rad.style.color = 'green';
    red0.style.color = 'green'; 
    break;
case 3 :
    b.style.background = 'yellow';
    b.style.border = 'yellow';
    b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    b.style.borderRadius = '10%';
    rad.innerHTML = 'Yellow⠀⠀⠀';
    rad.style.color = 'yellow';
    red0.style.color = 'yellow';
    break;
case 4 :
    b.style.background = 'red';
    b.style.border = 'red';
    b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    b.style.borderRadius = '20%';
    rad.innerHTML = 'Red⠀⠀⠀⠀⠀';
    rad.style.color = 'red';
    red0.style.color = 'red';
    break;}
color[5]++;
red0.innerHTML = color[5];}
function blue(){
if(color[2] < 4){
    color[2]++;} else{
    color[2]= color[2]-3}
switch (color[2]){
case 1: 
    c.style.background = 'green';
    c.style.border = 'green';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    c.style.transition = '2s';
    c.style.borderRadius = '80%';
    blu.innerHTML = 'Green⠀⠀⠀';
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
    blu.innerHTML = 'Yellow⠀⠀⠀';
    blu.style.color = 'yellow';
    blue0.style.color = 'yellow';
    break;
case 3:
    c.style.background = 'red';
    c.style.border = 'red';
    c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    c.style.borderRadius = '20%';
    blu.innerHTML = 'Red⠀⠀⠀⠀⠀';
    blu.style.color = 'red';
    blue0.style.color = 'red';
    break;
case 4:
    c.style.background = 'blue';
    c.style.border = 'blue';
    c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    c.style.borderRadius = '40%';
    blu.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    blu.style.color = 'blue';
    blue0.style.color = 'blue';
    break;}
color[6]++;
blue0.innerHTML = color[6];}
function green(){
if(color[3] < 4){
    color[3]++;} else{
    color[3]= color[3]-3}
switch(color[3]){
case 1: 
    d.style.background = 'yellow';
    d.style.border = 'yellow';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
    d.style.transition = '2s';
    d.style.borderRadius = '10%';
    gre.innerHTML = 'Yellow⠀⠀⠀';
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
    gre.innerHTML = 'Red⠀⠀⠀⠀⠀';
    gre.style.color = 'red';
    green0.style.color = 'red';
    break;
case 3:
    d.style.background = 'blue';
    d.style.border = 'blue';
    d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
    d.style.borderRadius = '40%';
    gre.innerHTML = 'Blue⠀⠀⠀⠀⠀';
    gre.style.color = 'blue';
    green0.style.color = 'blue';
    break;
case 4:
    d.style.background = 'green';
    d.style.border = 'green';
    d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
    d.style.borderRadius = '80%';
    gre.innerHTML = 'Green⠀⠀⠀';
    gre.style.color = 'green';
    green0.style.color = 'green';
    break;}
color[7]++;
green0.innerHTML = color[7];}
function rest(){
result.value= Number(color[4]+color[5]+color[6]+color[7])}
function rest2(){
result2.value= Number(-color[4]-color[5]-color[6]-color[7])}
function rest3(){
result3.value= Number(color[4]*color[5]*color[6]*color[7])}
function rest4(){
result4.value= Number(color[4]/color[5]/color[6]/color[7])}
function rest5(){
result5.value = Number(color[4]%color[5]%color[6]%color[7])}
function rest6(){
result6.value = Number(color[4]**color[5]**color[6]**color[7])}
function img() {if(color[8] == 0){
document.body.style.background = 'white';
hps.style.color = 'black';
hps.style.transition = '2s';
imgy.setAttribute('src','https://i.pinimg.com/originals/c9/c1/cf/c9c1cf41920598394f613f1fc38a08ff.jpg')
color[8]++
    result.style.backgroundColor= 'white';
    result.style.color= "black";
    result.style.borderColor='black';
    result.style.transition = '2s';
    result2.style.backgroundColor= 'white';
    result2.style.color= "black";
    result2.style.borderColor='black';
    result2.style.transition = '2s';
    result3.style.backgroundColor= 'white';
    result3.style.color= "black";
    result3.style.borderColor='black';
    result3.style.transition = '2s';
    result4.style.backgroundColor= 'white';
    result4.style.color= "black";
    result4.style.borderColor='black';
    result4.style.transition = '2s';
    result5.style.backgroundColor= 'white';
    result5.style.color= "black";
    result5.style.borderColor='black';
    result5.style.transition = '2s';
    result6.style.backgroundColor= 'white';
    result6.style.color= "black";
    result6.style.borderColor='black';
    result6.style.transition = '2s';
switch(color[0]){
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
switch(color[1]){
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
switch(color[2]){
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
switch(color[3]){
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
} else if(color[8] == 1){
document.body.style.background = 'black';
hps.style.color = 'rgb(219, 219, 219)';
imgy.setAttribute('src','https://i.pinimg.com/originals/cc/65/09/cc6509211d4eea95619a31b1c290c417.jpg')
color[8]-- 
    result.style.backgroundColor= 'black';
    result.style.color= "white";
    result.style.borderColor='white';
    result2.style.backgroundColor= 'black';
    result2.style.color= "white";
    result2.style.borderColor='white';
    result3.style.backgroundColor= 'black';
    result3.style.color= "white";
    result3.style.borderColor='white';
    result4.style.backgroundColor= 'black';
    result4.style.color= "white";
    result4.style.borderColor='white';
    result5.style.backgroundColor= 'black';
    result5.style.color= "white";
    result5.style.borderColor='white';
    result6.style.backgroundColor= 'black';
    result6.style.color= "white";
    result6.style.borderColor='white';
switch(color[0]){
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
switch(color[1]){
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
        rad.innerHTML = 'Blue⠀⠀⠀⠀⠀';
        rad.style.color = 'blue';
        rad.style.transition = '2s';
        red0.style.color = 'blue';
        red0.style.transition = '2s';
        break;
    case 2 :
        b.style.background = 'green';
        b.style.border = 'green';
        b.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        rad.innerHTML = 'Green⠀⠀⠀';
        rad.style.color = 'green';
        red0.style.color = 'green'; 
        break;
    case 3 :
        b.style.background = 'yellow';
        b.style.border = 'yellow';
        b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        rad.innerHTML = 'Yellow⠀⠀⠀';
        rad.style.color = 'yellow';
        red0.style.color = 'yellow';
        break;
    case 4 :
        b.style.background = 'red';
        b.style.border = 'red';
        b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        rad.innerHTML = 'Red⠀⠀⠀⠀⠀';
        rad.style.color = 'red';
        red0.style.color = 'red';
        break;}
switch (color[2]){
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
        blu.innerHTML = 'Green⠀⠀⠀';
        blu.style.color = 'green';
        blu.style.transition = '2s';
        blue0.style.color = 'green';
        break;
    case 2:
        c.style.background = 'yellow';
        c.style.border = 'yellow';
        c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        blu.innerHTML = 'Yellow⠀⠀⠀';
        blu.style.color = 'yellow';
        blue0.style.color = 'yellow';
        break;
    case 3:
        c.style.background = 'red';
        c.style.border = 'red';
        c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        blu.innerHTML = 'Red⠀⠀⠀⠀⠀';
        blu.style.color = 'red';
        blue0.style.color = 'red';
        break;
    case 4:
        c.style.background = 'blue';
        c.style.border = 'blue';
        c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        blu.innerHTML = 'Blue⠀⠀⠀⠀⠀';
        blu.style.color = 'blue';
        blue0.style.color = 'blue';
        break;}
switch(color[3]){
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
        gre.innerHTML = 'Yellow⠀⠀⠀';
        gre.style.color = 'yellow';
        gre.style.transition = '2s';
        green0.style.color = 'yellow';
        green0.style.transition = '2s';
        break;
    case 2:
        d.style.background = 'red';
        d.style.border = 'red';
        d.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
        gre.innerHTML = 'Red⠀⠀⠀⠀⠀';
        gre.style.color = 'red';
        green0.style.color = 'red';
        break;
    case 3:
        d.style.background = 'blue';
        d.style.border = 'blue';
        d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
        gre.innerHTML = 'Blue⠀⠀⠀⠀⠀';
        gre.style.color = 'blue';
        green0.style.color = 'blue';
        break;
    case 4:
        d.style.background = 'green';
        d.style.border = 'green';
        d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
        gre.innerHTML = 'Green⠀⠀⠀';
        gre.style.color = 'green';
        green0.style.color = 'green';
        break;}}}