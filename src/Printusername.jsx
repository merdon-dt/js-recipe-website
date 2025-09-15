import React from 'react'

const Printusername = () => {
    const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];

const allname = []
const age = []

for(let i=0;i < users.length;i++){
   allname.push(<p>{users[i].name}</p>)
}

for( let i=0 ;i < users.length; i++){
    if(users[i].age > 28){
        age.push(<p>{users[i].name} : {users[i].age}</p>)
    }
}


return (
    <div>
        <h3>PRINT USER NAMES</h3>
        <p>{allname}</p>
         
        <h3>PRINT USERS AGE UPTO 28</h3>

        {users.map((ages) => (
            <p>{ages.name}: {ages.age}</p>
        ))}
        <h3>user age upto 28{age}</h3>

      
    </div>
  )
}

export default Printusername
