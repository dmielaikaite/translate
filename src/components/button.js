import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';

// create contect object
//define the contextType
//use the context

//used Consumer
class Button extends Component {

  renderButton(color) {
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'submit' : 'voorleggen'}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render(){
    return(
      <ColorContext.Consumer>
      { (color) => this.renderButton(color) }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
