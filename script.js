// Starting up the game...
// pressing the 'Enter' key to start the game...
window.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
// if the 'Enter' is pressed...
 document.querySelector('h1').classList.add('hideH1')
       const btn = document.createElement('button');
       btn.innerHTML = 'Try Clicking Me';
       document.body.appendChild(btn);
    btn.addEventListener('mouseover', function(){
        const height = Math.floor(Math.random() * window.innerHeight)
        const width = Math.floor(Math.random() * window.innerWidth)
        btn.style.left = `${height}px`;
        btn.style.top = `${width}px`;
        document.body.classList.add('addition');
        })
        // When clicked or caught...
        btn.addEventListener('click', function(){
            btn.innerText = 'oop!! you got me'
            document.body.classList.add('special').remove('addtion');
        })
        // Game Over...
        setTimeout(function(){
        
            window.close()
        }, 60000)
    }
    
  

    })
    
