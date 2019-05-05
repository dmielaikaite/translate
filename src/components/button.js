import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext';

// create contect object
//define the contextType
//use the context

class Button extends Component {
  static contextType = LanguageContext;

  render(){
    const text = this.context === 'english' ? 'submit' : 'voorleggen'

    return(
      <button className="ui button primary"> {text} </button>
    );
  }
}

export default Button;
