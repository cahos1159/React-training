import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import './recipe.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSkull , faWrench } from '@fortawesome/free-solid-svg-icons';



export class Recipe extends Component {

    state = {
        editMode: false,
        recipe : this.props.recipe,
    }

    toggleEditode = () => {
        this.setState({editMode: !this.state.editMode});
      }
    
      togglePictureChange = event =>{
        this.setState({
          recipe: {...this.state.recipe,picture : event.target.value}
        })
      }
    
      toggleNameChange = event =>{
        this.setState({
          recipe: {...this.state.recipe,name : event.target.value}
        })
      }
    
      toggleDescriptionChange = event =>{
        this.setState({
          recipe: {...this.state.recipe,description : event.target.value}
        })
      }


  render() {
    let {recipe}=this.state;
    return (
     <Card className="Card">
       <CardImg top width="100%"  src={recipe.picture} alt="Card image cap"></CardImg>
       {this.state.editMode && <input value={recipe.picture}  onChange={this.togglePictureChange}/>}
         <CardBody className="CardBody">
             {this.state.editMode ?
              <input value={recipe.name} onChange={this.toggleNameChange}/> :
              <CardTitle>{recipe.name}</CardTitle>
            }
            {this.state.editMode ?
              <textarea value={recipe.description}  onChange={this.toggleDescriptionChange}/> :
              <CardText className="CardText">{recipe.description}</CardText>
            }
            
         </CardBody>
         <button id="but" class="btn btn-primary my-2" onClick={this.props.delete(recipe.id)}><FontAwesomeIcon icon={faSkull}/></button>
         <button id="but" class="btn btn-primary my-2" onClick={this.toggleEditode}><FontAwesomeIcon icon={faWrench}/></button>
     </Card>
    );
  }
}