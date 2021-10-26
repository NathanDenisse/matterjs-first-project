// créer des alias pour les modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var box1, box2;

var boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight*0.8);
  //Créer un moteur pour le monde
  engine = Engine.create();
  Engine.run(engine);
  //Créer le monde
  world = engine.world;
  //Créer des objets
  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(width / 2, height-25, width, 50, options);
  box1 = new Box(400, 100, 80, 80);
  box2 = new Box(450, 200, 100, 80);
  // mettre le corps dans le monde
  World.add(world, ground);
}

function draw() {
  background(200);
  rectMode(CENTER);
  box1.show();
  box2.show();
  rect(ground.position.x, ground.position.y, width, 50);

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}

function mouseDragged() {
  var taille = random(20, 120);
  var box = new Box(mouseX, mouseY, taille, taille);
  boxes.push(box);
}
