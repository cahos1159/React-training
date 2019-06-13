import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap';
import './modal.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export class MaModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            recipe: {
                id: 1100,
                name: '',
                picture:
                    '',
                description:
                    '',
            }
        };
    }

    togglePictureChange = event => {
        this.setState({
            recipe: { ...this.state.recipe, picture: event.target.value }
        })
    }

    toggleNameChange = event => {
        this.setState({
            recipe: { ...this.state.recipe, name: event.target.value },
        })
    }

    toggleDescriptionChange = event => {
        this.setState({
            recipe: { ...this.state.recipe, description: event.target.value }
        })
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        let { recipe } = this.state;
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Add Recipe <FontAwesomeIcon icon={faPlusCircle}/>
          </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Cocktail </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Modal">
                        <label>Name :</label>
                        <input value={recipe.name} onChange={this.toggleNameChange} />
                        <label>Description :</label>
                        <textarea value={recipe.description} onChange={this.toggleDescriptionChange} />
                        <label>Picture :</label>
                        <input value={recipe.picture} onChange={this.togglePictureChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
              </Button>
                        <Button variant="primary" onClick={this.props.new(recipe)}>
                            Save Changes
              </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
