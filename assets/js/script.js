
const htmlElement = document.querySelector('html');

function loclSet(){
    const storedUsername = localStorage.getItem('mode');
    if (!storedUsername) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('mode', 'dark');
    }else{
        htmlElement.setAttribute('data-theme', storedUsername);
        localStorage.setItem('mode', storedUsername);
        changeImg();
    }
}


function changeImg(){
    const storedUsername = localStorage.getItem('mode');
    if (storedUsername) {
      var i = 1
      const simg = document.querySelectorAll('#statsImg');
      const gimg = document.querySelectorAll('#glpImg');
      if (storedUsername=='light') {
        simg.forEach((e)=>{
          if(i<4){
            e.innerHTML=`<img class="w-100" src="/assets/images/sgp${i}w.png" alt="">`
            i++;
          }
        })
        gimg.forEach((e)=>{
            if(i<4){
              e.innerHTML=`<img class="w-100" src="/assets/images/ggp${i}w.png" alt="">`
              i++;
            }
          })
      } else {

        simg.forEach((e)=>{
          if(i<4){
            e.innerHTML=`<img class="w-100" src="/assets/images/sgp${i}.png" alt="">`
            i++;
          }
        })
        gimg.forEach((e)=>{
            if(i<4){
              e.innerHTML=`<img class="w-100" src="/assets/images/ggp${i}.png" alt="">`
              i++;
            }
          })
        
      }
    }
  }

  


loclSet();


function setMode(){
    const storedUsername = localStorage.getItem('mode');
    console.log(storedUsername);
        if (storedUsername=='light') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('mode', 'dark');
            changeImg();
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('mode', 'light');
            changeImg();
        }
        
}


document.getElementById('dnswth').addEventListener('click',setMode)