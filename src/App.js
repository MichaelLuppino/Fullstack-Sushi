import { Component } from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
import california from './images/california.png';
import dragon from './images/dragon.png';

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: 'California', prezzo: 1.99, immagine: california, quantità: 0 },
      { id: 1, nome: 'Dragon', prezzo: 3.49, immagine: dragon, quantità: 0 }
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
        <div className="row">
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
