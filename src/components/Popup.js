import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import {connect} from 'react-redux'
import {createStore} from 'redux';
import combineReducers from '../reducers'
import {Provider} from 'react-redux'


class Popup extends Component {

  closeModal() {
    this.setState({
        visible : false
    });
  }

  componentDidMount() {
    return (
        <section>
            <h1>React-Modal Examples</h1>
            <input type="button" value="Open" onClick={() => this.openModal()} />
            <Modal visible={this.state.visible} width="400" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                    <h1>Hello!</h1>
                    <p>Popup Contents</p>
                    <a href="./" onClick={() => this.closeModal()}>Close</a>
                </div>
            </Modal>
        </section>
    );
  }
}

const mapStatetoProps = (state) => {
  return{
    visible: state.visible,
  }  
}

export default connect(mapStatetoProps)(Popup)