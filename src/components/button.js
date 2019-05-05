import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext';

// create contect object
//define the contextType
//use the context

//used Consumer
class Button extends Component {

  render(){
    return(
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'submit' : 'voorleggen'}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
