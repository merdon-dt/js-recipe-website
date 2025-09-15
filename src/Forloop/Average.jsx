import React, { useState } from 'react'

const Average = () => {
    const students = [
  { 
    name: "John", marks: [80, 90, 85] 
},
  {
     name: "Jane", marks: [70, 60, 75] 
    },
  { 
    name: "Jim", marks: [95, 85, 100] 
}
];
const [show,setshow] = useState(false);

const Average = () =>{

    let Avermark = []
    for(let i=0; i<students.length; i++){
        let sum = 0;
        for( let j=0;j<students[i].marks.length; j++){
             sum += students[i].marks[j]
        }

        let avg = sum/students[i].marks.length;

        Avermark.push(<p>{students[i].name} Average mark :{avg}</p>)
     
    }


    return Avermark;

}
  return (
    <div>
       <h3>AVERAGE MARKS</h3>
        <div>
            {students.map((list) => (
                <h4>{list.name} : {list.marks.join(",")}</h4>
            ))}
        </div>
      

        <p>{show && Average()}</p>
          <button onClick={() => setshow(true)}>Average</button>
      
    </div>
  )
}

export default Average
