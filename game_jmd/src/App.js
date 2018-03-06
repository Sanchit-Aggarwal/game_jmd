import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props)
  	{
  		super(props);
  		this.state={random:Math.floor(Math.random()*10)+1,score:0,resetCount:5};
  	}
  render() {
  		var pointer=this;
  	  	function chk(c){
  	  							if(c!=pointer.state.random)
  	  							{
  	  								alert('Error');
  	  							}
  	  							else
  	  							{
  	  							document.getElementById(c).disabled=true;
  	  							pointer.setState({random:Math.floor(Math.random()*10)+1,score:pointer.state.score+1,resetCount:pointer.state.resetCount});
  	  						}
  	  					}
  	  	function reset()
  	  	{
  	  		if(pointer.state.resetCount>0)
  	  		{
  	  			for(var i='1';i<=10;i++)
  	  		  	document.getElementById(i).disabled=false;
  	  		    pointer.setState({random:pointer.state.random,score:pointer.state.score,resetCount:pointer.state.resetCount-1}); 
  	  		 	  			
  	  		}
  	  		else
  	  			{
  	  				alert('Game Over');
  	  				alert('Your total score was='+pointer.state.score+' Better Luck Next Time!!');
  	  				pointer.setState({random:pointer.state.random,score:pointer.state.score,resetCount:pointer.state.resetCount-1})

  	  					for(var i='1';i<=10;i++)
  	  		  	document.getElementById(i).disabled=false;
  	  		 pointer.setState({random:Math.floor(Math.random()*10)+1,score:0,resetCount:5}); 
  	  			}

  	  		
  	  	}				
  	    return (

				<div>
					<div>{this.state.random}</div>
					<button id='1' onClick={() => chk(1)}>1</button><br />
					<button id='2' onClick={() => chk(2)}>2</button><br />
					<button id='3' onClick={() => chk(3)}>3</button><br />
					<button id='4' onClick={() => chk(4)}>4</button><br />
					<button id='5' onClick={() => chk(5)}>5</button><br />
					<button id='6' onClick={() => chk(6)}>6</button><br />
					<button id='7' onClick={() => chk(7)}>7</button><br />
					<button id='8' onClick={() => chk(8)}>8</button><br />
					<button id='9' onClick={() => chk(9)}>9</button><br />
					<button id='10' onClick={() => chk(10)}>10</button><br />
					<button id='reset' onClick={reset}>Reset All Buttons(Times Left={this.state.resetCount})</button><br />
					Total Score={this.state.score}

				</div>
  	
    );
  }
}

export default App;
