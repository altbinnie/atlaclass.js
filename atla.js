class Hero {
  constructor(nome, idade, tipo= "heroi") {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;

  }
  atacar(){
      let ataque;
    if(this.tipo == "mago"){
      ataque = "magia";
    }else if(this.tipo == "monje"){
      ataque = "mae gueri";
    }else if(this.tipo == "ninja"){
      ataque = "estrela ninja";
    }else if(this.tipo=="guerreiro"){
      ataque = "espada";
    }else {
      ataque = "soco";
    }
    console.log(this.tipo +" "+this.nome + " atacou usando " + ataque + " contra o inimigo.");   

  }
};

let heroina = new Hero("Suki", 17 , "ninja");
let avatar = new Hero("Aang", 13, "monje");
let bruxa = new Hero("Katara", 15, "mago");
let heroi = new Hero("Soka", 16, "guerreiro");
let top = new Hero("Toph", 11, "ludador");
let fogo = new Hero("Zuko", 19,);
heroina.atacar();
avatar.atacar();
bruxa.atacar();
heroi.atacar();
top.atacar();
fogo.atacar();
