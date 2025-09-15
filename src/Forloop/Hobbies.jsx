import React from "react";

const Hobbies = () => {
  const person = {
    name: "Sam",
    hobbies: ["reading", "coding", "traveling"],
  };

  const hobbies = () => {
    let hob = [];
    for (let i = 0; i < person.hobbies.length; i++) {
      hob.push(<p>{person.hobbies[i]}</p>);
    }

    return hob;
  };

  return (
    <div>
       
       <h3> {person.name} HOBBIES LIST</h3>
    
      <p>{hobbies()}</p>
    </div>
  );
};

export default Hobbies;
