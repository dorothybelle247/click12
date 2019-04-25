
// import React from "react";

// import Home from "./components/Home";
// import Food from "./components/Food";
// import Places from "./components/Places";
// import Random from "./components/Random";
// import './index.css';
// import Card './components/Card';

// function App() {
//   return (
//     <div>

// <h2>Cant choose the same card twice</h2>
// <card>
//   id={1}
//   width={100}
//   height={100}
//   back={'https://images.unsplash.com/photo-1554884133-995b1e4c1645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'}
//   front={'https://images.unsplash.com/photo-1554878015-e51ff096a767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
//   flipped={flipped.includes(1)}
//   handleClick={() => handleClick(1)}
// </card>


// <Card />
//       <Home />
//       <Food />
//       <Places />
//       <Random />
      
     
//     </div>
//   );
// }

// export default App;

import React from "react";
import {Component} from "react";
import RandomCard from "./components/RandomCard";
import Wrapper from "./components/RandomCard/Wrapper";
import random from "./random.json";
import Home from './components/Home';
import "./App.css";


class App extends Component {
  constructor(props){
    // this will create the original component called Component
    super(props);
    // only for definition inside the constructor
    this.state = { 
      random: random
    };
  }
  // state = {
  //   stuff: 1
  // }
  changeStuff(randomId){
    //this.setState({stuff: snapple});
    // console.log(this.state);
     let temp = this.state.random;
    temp.splice(randomId, 1);
    this.setState({
      friends: temp
    });
    console.log(randomId);
  }
  handleClickArb(){
    //"this" our context is always going to be App if you use bind
    this.changeStuff(27);
  }
  render(){
    return (
      <div>

<div className='homepg'>
             <h1>How well do you remember</h1>
             <h1>Choose your categories</h1>
            
            <div class="container">
  <div class="row">
    <div className="col align-self-start">
    <div className="button_cont" align="center"><a class="example_a" href="add-website-here" target="_blank" rel="nofollow noopener">color of the worldFood</a></div>
    </div>
    
    
  </div>
</div>
            </div>





      <Wrapper>
        <h1 className="title">memorie game</h1>
        { 
          this.state.random.map( (random, index) => {
            return (
              <RandomCard
              key={index}
                // name={random.name}
                image={random.image}
                // occupation={random.occupation}
                // location={random.location}
                appStuff={this.state.random}
                appChanger={() => {this.changeStuff(index);}}
              />
            );
          })
        }
         {(()=> this.state.components === "Home" ? <Home /> : '')()}
       
      </Wrapper>
      </div>
    );
    
  }
}

export default App;

// state for clicking
// score 
// last 
// state 
// function 
//map

