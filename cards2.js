//Combine Suits & Vakues
class Deck{
  constructor(){
    this.deck = [];
    this.reset();    
  }
  reset(){
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
}
const deck1 = new Deck();
document.getElementById("demo").innerHTML =deck1.deck;
//Shuffle
function shuffle(){    
       class Shuf extends Deck{
        constructor(){
            super();
        this.shuffle();
        }       
           shuffle(){
    const { deck } = this;
    let m = deck.length, i;
    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this;
  }  
  }    
const deck2 = new Shuf();    
document.getElementById("demo2").innerHTML =deck2.deck;}