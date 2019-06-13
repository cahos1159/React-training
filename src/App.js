import React, { Component } from 'react';
import './App.css';
import{Header} from './CustomComponent/header';
import { MOCK } from './Mock';
import { Recipe } from './model/Recipe'


class App extends Component {
  state = {
    recipes: MOCK,
  };

  new = (reci)=>()=>{
    reci.id = this.state.recipes.length+1;
    console.log(reci);
     this.setState({
      recipes : this.state.recipes.concat(reci)
     })
  };
  delete = (id)=>()=>{
    this.setState({
      recipes : this.state.recipes.filter(item => item.id !== id)
    })
  };
  render() {
    return (
      <body>
        <Header new={this.new}/>
        <div>{this.state.recipes.map(recipe => <Recipe recipe={recipe} delete={this.delete}  />)}</div>
      </body>

    );
  }
}
export default App;
