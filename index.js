class Hero{
    constructor(name, strength, weakness, power){
      this.name = name;
      this.strength = strength;
      this.weakness = weakness;
      this.power = power;
    }
  }
  const Storm = new Hero("Storm", 100, 32, 80);
  const BlackPanther = new Hero("Black Panther", 49, 65, 55);
  const batman = new Hero("Batman", 75, 50, 70);
  function fight(player1, player2){
    if(player1.strength > player2.strength && player1.power > player2.power){
      console.log(`${player1.name} is the winer`);
    }else if(player2.strength > player1.strength && player2.power > player1.power){
      console.log(`${player2.name} is the winer`);
    }else{
      console.log("!!ERROR!!");
    }
  }
  fight(storm, Black Panther);
