const No=document.getElementById('no')
function run_button(){
    x=Math.floor(Math.random()*100);//по вертекали
    y=Math.floor(Math.random()*300);//по горизонтали
    No.style.left = `${-x}px`;
    No.style.top = `${-y}px`;  
}
No.addEventListener('mousemove',run_button);