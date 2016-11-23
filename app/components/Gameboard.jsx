import React, {Component} from 'react';
import _ from 'lodash';

import memoryAPI from 'app/api/memoryAPI';
import Tile from 'app/components/Tile';

export default class Gameboard extends Component {
  
    selectedTiles = []
  //newTilesArr = []
  
  constructor(props) {
    super(props);
    this.renderTils = this.renderTils.bind(this);
    this.handleClickTile = this.handleClickTile.bind(this);
    this.state = {
      cards: memoryAPI.setup() || [],
      selectedCards: []
    }
  }
  
  
  componentDidUpdate() {
    if(this.state.selectedCards.length === 2) {
      setTimeout(()=>{
        console.log("Component didi update:",this.state);
      }, 2000);
    }
  }
  
  handleClickTile (id) {
    console.log('clicked!', id);
    
    //this.newTilesArr = this.newTilesArr.length ? this.newTilesArr : this.state.cards.slice();
    // loopthrou array and find ID
   
    var newTilesArr = this.state.cards.map((card)=>{
      if (card.id === id) {
        card.src = card.img;
        card.selected = true;
      } 
      return card;  
    });
    
    var selectedCard = this.state.cards.filter((card) => {
      return card.id === id;
    })
    

    this.setState({
      cards: newTilesArr,
      selectedCards: [...this.state.selectedCards, ...selectedCard]
    })
    
    console.log("Selected: " , this.state.selectedCards);
    
  }
  
  renderTils() {
    const {cards} = this.state;
    if (cards.length === 0) {
      return <div>Loading...</div>
    } else {
      return cards.map((card)=>{
        return (
          <Tile tile={card} key={card.id} onClickTile={this.state.selectedCards.length < 2 ? this.handleClickTile : null }/>
        )
      })
    }
  }
  
  render() {
    console.log("duljina", this.state.selectedCards)
    return (
      <div className="container gameboard">
        <div className="row">
          {this.renderTils()}
        </div>
      </div>
      
    )
  }
  
}