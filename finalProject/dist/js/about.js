let img1=document.getElementById('image1').src;
let img2=document.getElementById('image2').src;
let img3=document.getElementById('image3').src;
let img4=document.getElementById('glitch_1').src;
//let img5=document.getElementById('glitch_2').src;
//let img6=document.getElementById('glitch_3').src;
let img7=document.getElementById('glitch').src;
let img8=document.getElementById('glitch1').src;
let img9=document.getElementById('glitch2').src;
let img10=document.getElementById('glitch3').src;
let img11=document.getElementById('glitch4').src;
let img12=document.getElementById('glitch5').src;

//image glitch effect
const one=[img1,img4,img1,img1,img1,img1,img7,img1,img1,img1,img1,img8,img1,img1,img1,img1,img9,img1,img1,img1,img1,img10,img1,img1,img1,img1,img11,img1,img1,img1,img1,img12,img1,img1];
//const two=[img2,img2,img5,img2];
//const three=[img3,img6,img3,img3];
function changeImage(){
    setInterval(()=>{
    let random=Math.floor(Math.random()*34);
    //console.log(random);
    document.getElementById('image1').src=one[random];
    //document.getElementById('image2').src=two[random];
    //document.getElementById('image3').src=three[random];
    //console.log(typeof img1);
},100);}

//parallax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);