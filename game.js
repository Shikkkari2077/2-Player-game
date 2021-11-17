let plr1 = document.getElementById("player1");
let plr2 = document.getElementById("player2");
let board = document.getElementById("board");
let body = document.getElementById("body");


// let bullet = document.getElementById("bullet");
// let Abullet = document.getElementById("Abullet");

// var alr = plr1.getBoundingClientRect();
// console.log('Ship',alr);
// var blt = bullet.getBoundingClientRect();
// console.log('ship bullet',blt);
// var alr2 = plr2.getBoundingClientRect();
// console.log('Alien',alr2);
// var Ablt = Abullet.getBoundingClientRect();
// console.log('Alien bullet',Ablt);

window.addEventListener("keydown", (e) => {
  var top1 = parseInt(window.getComputedStyle(plr1).getPropertyValue("top"));
  var top2 = parseInt(window.getComputedStyle(plr2).getPropertyValue("top"));

  if (e.keyCode == 87 && top1 > 0) {
    plr1.style.top = top1 - 10 + "px";
  } else if (e.keyCode == 83 && top1 < 460) {
    plr1.style.top = top1 + 10 + "px";
  }

  if (e.keyCode == 38 && top2 > 0) {
    plr2.style.top = top2 - 10 + "px";
  } else if (e.keyCode == 40 && top2 < 460) {
    plr2.style.top = top2 + 10 + "px";
  }

  if (e.keyCode == 32) {
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var alien = document.getElementById("player2");
      
      if (alien != undefined) {
        var alienbound = alien.getBoundingClientRect();
        var bulletbound = bullet.getBoundingClientRect();

        if (
          bulletbound.left == 1014.5 &&
          bulletbound.top - 10 == alienbound.top
        ) {
          bullet.style.display = "none";
          console.log("Killed Alien");

         
            document.getElementById("p2Health").innerHTML =
                parseInt(document.getElementById("p2Health").innerHTML) - Math.floor(Math.random() * 5);


                if(parseInt(document.getElementById("p2Health").innerHTML)<0){
                  
                  document.getElementById("p2Health").innerHTML= parseInt(document.getElementById("p2Health").innerHTML)*0
                 

                    var result = document.createElement("div");
                    result.classList.add("results");
                    body.appendChild(result);

                    result.innerHTML = `
                    <h3>Player 1 Win</h3>
                    <h3>Player 2 Lose</h3>
                    `
                }
        }
      }

      var bulletleft = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("left")
      );

      if (bulletleft >= 800) {
        clearInterval(movebullet);
      }

      bullet.style.top = top1 + 10 + "px";
      bullet.style.left = bulletleft + 1 + "px";
    });
  }

  if (e.keyCode == 37) {
    var Abullet = document.createElement("div");
    Abullet.classList.add("ABullets");
    board.appendChild(Abullet);

    var Amovebullet = setInterval(() => {
      var ship = document.getElementById("player1");

      if (ship != undefined) {
        var shipbound = ship.getBoundingClientRect();
        var Abulletbound = Abullet.getBoundingClientRect();
        
        if (
          Abulletbound.right == 334.5 &&
          Abulletbound.top - 10 == shipbound.top
        ) {
         
          Abullet.style.display = "none";
          console.log("Killed Ship");
  
          document.getElementById("p1Health").innerHTML =
                parseInt(document.getElementById("p1Health").innerHTML) - Math.floor(Math.random() * 5);

                if(parseInt(document.getElementById("p1Health").innerHTML)<0){
                  document.getElementById("p1Health").innerHTML= parseInt(document.getElementById("p1Health").innerHTML)*0
                  
                  var result = document.createElement("div");
                    result.classList.add("results");
                    body.appendChild(result);

                    result.innerHTML = `
                    <h3>Player 2 Win</h3>
                    <h3>Player 1 Lose</h3>
                    `
                }

          
        }
      }

      var Abulletright = parseInt(
        window.getComputedStyle(Abullet).getPropertyValue("right")
      );

      if (Abulletright >= 800) {
        clearInterval(Amovebullet);
      }

      Abullet.style.top = top2 + 10 + "px";
      Abullet.style.right = Abulletright + 1 + "px";
    });
  }
});
