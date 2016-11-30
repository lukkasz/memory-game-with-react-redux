import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'app/actions/actions';

class Nav extends Component {
  
  constructor() {
    super();
    this.handleClickResetButon = this.handleClickResetButon.bind(this);
  }
  
  handleClickResetButon(e) {
    ///e.preventDefault();
    setTimeout(()=>{
      this.props.startGame();  
    }, 1000)
    
  }
  
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
  		  <div className="container">
  		  	<div className="navbar-header">
      			<p className="navbar-brand">Number of tries: <span className="label label-success">{this.props.numberOfTries}</span></p>
    			</div>
    			<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav navbar-right">
          		<li><a className="btn btn-default btn-small" onClick={this.handleClickResetButon}>Restart</a></li>
          	</ul>
        	</div>
        </div>
  		</nav>  
    )
  
  }
}

function mapStateToProps(state) {
  return {
    numberOfTries: state.memory.numberOfTries
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startGame: actions.startGame,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);