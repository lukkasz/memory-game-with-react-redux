import React, {Component} from 'react';

import memoryAPI from 'app/api/memoryAPI';
import Tile from 'app/components/Tile';

export default class Gameboard extends Component {
  
  constructor(props) {
    super(props);
    this.renderTils = this.renderTils.bind(this);
    this.handleClickTile = this.handleClickTile.bind(this);
    this.state = {
      cards: memoryAPI.setup() || [],
      selectedCard: undefined
    }
  }
  
  
  // componentWillMount() {
  //   this.setState({
  //     cards: memoryAPI.setup() || []
  //   })
  // }
  
  handleClickTile (id) {
    console.log('clicked!', id);
    var newCards = this.state.cards.map((card)=>{
      if (card.id === id) {
        card.src = card.front;
      }
      return card;
    });
    
    
    console.log("cards: ", newCards)
    // console.log("State cards:", this.state.cards)
    
    this.setState({
      cards: newCards
    })
    
  }
  
  renderTils() {
    const {cards} = this.state;
    if (cards.length === 0) {
      return <div>Loading...</div>
    } else {
      return cards.map((card)=>{
        return (
          <Tile tile={card} key={card.id} onClickTile={this.handleClickTile}/>
        )
      })
    }
  }
  
  render() {
    console.log("iamges:",memoryAPI.setup())
    return (
      <div className="container gameboard">
        <div className="row">
          {this.renderTils()}
        </div>
      </div>
      
    )
  }
  
}