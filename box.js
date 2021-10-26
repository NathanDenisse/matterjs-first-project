class Box {
  constructor(x, y, width, height) {
    this.box = Bodies.rectangle(x, y, width, height);
    World.add(world, this.box);
    this.width = width;
    this.height = height;
    this.image = loadImage("bird" + Math.floor(random(0, 10)) + ".png");
  }

  show() {
    push();
    translate(this.box.position.x, this.box.position.y);
    rotate(this.box.angle * 40);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
