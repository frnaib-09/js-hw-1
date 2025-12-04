let onButton = document.querySelector('.onBtn')
      let bulb = document.querySelector ('.bulb')
    
      function turnOn (){
        bulb.src = "./images/bulb on.png"
      }
      
      onButton.addEventListener('click', turnOn)

let offButton = document.querySelector('.offBtn')
    
    function turnOff (){
      bulb.src = "./images/bulb off.png"
    }
    
    offButton.addEventListener('click', turnOff)