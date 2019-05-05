import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext';

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
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
