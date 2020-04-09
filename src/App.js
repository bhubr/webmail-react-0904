import React from 'react';
import Nav from './components/Nav';
import EmailList from './components/EmailList';
import EmailContent from './components/EmailContent';
import './App.css';

function App() {
  return (
    <div id="layout" class="content pure-g">
      <Nav />
      <EmailList />
      <EmailContent />
    </div>
  );
}

export default App;
