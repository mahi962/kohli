const btn=document.querySelector("button");
const bdy=document.querySelector("body");

const color=['black','blue','violet','orange','red','pink','green'];

bdy.style.backgroundColor='pink';

btn.addEventListener('click',function(){

    const index=parseInt(Math.random()*color.length);
    bdy.style.backgroundColor=color[index];
})