
const btn = document.querySelector('button');
btn.addEventListener('mouseover', function(){
const height = Math.floor(Math.random() * window.innerHeight)
const width = Math.floor(Math.random() * window.innerHeight)
btn.style.left = `${height}px`;
btn.style.top = `${width}px`;
document.body.classList.add('addition');
})

btn.addEventListener('click', function(){
    btn.innerText = 'oop!! you got me'
    document.body.classList.add('special');
})

setTimeout(function(){

    window.close()
}, 60000)