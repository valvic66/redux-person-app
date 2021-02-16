import React from 'react';
import './App.css';
import NoteComponent from './components/PersonComponent';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="App">
        <NoteComponent />
      </div>
    </Provider>
  );
};

export default App;
