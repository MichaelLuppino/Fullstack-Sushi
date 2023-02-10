import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
        <div className="col">
            <div clasNames="card" style={{ width: '18rem', textAlign: 'center' }}>
              <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">aggiungi<span className="badge badge-light">{this.props.card.quantità}</span></button>
  <img src={this.props.card.immagine} className="card-img-top" alt="Sushi"/>
  <div className="card-body">
    <h5 className="card-title">{this.props.card.nome} roll</h5>
    <p className="card-text">Euro {this.props.card.prezzo}</p>
    <button onClick={() =>this.props.onDelete(this.props.card.id)} className="btn btn-primary">Elimina</button>
  </div>
</div>
        </div>
    )
    }
}

export default Card;