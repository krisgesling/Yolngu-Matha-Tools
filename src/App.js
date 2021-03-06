import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput.js';
import Menu from './components/Menu.js';
import getWord from './functions/getWord';
import WordSuggestions from './components/WordSuggestions';
import Definitions from './components/Definitions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'userOptions': {
        'searchYolngu': true,
        'searchEnglish': true,
        'isFlexiSearch': false,
        'sortAZ': false
      },
      'suggestions': {},
      'totalSuggestions': null,
      'definitions': {}
    };
    this.updateState = this.updateState.bind(this);
    this.addDefinition = this.addDefinition.bind(this);
    this.removeDefinition = this.removeDefinition.bind(this);
  }
  componentDidMount(){
    this.refs.userInput.refs.input.focus()
  }
  updateState(newObj) {
    this.setState(prevState => ({
      ...newObj
    }));
  }
  addDefinition(value) {
    if (!value) {
      return console.error('No value provided to addDefinition');
    }
    let definition = {};
    if (
      typeof value === 'object'
      && value.constructor === Object
      && value.word === String
      && value.definition === String
      ) {
        definition[value.word] = value.definition;
    } else {
      const newDef = getWord({'inputWord': value});
      definition[newDef.word] = newDef.definition;
    }
    const newDefs = {
      ...this.state.definitions,
      ...definition
    };

    this.setState(prevState => ({
      'definitions': newDefs
    }));
    this.refs.userInput.refs.input.focus()
  }
  removeDefinition(word) {
    let newDefs = this.state.definitions;
    delete newDefs[word];
    this.setState(prevState => ({
      'definitions': newDefs
    }));
    this.refs.userInput.refs.input.focus()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Menu
            userOptions={this.state.userOptions}
            updateState={this.updateState}
          />
          <h1>Yolŋu Matha Dictionary</h1>
        </div>
        <UserInput
          ref="userInput"
          userOptions={this.state.userOptions}
          updateState={this.updateState}
        />
        <WordSuggestions
          words={this.state.suggestions}
          totalSuggestions={this.state.totalSuggestions}
          addDefinition={this.addDefinition}
          onSelectSuggestion={this.selectedSuggestion}
          userOptions={this.state.userOptions}
        />
        <Definitions
          words={this.state.definitions}
          removeDefinition={this.removeDefinition}
          userOptions={this.state.userOptions}
          updateState={this.updateState}
        />
      </div>
    );
  }
}

export default App;
