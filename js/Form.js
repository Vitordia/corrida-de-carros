class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");//criando entrada
    this.playButton = createButton("Play");//
    this.titleImg = createImg("./assets/title.png", "título do jogo");//criando titulo
    this.greeting = createElement("h2");
  }

  setElementsPosition() {//posição para os elementos
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {// colocando estilo
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  } 

  hide() {//metodo que esconde as coisas
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
  this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide();
    
  }
    });
  }

  display() {
   this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
