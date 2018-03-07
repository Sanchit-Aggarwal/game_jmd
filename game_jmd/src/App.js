import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//require('./logo.png');
require('./style.css');

class App extends Component {
	constructor(props)
  	{
  		super(props);
  		this.state={random:Math.floor(Math.random()*10)+1,score:0,resetCount:3,rerollCount:5};
  	}
  	componentDidUpdate()
  	  	{		
  	  		var WinChk=1;
  	  		for(var i=1;i<=10;i++)
  	  			{
  	  				
  	  				if(document.getElementById(i).disabled==true)
  	  					WinChk++;
  	  				else
  	  					break;
  	  			}
  	  			if(WinChk==11)
  	  			{
  	  				alert('You Won,Congrats!!!! Total score is: '+this.state.score);
  	  				this.setState({random:Math.floor(Math.random()*10)+1,score:0,resetCount:3,rerollCount:5});
  	  				for(var i='1';i<=10;i++)
  	  		  		document.getElementById(i).disabled=false;
  	  			}

  	  		


  	  	if(this.state.resetCount==0 && this.state.rerollCount==0)
  	  			{   
  	  				var possiblityWinCheck=true;
  	  				if(document.getElementById(this.state.random).disabled==true)
	  	  				{
	  	  					//this.setState({random:this.state.random,score:0,resetCount:3,rerollCount:3});
	  	  					console.log(this.state.random);
  	  				alert('Game Over');
  	  				alert('Your total score was='+this.state.score+' Better Luck Next Time!!');
  	  				// pointer.setState({random:pointer.state.random,score:pointer.state.score,resetCount:pointer.state.resetCount-1,rerollCount:this.state.rerollCount})

  	  					for(var i='1';i<=10;i++)
  	  		  	document.getElementById(i).disabled=false;
  	  		 this.setState({random:Math.floor(Math.random()*10)+1,score:0,resetCount:3,rerollCount:5}); }
  	  			}
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
  	  							var newVal=Math.floor(Math.random()*10)+1;
  	  			while(newVal==pointer.state.random)
  	  				newVal=Math.floor(Math.random()*10)+1;
  	  							pointer.setState({random:newVal,score:pointer.state.score+10,resetCount:pointer.state.resetCount});
  	  						}
  	  					}
  	  	function reset()
  	  	{
  	  		
  	  		if(pointer.state.resetCount>0)
  	  		{
  	  			for(var i='1';i<=10;i++)
  	  		  	document.getElementById(i).disabled=false;
  	  		    pointer.setState({random:pointer.state.random,score:pointer.state.score-1,resetCount:pointer.state.resetCount-1,rerollCount:pointer.state.rerollCount}); 
  	  		 	console.log(pointer.state);  			
  	  		}
  	  		else alert('No more resets left!');
  	  		

  	  		
  	  	}		
  	  	function reRoll(){
  	  		if(pointer.state.rerollCount>0)
  	  		{
  	  			var newVal=Math.floor(Math.random()*10)+1;
  	  			while(newVal==pointer.state.random)
  	  				newVal=Math.floor(Math.random()*10)+1;
  	  			pointer.setState({random:newVal,score:pointer.state.score-3,resetCount:pointer.state.resetCount,rerollCount:pointer.state.rerollCount-1}); 
  	  		 	  			
  	  		}
  	  		else
  	  			{
  	  				alert('No more Reloads left :(');
  	  				// alert('Your total score was='+pointer.state.score+' Better Luck Next Time!!');
  	  				// pointer.setState({random:pointer.state.random,score:pointer.state.score,resetCount:pointer.state.resetCount-1,rerollCount:this.state.rerollCount})

  	  			// 		for(var i='1';i<=10;i++)
  	  		 //  	document.getElementById(i).disabled=false;
  	  		 // pointer.setState({random:Math.floor(Math.random()*10)+1,score:0,resetCount:3,rerollCount:this.state.rerollCount}); 
  	  			}
  	  	}
  	  	// function gameOverTest()
  	  	// {
  	  	// 	if(pointer.state.resetCount==0 && pointer.state.rerollCount==0)
  	  	// 		{
  	  	// 			var possiblityWinCheck=true;
  	  	// 			if(document.getElementById(pointer.state.random).disabled==true)
	  	  // 				{
  	  	// 			alert('Game Over');
  	  	// 			alert('Your total score was='+pointer.state.score+' Better Luck Next Time!!');
  	  	// 			// pointer.setState({random:pointer.state.random,score:pointer.state.score,resetCount:pointer.state.resetCount-1,rerollCount:this.state.rerollCount})

  	  	// 				for(var i='1';i<=10;i++)
  	  	// 	  	document.getElementById(i).disabled=false;
  	  	// 	 pointer.setState({random:Math.floor(Math.random()*10)+1,score:0,resetCount:3,rerollCount:3}); }
  	  	// 		}
  	  	// }
  	  // 	componentDidUpdate()
  	  // 	{		
  	  // 	gameOverTest();
  	  // }
  	                   var divStyle = {
  											
  											};
  	  	return (

				    <div><center><img src='logo.png' alt="not found" /></center>
					<br />
					<div><h1 style={{color: "yellow",fontFamily:'Comic Sans MS'}}><center>Press&nbsp;&nbsp;&nbsp;&nbsp;{this.state.random}</center></h1></div><br />
					<center><button id='1'  className='btn btn-success btn-lg' onClick={() => chk(1)}>1</button>&nbsp;
					<button className='test' id='2'  className='btn btn-success btn-lg' onClick={() => chk(2)}>2</button>&nbsp;
					<button id='3'  className='btn btn-success btn-lg' onClick={() => chk(3)}>3</button>&nbsp;
					<button id='4'  className='btn btn-success btn-lg' onClick={() => chk(4)}>4</button>&nbsp;
					<button id='5'  className='btn btn-success btn-lg' onClick={() => chk(5)}>5</button>&nbsp;
					<button id='6'  className='btn btn-success btn-lg' onClick={() => chk(6)}>6</button>&nbsp;
					<button id='7'  className='btn btn-success btn-lg' onClick={() => chk(7)}>7</button>&nbsp;
					<button id='8'  className='btn btn-success btn-lg' onClick={() => chk(8)}>8</button>&nbsp;
					<button id='9'  className='btn btn-success btn-lg' onClick={() => chk(9)}>9</button>&nbsp;
					<button id='10' className='btn btn-success btn-lg'  onClick={() => chk(10)}>10</button>&nbsp;<br/><br/>
					<button id='reset' className='btn btn-info bt-lg'  onClick={reset}>Reset All Buttons(Times Left={this.state.resetCount})</button>&nbsp;<br /><br/>
					<button id='reset' className='btn btn-primary bt-lg'  onClick={reRoll}>ReRoll the header(Times Left={this.state.rerollCount})</button><br />
					</center><br /><center><h1 style={{color:'seagreen',fontFamily:'Comic Sans MS'}}>Total Score={this.state.score}</h1></center>

				</div>
  	
    );

  }
}

export default App;
