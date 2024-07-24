import React from 'react';

type PersonListProps = {
  list_of_person: string[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.list_of_person.map((person) => {
        return <p>{person}</p>;
      })}
    </div>
  );
}

export default PersonList;
