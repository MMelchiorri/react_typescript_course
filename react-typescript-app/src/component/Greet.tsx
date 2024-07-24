import React from 'react';

type GreetProps = {
  name: string;
  message_count: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  {
    return (
      <div>
        <h2>
          {props.isLoggedIn
            ? `Welcome ${props.name} to typescript course. you have to read ${props.message_count}`
            : 'Welcome Guest'}
        </h2>
      </div>
    );
  }
}

export default Greet;
