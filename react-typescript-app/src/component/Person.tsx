import React from 'react';

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

function Person(props: PersonProps) {
  return (
    <div>
      Hello {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;