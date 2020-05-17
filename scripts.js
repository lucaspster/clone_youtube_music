$(document).ready(function () {
  var back_control = $("#back_control");
  var play_control = $("#play_control");
  var forward_control = $("#forward_control");

  var footer = $(".footer");
  var middle = $(".middle");
  var middle_back = $(".middle_back");

  footer.click(() => {
    middle_back.toggle(150);
    middle.slideToggle(150).css({ display: "flex" });
    // middle.css({  });
    footer.css({ position: "absolute" });
  });
});

for (let i = 0; i < 50; i++) {
  var img = i % 2 == 0 ? 1 : 2;
  var middleplay = document.querySelector(".middle_playlist");
  middleplay.innerHTML += `
      <!-- Playlist Item -->
  <div class="item"  onclick="setMusic(this.children)">
 
    <div class="img"><img src="./assets/img/album${img}.jpg" style="width:100px" alt=""></div>
    <div class="texto">
      <p>Alou ${i}</p>
      <div class="subtexto">
        alaala
      </div>
    </div>
    <div class="minutos">
      <div class="segundos">
        3:25
      </div>
    </div>
  </div>

  <!-- FIM Playlist Item -->

      `;
}

// Script to change music from playlist
var PlayingText = document.getElementById("titulo_is_playing");
var PlayingImage = document.getElementById("imagem_is_playing");
function setMusic(e) {
  PlayingText.innerHTML = e[1].children[0].innerHTML;
  PlayingImage.src = e[0].children[0].src;

  //aqui eu deveria fazer uma função pra pegar o Id da musica clicada, buscar a musica no BD
  //  e setar ela como ativa  em vez de mudar dessa forma.
  // funciona mas nao é a melhor maneira
}
// ####################3
