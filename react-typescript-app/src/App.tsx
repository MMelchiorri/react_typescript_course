import React from 'react';
import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';

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
    </div>
  );
}

export default App;
