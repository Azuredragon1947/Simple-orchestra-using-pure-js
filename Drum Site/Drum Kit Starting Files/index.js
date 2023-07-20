let l = document.querySelectorAll(".drum").length;
for(let i = 0; i < l; i++){
      document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            let sn = this.innerHTML;
            makesound(sn);
            addeffect(sn);
      })
}

document.addEventListener("keypress", function (e){
      makesound(e.key);
      addeffect(e.key);
})

// document.addEventListener("keyup", function(e){
//       removeeffect(e.key);
// })

function makesound(key){

      switch(key)
            {
                  case "w": 
                        let tom1 = new Audio('sounds/tom-1.mp3');
                        tom1.play(); 
                        break; 
                  case "a": 
                        let tom2 = new Audio('sounds/tom-2.mp3');
                        tom2.play(); 
                        break; 
                  case "s": 
                        let tom3 = new Audio('sounds/tom-3.mp3');
                        tom3.play(); 
                        break; 
                  case "d": 
                        let tom4 = new Audio('sounds/tom-4.mp3');
                        tom4.play(); 
                        break; 
                  case "j": 
                        let crash = new Audio('sounds/crash.mp3');
                        crash.play(); 
                        break; 
                  case "k": 
                        let kickbass = new Audio('sounds/kick-bass.mp3');
                        kickbass.play(); 
                        break; 
                  case "l": 
                        let snare = new Audio('sounds/snare.mp3');
                        snare.play(); 
                        break; 
            }
}

function addeffect(key){
      let btn = document.querySelector("." + key);
      btn.classList.add("pressed");
      setTimeout(function(){
            btn.classList.remove("pressed");
      }, 100);
}

// function removeeffect(key){
//       let btn = document.querySelector("." + key);
//       btn.classList.remove("pressed");
// }

// w.addEventListener("click", function (){
//       // let a1 = new Audio('./sounds/tom-1.mp3');
//       // a1.play();
//       
// })

