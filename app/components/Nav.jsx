import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container">
		  	<div className="navbar-header">
    			<p className="navbar-brand">React Memory</p>
  			</div>
  			<div className="collapse navbar-collapse">
    			<ul className="nav navbar-nav navbar-right">
        		<li><a href="#">Restart</a></li>
        	</ul>
      	</div>
      </div>
		</nav>  
    
  )
}