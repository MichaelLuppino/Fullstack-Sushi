import { Component } from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
import california from './images/california.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import dragon from './images/dragon.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: 'California', prezzo: 1.99, immagine: california, quantità: 0 },
      { id: 1, nome: 'Dynamite', prezzo: 1.99, immagine: dynamite, quantità: 0 },
      { id: 2, nome: 'Philadelphia', prezzo: 1.99, immagine: philadelphia, quantità: 0 },
      { id: 4, nome: 'Dragon', prezzo: 3.49, immagine: dragon, quantità: 0 },
      { id: 3, nome: 'Rainbow', prezzo: 1.99, immagine: rainbow, quantità: 0 },
      { id: 5, nome: 'Shrimp', prezzo: 3.49, immagine: shrimp, quantità: 0 }
     
    ]
  }

  handelDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({cards})
  }
  handelIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({cards});
  }


  render () {
  return (
    <>
      <Navbar />
      <div className="container">
    <h1>Cosa desideri ordinare?</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 ">
          {this.state.cards.map(card => (
            <Card 
              key={card.id}
              onDelete={this.handelDelete}
              onIncrement={this.handelIncrement}
              card={card}
            />
         ))}

        </div>
      </div>
    </>
  );
}
}
export default App;
