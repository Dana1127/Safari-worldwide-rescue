let jugador = new Rescatador (50,50);
let imgCora;
let imgBat;

function preload() {
  imgCora = loadImage("/assets/bateria.png");
  imgBat = loadImage("/assets/corazon.png");
}

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(220);

  //corazón
  image(imgCora, 30,30);
  image(imgBat, 70,30);


  jugador.mostrar();
  jugador.mover();


}
