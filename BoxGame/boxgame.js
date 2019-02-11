function Game (gm) {
  var that=this;
  this.gme=gm;
  this.round=0;
  this.ele = document.createElement(tagName:"div");
  this.ele.innerHTML = "Round "+this.round;
  this.ele.addEventListener(type:"click", listener:function() {
    that.addRound();
  })
}

Game.prototype.checkWin = function{
  if(this.player.score==2){
    document.body.innerHTML="Congrats you win!";
  }else if(this.player.score==[0,1]){
  }
};

Game.prototype.round = function{
  var that=this;
  document.body.innerHTML="";
  this.round=[];
  this.round.push(new Round(1), new Round(2), new Round(3));

  for(var i=0; i<2; i++){
    this.round[i].ele.addEventListener("click", function(){
      that.checkWin()
    })
  }
};

var newGame = new Game();

function PlayerBox () {
  
};

function AnswerBox () {

};
