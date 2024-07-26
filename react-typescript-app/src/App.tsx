import React from 'react';
import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Status from './component/Status';

function App() {
  return (
    <div className="App">
      <Greet name={'Marco'} message_count={10} isLoggedIn={true} />
      <Person
        name={{
          first: 'Marco',
          last: 'Melchiorri',
        }}
      />
      <PersonList
        list_of_person={['marco melchiorri', 'daniele izzi', 'davide giungato']}
      />
      <Status status="loading" />
    </div>
  );
}

export default App;
