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
var sum1 = function(sm1){
switch(sm1){
case 0: 
a.style.background = 'yellow';
a.style.border = 'yellow'; 
a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
a.style.borderRadius = '10%';
yel.style.color = 'yellow';
yel.innerHTML = 'Yellow';
yel.style.font="normal 25px arial";
yel.style.position="relative";
yellow0.style.color = 'yellow';
yellow0.style.font="normal 25px arial";
yellow0.style.position="relative";
plus.style.background="yellow";
plus.style.border="yellow";
minus.style.background="yellow";
minus.style.border="yellow";
break;
case 1 : 
a.style.background = 'red';
a.style.border = 'red';
a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
a.style.borderRadius = '20%';
yel.style.color = 'red';
yel.innerHTML = 'Red';
yellow0.style.color = 'red';
plus.style.background="red";
plus.style.border="red";
minus.style.background="red";
minus.style.border="red";
break;
case 2: 
a.style.background = 'blue';
a.style.border = 'blue';
a.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
a.style.borderRadius = '40%';
yel.style.color = 'blue';
yel.innerHTML = 'Blue';
yellow0.style.color = 'blue';
plus.style.background="blue";
plus.style.border="blue";
minus.style.background="blue";
minus.style.border="blue";
break;
case 3: 
a.style.border = 'green';
a.style.background = 'green';
a.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
a.style.borderRadius = '80%';
yel.style.color = 'green';
yel.innerHTML = 'Green';
yellow0.style.color = 'green';
plus.style.background="green";
plus.style.border="green";
minus.style.background="green";
minus.style.border="green";
case 4:  
break;  
a.style.background = 'yellow';
a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
a.style.borderRadius = '10%';
yel.style.color = 'yellow';
yel.innerHTML = 'Yellow';
yellow0.style.color = 'yellow';
plus.style.background="yellow";
plus.style.border="yellow";
minus.style.background="yellow";
minus.style.border="yellow";
count[0] = 0
break;
case -1: 
a.style.background = 'green';
a.style.border = 'green';
a.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
a.style.borderRadius = '80%';
yel.innerHTML = 'Green';
yel.style.color = 'green';
yellow0.style.color = 'green';
plus.style.background="green";
plus.style.border="green";
minus.style.background="green";
minus.style.border="green";
break;
case -2: 
a.style.background = 'blue';
a.style.border = 'blue';
a.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
a.style.borderRadius = '40%';
yel.innerHTML = 'Blue';
yel.style.color = 'blue';
yellow0.style.color = 'blue';
plus.style.background="blue";
plus.style.border="blue";
minus.style.background="blue";
minus.style.border="blue";
break;
case -3: 
a.style.background = 'red';
a.style.border = 'red';
a.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
a.style.borderRadius = '20%';
yel.innerHTML = 'Red';
yel.style.color = 'red';
yellow0.style.color = 'red';
plus.style.background="red";
plus.style.border="red";
minus.style.background="red";
minus.style.border="red";
break; 
case -4:  
a.style.background = 'yellow';
a.style.border = 'yellow';
a.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
a.style.borderRadius = '10%';
yel.innerHTML = 'Yellow';
yel.style.color = 'yellow';
yellow0.style.color = 'yellow';
plus.style.background="yellow";
plus.style.border="yellow";
minus.style.background="yellow";
minus.style.border="yellow";
count[0] = 0
break;} }
var  sum2 = function(sm2){
switch(sm2){
case 0:
b.style.background = 'red';
b.style.border = 'red';
b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
b.style.borderRadius = '20%';
rad.style.color = 'red';
rad.style.font="normal 25px arial";
rad.innerHTML = 'Red';
rad.style.position="relative";
rad.style.left="8%";
red0.style.color = 'red';
red0.style.font="normal 25px arial";
red0.style.position="relative";
red0.style.left="12%";
plus2.style.background="red";
plus2.style.border="red";
minus2.style.background="red";
minus2.style.border="red";
break;
case 1 :
b.style.border = 'blue';
b.style.background = 'blue';
b.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
b.style.borderRadius = '40%';
rad.style.color = 'blue';
rad.innerHTML = 'Blue';
red0.style.color = 'blue';
plus2.style.background="blue";
plus2.style.border="blue";
minus2.style.background="blue";
minus2.style.border="blue";
break;
case 2 :
b.style.background = 'green';
b.style.border = 'green';
b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
b.style.borderRadius = '80%';
rad.style.color = 'green';
rad.innerHTML = 'Green';
red0.style.color = 'green'; 
plus2.style.background="green";
plus2.style.border="green";
minus2.style.background="green";
minus2.style.border="green";
break;
case 3 :
b.style.background = 'yellow';
b.style.border = 'yellow';
b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
b.style.borderRadius = '10%';
rad.style.color = 'yellow';
rad.innerHTML = 'Yellow';
red0.style.color = 'yellow';
plus2.style.background="yellow";
plus2.style.border="yellow";
minus2.style.background="yellow";
minus2.style.border="yellow";
break;
case 4 :
b.style.background = 'red';
b.style.border = 'red';
b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
b.style.borderRadius = '20%';
rad.style.color = 'red';
rad.innerHTML = 'Red';
red0.style.color = 'red';
plus2.style.background="red";
plus2.style.border="red";
minus2.style.background="red";
minus2.style.border="red";
count[1] = 0;
break;
case -1 :  
b.style.background = 'yellow';
b.style.border = 'yellow';
b.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
b.style.borderRadius = '10%';
rad.innerHTML = 'Yellow';
rad.style.color = 'yellow';
red0.style.color = 'yellow';
plus2.style.background="yellow";
plus2.style.border="yellow";
minus2.style.background="yellow";
minus2.style.border="yellow";
break;
case -2 :
b.style.background = 'green';
b.style.border = 'green';
b.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
b.style.borderRadius = '80%';
rad.innerHTML = 'Green';
rad.style.color = 'green';
red0.style.color = 'green'; 
plus2.style.background="green";
plus2.style.border="green";
minus2.style.background="green";
minus2.style.border="green";
break;
case -3 :
b.style.background = 'blue';
b.style.border = 'blue';
b.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
b.style.borderRadius = '40%';
rad.innerHTML = 'Blue';
rad.style.color = 'blue';
red0.style.color = 'blue';
plus2.style.background="blue";
plus2.style.border="blue";
minus2.style.background="blue";
minus2.style.border="blue";
break;
case -4 :
b.style.background = 'red';
b.style.border = 'red';
b.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
b.style.borderRadius = '20%';
rad.innerHTML = 'Red';
rad.style.color = 'red';
red0.style.color = 'red';
plus2.style.background="red";
plus2.style.border="red";
minus2.style.background="red";
minus2.style.border="red";
count[1] = 0;
break;}}
var  sum3 = function(sm3){
switch(sm3){
case 0: 
c.style.background = 'blue';
c.style.border = 'blue';
c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
c.style.borderRadius = '40%';
blu.style.color = 'blue';
blu.style.font="normal 25px arial";
blu.style.position="relative";
blu.innerHTML = 'Blue';
blu.style.left="17%";
blue0.style.color = 'blue';
blue0.style.font="normal 25px arial";
blue0.style.position="relative";
blue0.style.left="24%";
plus3.style.background="blue";
plus3.style.border="blue";
minus3.style.background="blue";
minus3.style.border="blue";
break;
case 1: 
c.style.background = 'green';
c.style.border = 'green';
c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
c.style.borderRadius = '80%';
blu.style.color = 'green';
blu.innerHTML = 'Green';
blue0.style.color = 'green';
plus3.style.background="green";
plus3.style.border="green";
minus3.style.background="green";
minus3.style.border="green";
break;
case 2:
c.style.background = 'yellow';
c.style.border = 'yellow';
c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
c.style.borderRadius = '10%';
blu.style.color = 'yellow';
blu.innerHTML = 'Yellow';
blue0.style.color = 'yellow';
plus3.style.background="yellow";
plus3.style.border="yellow";
minus3.style.background="yellow";
minus3.style.border="yellow";
break;
case 3:
c.style.background = 'red';
c.style.border = 'red';
c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
c.style.borderRadius = '20%';
blu.style.color = 'red';
blu.innerHTML = 'Red';
blue0.style.color = 'red';
plus3.style.background="red";
plus3.style.border="red";
minus3.style.background="red";
minus3.style.border="red";
break;
case 4:
c.style.background = 'blue';
c.style.border = 'blue';
c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
c.style.borderRadius = '40%';
blu.style.color = 'blue';
blu.innerHTML = 'Blue';
blue0.style.color = 'blue';
plus3.style.background="blue";
plus3.style.border="blue";
minus3.style.background="blue";
minus3.style.border="blue";
count[2] = 0;
break;
case -1: 
c.style.background = 'red';
c.style.border = 'red';
c.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
c.style.borderRadius = '20%';
blu.innerHTML = 'Red';
blu.style.color = 'red';
blue0.style.color = 'red';
plus3.style.background="red";
plus3.style.border="red";
minus3.style.background="red";
minus3.style.border="red";
break;
case -2:
c.style.background = 'yellow';
c.style.border = 'yellow';
c.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
c.style.borderRadius = '10%';
blu.innerHTML = 'Yellow';
blu.style.color = 'yellow';
blue0.style.color = 'yellow';
plus3.style.background="yellow";
plus3.style.border="yellow";
minus3.style.background="yellow";
minus3.style.border="yellow";
break;
case -3:
c.style.background = 'green';
c.style.border = 'green';
c.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
c.style.borderRadius = '80%';
blu.innerHTML = 'Green';
blu.style.color = 'green';
blue0.style.color = 'green';
plus3.style.background="green";
plus3.style.border="green";
minus3.style.background="green";
minus3.style.border="green";
break;
case -4:
c.style.background = 'blue';
c.style.border = 'blue';
c.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
c.style.borderRadius = '40%';
blu.innerHTML = 'Blue';
blu.style.color = 'blue';
blue0.style.color = 'blue';
plus3.style.background="blue";
plus3.style.border="blue";
minus3.style.background="blue";
minus3.style.border="blue";
count[2] = 0;
break;}}
var sum4 = function(sm4){
switch(sm4){
case 0:
d.style.background = 'green';
d.style.border = 'green';
d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
d.style.borderRadius = '80%';
gre.style.color = 'green';
gre.style.font="normal 25px arial";
gre.style.position="relative";
gre.innerHTML = 'Green';
gre.style.left="26%";
green0.style.color = 'green';
green0.style.font="normal 25px arial";
green0.style.position="relative";
green0.style.left="36%";
plus4.style.background="green";
plus4.style.border="green";
minus4.style.background="green";
minus4.style.border="green";
break;
case 1: 
d.style.background = 'yellow';
d.style.border = 'yellow';
d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
d.style.borderRadius = '10%';
gre.style.color = 'yellow';
gre.innerHTML = 'Yellow';
green0.style.color = 'yellow';
plus4.style.background="yellow";
plus4.style.border="yellow";
minus4.style.background="yellow";
minus4.style.border="yellow";
break;
case 2:
d.style.background = 'red';
d.style.border = 'red';
d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
d.style.borderRadius = '20%';
gre.style.color = 'red';
gre.innerHTML = 'Red';
green0.style.color = 'red';
plus4.style.background="red";
plus4.style.border="red";
minus4.style.background="red";
minus4.style.border="red";
break;
case 3:
d.style.background = 'blue';
d.style.border = 'blue';
d.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
d.style.borderRadius = '40%';
gre.style.color = 'blue';
gre.innerHTML = 'Blue';
green0.style.color = 'blue';
plus4.style.background="blue";
plus4.style.border="blue";
minus4.style.background="blue";
minus4.style.border="blue";
break;
case 4:
d.style.background = 'green';
d.style.border = 'green';
d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
d.style.borderRadius = '80%';
gre.style.color = 'green';
gre.innerHTML = 'Green';
green0.style.color = 'green';
plus4.style.background="green";
plus4.style.border="green";
minus4.style.background="green";
minus4.style.border="green";
count[3] = 0;
break;
case -1: 
d.style.background = 'blue';
d.style.border = 'blue';
d.style.boxShadow = '-1px -1px 0px rgb(0, 50, 0) inset';
d.style.borderRadius = '40%';
gre.innerHTML = 'Blue';
gre.style.color = 'blue';
green0.style.color = 'blue';
plus4.style.background="blue";
plus4.style.border="blue";
minus4.style.background="blue";
minus4.style.border="blue";
break;
case -2:
d.style.background = 'red';
d.style.border = 'red';
d.style.boxShadow = '-1px -1px 0px rgb(0, 0, 50) inset';
d.style.borderRadius = '20%';
gre.innerHTML = 'Red';
gre.style.color = 'red';
green0.style.color = 'red';
plus4.style.background="red";
plus4.style.border="red";
minus4.style.background="red";
minus4.style.border="red";
break;
case -3:
d.style.background = 'yellow';
d.style.border = 'yellow';
d.style.boxShadow = '-1px -1px 0px rgb(50, 0, 0) inset';
d.style.borderRadius = '10%';
gre.innerHTML = 'Yellow';
gre.style.color = 'yellow';
green0.style.color = 'yellow';
plus4.style.background="yellow";
plus4.style.border="yellow";
minus4.style.background="yellow";
minus4.style.border="yellow";
break;
case -4:
d.style.background = 'green';
d.style.border = 'green';
d.style.boxShadow = '-1px -1px 0px rgb(50, 50, 0) inset';
d.style.borderRadius = '80%';
gre.innerHTML = 'Green';
gre.style.color = 'green';
green0.style.color = 'green';
plus4.style.background="green";
plus4.style.border="green";
minus4.style.background="green";
minus4.style.border="green";
count[3] = 0;
break;}}
var sub1 = function(sb1){
switch(sb1){
case 0:
yel.style.color = 'orange';
yel.innerHTML = 'Orange';
yellow0.style.color = 'orange';
a.style.background = 'orange';
a.style.border = 'orange';
a.style.borderRadius = '10%';
plus.style.background="orange";
plus.style.border="orange";
minus.style.background="orange";
minus.style.border="orange";
break;
case 1:
yel.style.color = 'brown';
yel.innerHTML = 'Brown';
yellow0.style.color = 'brown';
a.style.background = 'brown';
a.style.border = 'brown';
a.style.borderRadius = '20%';
plus.style.background="brown";
plus.style.border="brown";
minus.style.background="brown";
minus.style.border="brown";
break;
case 2:
yel.style.color = 'purple';
yel.innerHTML = 'Purple';
yellow0.style.color = 'purple';
a.style.background = 'purple';
a.style.border = 'purple';
a.style.borderRadius = '40%';
plus.style.background="purple";
plus.style.border="purple";
minus.style.background="purple";
minus.style.border="purple";
break;
case 3:
yel.style.color = 'salmon';
yel.innerHTML = 'Salmon';
yellow0.style.color = 'salmon';
a.style.background = 'salmon';
a.style.border = 'salmon';
a.style.borderRadius = '80%';
plus.style.background="salmon";
plus.style.border="salmon";
minus.style.background="salmon";
minus.style.border="salmon";
break;
case 4:
yel.style.color = 'orange';
yel.innerHTML = 'Orange';
yellow0.style.color = 'orange';
a.style.background = 'orange';
a.style.border = 'orange';
a.style.borderRadius = '10%';
plus.style.background="orange";
plus.style.border="orange";
minus.style.background="orange";
minus.style.border="orange";
count[0] = 0
break;
case -1:
yel.style.color = 'salmon';
yel.innerHTML = 'Salmon';
yellow0.style.color = 'salmon';
a.style.background = 'salmon';
a.style.border = 'salmon';
a.style.borderRadius = '80%';
plus.style.background="salmon";
plus.style.border="salmon";
minus.style.background="salmon";
minus.style.border="salmon";
break;
case -2:
yel.style.color = 'purple';
yel.innerHTML = 'Purple';
yellow0.style.color = 'purple';
a.style.background = 'purple';
a.style.border = 'purple';
a.style.borderRadius = '40%';
plus.style.background="purple";
plus.style.border="purple";
minus.style.background="purple";
minus.style.border="purple";
break;
case -3:
yel.style.color = 'brown';
yel.innerHTML = 'Brown';
yellow0.style.color = 'brown';
a.style.background = 'brown';
a.style.border = 'brown';
a.style.borderRadius = '20%';
plus.style.background="brown";
plus.style.border="brown";
minus.style.background="brown";
minus.style.border="brown";
break;
case -4:
yel.style.color = 'orange';
yel.innerHTML = 'Orange';
yellow0.style.color = 'orange';
a.style.background = 'orange';
a.style.border = 'orange';
a.style.borderRadius = '10%';
plus.style.background="orange";
plus.style.border="orange";
minus.style.background="orange";
minus.style.border="orange";
count[0] = 0
break;}}
var sub2 = function(sb2){
switch(count[1]){
case 0:
rad.style.color = 'brown';
rad.innerHTML = 'Brown';
red0.style.color = 'brown';
b.style.background = 'brown';
b.style.border = 'brown';
b.style.borderRadius = '20%';
plus2.style.background="brown";
plus2.style.border="brown";
minus2.style.background="brown";
minus2.style.border="brown";
break;
case 1:
rad.style.color = 'purple';
rad.innerHTML = 'Purple';
red0.style.color = 'purple';
b.style.background = 'purple';
b.style.border = 'purple';
b.style.borderRadius = '40%';
plus2.style.background="purple";
plus2.style.border="purple";
minus2.style.background="purple";
minus2.style.border="purple";
break;
case 2:
rad.style.color = 'salmon';
rad.innerHTML = 'Salmon';
red0.style.color = 'salmon';
b.style.background = 'salmon';
b.style.border = 'salmon';
b.style.borderRadius = '80%';
plus2.style.background="salmon";
plus2.style.border="salmon";
minus2.style.background="salmon";
minus2.style.border="salmon";
break;
case 3:
rad.style.color = 'orange';
rad.innerHTML = 'Orange';
red0.style.color = 'orange';
b.style.background = 'orange';
b.style.border = 'orange';
b.style.borderRadius = '10%';
plus2.style.background="orange";
plus2.style.border="orange";
minus2.style.background="orange";
minus2.style.border="orange";
break;
case 4:
rad.style.color = 'brown';
rad.innerHTML = 'Brown';
red0.style.color = 'brown';
b.style.background = 'brown';
b.style.border = 'brown';
b.style.borderRadius = '20%';
plus2.style.background="brown";
plus2.style.border="brown";
minus2.style.background="brown";
minus2.style.border="brown";
count[1] = 0
break;
case -1:
rad.style.color = 'orange';
rad.innerHTML = 'Orange';
red0.style.color = 'orange';
b.style.background = 'orange';
b.style.border = 'orange';
b.style.borderRadius = '10%';
plus2.style.background="orange";
plus2.style.border="orange";
minus2.style.background="orange";
minus2.style.border="orange";
break;
case -2:
rad.style.color = 'salmon';
rad.innerHTML = 'Salmon';
red0.style.color = 'salmon';
b.style.background = 'salmon';
b.style.border = 'salmon';
b.style.borderRadius = '80%';
plus2.style.background="salmon";
plus2.style.border="salmon";
minus2.style.background="salmon";
minus2.style.border="salmon";
break;
case -3:
rad.style.color = 'purple';
rad.innerHTML = 'Purple';
red0.style.color = 'purple';
b.style.background = 'purple';
b.style.border = 'purple';
b.style.borderRadius = '40%';
plus2.style.background="purple";
plus2.style.border="purple";
minus2.style.background="purple";
minus2.style.border="purple";
break;
case -4:
rad.style.color = 'brown';
rad.innerHTML = 'Brown';
red0.style.color = 'brown';
b.style.background = 'brown';
b.style.border = 'brown';
b.style.borderRadius = '20%';
plus2.style.background="brown";
plus2.style.border="brown";
minus2.style.background="brown";
minus2.style.border="brown";
count[1]= 0
break;}}
var sub3 = function(sb3){
switch(sb3){
case 0:
blu.style.color = 'purple';
blu.innerHTML = 'Purple';
blue0.style.color = 'purple';
c.style.background = 'purple';
c.style.border = 'purple';
plus3.style.background="purple";
plus3.style.border="purple";
minus3.style.background="purple";
minus3.style.border="purple";
break;
case 1:
blu.style.color = 'salmon';
blu.innerHTML = 'Salmon';
blue0.style.color = 'salmon';
c.style.background = 'salmon';
c.style.border = 'salmon';
plus3.style.background="salmon";
plus3.style.border="salmon";
minus3.style.background="salmon";
minus3.style.border="salmon";
break;
case 2:
blu.style.color = 'orange';
blu.innerHTML = 'Orange';
blue0.style.color = 'orange';
c.style.background = 'orange';
c.style.border = 'orange';
plus3.style.background="orange";
plus3.style.border="orange";
minus3.style.background="orange";
minus3.style.border="orange";
break;
case 3:
blu.style.color = 'brown';
blu.innerHTML = 'Brown';
blue0.style.color = 'brown';
c.style.background = 'brown';
c.style.border = 'brown';
plus3.style.background="brown";
plus3.style.border="brown";
minus3.style.background="brown";
minus3.style.border="brown";
break;
case 4:
blu.style.color = 'purple';
blu.innerHTML = 'Purple';
blue0.style.color = 'purple';
c.style.background = 'purple';
c.style.border = 'purple';
plus3.style.background="purple";
plus3.style.border="purple";
minus3.style.background="purple";
minus3.style.border="purple";
count[2] = 0
break;
case -1:
blu.style.color = 'brown';
blu.innerHTML = 'Brown';
blue0.style.color = 'brown';
c.style.background = 'brown';
c.style.border = 'brown';
plus3.style.background="brown";
plus3.style.border="brown";
minus3.style.background="brown";
minus3.style.border="brown";
break;
case -2:
blu.style.color = 'orange';
blu.innerHTML = 'Orange';
blue0.style.color = 'orange';
c.style.background = 'orange';
c.style.border = 'orange';
plus3.style.background="orange";
plus3.style.border="orange";
minus3.style.background="orange";
minus3.style.border="orange";
break;
case -3:
blu.style.color = 'salmon';
blu.innerHTML = 'Salmon';
blue0.style.color = 'salmon';
c.style.background = 'salmon';
c.style.border = 'salmon';
plus3.style.background="salmon";
plus3.style.border="salmon";
minus3.style.background="salmon";
minus3.style.border="salmon";
break;
case -4:
blu.style.color = 'purple';
blu.innerHTML = 'Purple';
blue0.style.color = 'purple';
c.style.background = 'purple';
c.style.border = 'purple';
plus3.style.background="purple";
plus3.style.border="purple";
minus3.style.background="purple";
minus3.style.border="purple";
count[2] = 0
break;}}
var sub4 = function(sb4){
switch(sb4){
case 0:
gre.style.color = 'salmon';
gre.innerHTML = 'Salmon';
green0.style.color = 'salmon';
d.style.background = 'salmon';
d.style.border = 'salmon';
plus4.style.background="salmon";
plus4.style.border="salmon";
minus4.style.background="salmon";
minus4.style.border="salmon";
break;
case 1:
gre.style.color = 'orange';
gre.innerHTML = 'Orange';
green0.style.color = 'orange';
d.style.background = 'orange';
d.style.border = 'orange';
plus4.style.background="orange";
plus4.style.border="orange";
minus4.style.background="orange";
minus4.style.border="orange";
break;
case 2:
gre.style.color = 'brown';
gre.innerHTML = 'Brown';
green0.style.color = 'brown';
d.style.background = 'brown';
d.style.border = 'brown';
plus4.style.background="brown";
plus4.style.border="brown";
minus4.style.background="brown";
minus4.style.border="brown";
break;
case 3:
gre.style.color = 'purple';
gre.innerHTML = 'Purple';
green0.style.color = 'purple';
d.style.background = 'purple';
d.style.border = 'purple';
plus4.style.background="purple";
plus4.style.border="purple";
minus4.style.background="purple";
minus4.style.border="purple";
break;
case 4:
gre.style.color = 'salmon';
gre.innerHTML = 'Salmon';
green0.style.color = 'salmon';
d.style.background = 'salmon';
d.style.border = 'salmon';
plus4.style.background="salmon";
plus4.style.border="salmon";
minus4.style.background="salmon";
minus4.style.border="salmon";
count[3] = 0
break;
case -1:
gre.style.color = 'purple';
gre.innerHTML = 'Purple';
green0.style.color = 'purple';
d.style.background = 'purple';
d.style.border = 'purple';
plus4.style.background="purple";
plus4.style.border="purple";
minus4.style.background="purple";
minus4.style.border="purple";
break;
case -2:
gre.style.color = 'brown';
gre.innerHTML = 'Brown';
green0.style.color = 'brown';
d.style.background = 'brown';
d.style.border = 'brown';
plus4.style.background="brown";
plus4.style.border="brown";
minus4.style.background="brown";
minus4.style.border="brown";
break;
case -3:
gre.style.color = 'orange';
gre.innerHTML = 'Orange';
green0.style.color = 'orange';
d.style.background = 'orange';
d.style.border = 'orange';
plus4.style.background="orange";
plus4.style.border="orange";
minus4.style.background="orange";
minus4.style.border="orange";
break;
case -4:
gre.style.color = 'salmon';
gre.innerHTML = 'Salmon';
green0.style.color = 'salmon';
d.style.background = 'salmon';
d.style.border = 'salmon';
plus4.style.background="salmon";
plus4.style.border="salmon";
minus4.style.background="salmon";
minus4.style.border="salmon";
count[3] = 0
break;}}          
function work(){
if(image != 1){
image = 0
document.body.style.background = 'black';
hps.style.color = 'rgb(219, 219, 219)';
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
}}    
plus.addEventListener('click',function(){
count[0]++
color[0]++
sum1(count[0]);
if(image === 1){
sub1(count[0])
}yellow0.innerHTML = color[0];})
plus2.addEventListener('click',function(){
count[1]++
color[1]++
sum2(count[1]);
if(image==1){
sub2(count[1]);}
red0.innerHTML = color[1];})  
plus3.addEventListener('click',function(){
count[2]++
color[2]++
sum3(count[2]);
if(image === 1){
sub3(count[2]);}
blue0.innerHTML = color[2];})      
plus4.addEventListener('click',function(){
count[3]++
color[3]++
sum4(count[3]);
if(image === 1){
sub4(count[3])
}
green0.innerHTML = color[3];})    
minus.addEventListener('click',function(){
count[0]--
color[0]--
sum1(count[0]);
if(image === 1){
sub1(count[0]);
}yellow0.innerHTML = color[0];})
minus2.addEventListener('click',function(){
count[1]--
color[1]--
sum2(count[1]);
if(image==1){
sub2(count[1]);
}
red0.innerHTML = color[1];})
minus3.addEventListener('click',function(){
count[2]--
color[2]--
sum3(count[2]);
if(image === 1){
sub3(count[2]);}
blue0.innerHTML = color[2];})
minus4.addEventListener('click',function(){
count[3]--
color[3]--
sum4(count[3]);
if(image === 1){
sub4(count[3])}
green0.innerHTML = color[3];})
resultid[0].addEventListener("click", function(){
product.innerHTML= Number(color[0]+color[1]+color[2]+color[3])});
resultid[1].addEventListener("click",function(){
product.innerHTML= Number(-color[0]-color[1]-color[2]-color[3])});
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
sub1(count[0]);
sub2(count[1]);
sub3(count[2]);
sub4(count[3]);
document.body.style.background = 'white';
hps.style.color = 'black';
imgs.setAttribute('src','https://i.pinimg.com/originals/c9/c1/cf/c9c1cf41920598394f613f1fc38a08ff.jpg');
for(let i in resultid){
resulted.style.color = "black";
resultid[i].style.backgroundColor = 'white';
resultid[i].style.color = 'black';
resultid[i].style.borderColor = 'black';}
}else{work();}});
work();