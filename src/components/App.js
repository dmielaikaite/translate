import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';

import UserCreate from './userCreate';

class App extends Component {

  state={ language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language: language});
  }

  render(){
    return(
      <div className="ui container">
        <div>
          select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
