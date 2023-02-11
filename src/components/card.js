import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
        <div style={{ textAlign:'center', width:'400px',height:'400px', padding:'0 50px', flex:' 3 auto'}}>
            <div clasNames="card" style={{ width: '18rem', textAlign: 'center' }}>
              <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary" style={{margin:'20px 0'}}>Aggiungi<span style={{background:'#fff', color:'black', padding:' 0 5px', margin:' 5px', borderRadius:'5px'}}>{this.props.card.quantità}</span></button>
              <img src={this.props.card.immagine} className="card-img-top" alt="Sushi" style={{width:'100%'}}/>
              <div className="card-body">
    <h5 className="card-title">{this.props.card.nome} roll</h5>
    <p className="card-text">Euro {this.props.card.prezzo}</p>
    <button onClick={() =>this.props.onDelete(this.props.card.id)} style={{background: 'red', border: 'none', borderRadius:'4px', color:'#fff', padding:' 5px 15px'}}>Elimina</button>
  </div>
</div>
        </div>
    )
    }
}

export default Card;