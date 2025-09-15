import React, { useState } from 'react'

const ArrayKeyandObject = () => {
  const [user,setUser] = useState({
    users:"",
    age:"",
    grade:""
  });
  const [show,setShow] = useState(false)

  const hchange = (e) => {
    setUser({...user,[e.target.name]: e.target.value})
  }
    
    let printout = []
    for (let std in user){
        printout.push(<p>{std}:{user[std]}</p>)
    }

    const clickk = () => {
        setShow(true);
    }
  return (
    <div>
        <h3>STUDENT NAME AND AGE</h3>

        <input type="text" name='users' placeholder='Name' value={user.users} onChange={hchange} />
          <input type="number" name='age' placeholder='Age' value={user.age} onChange={hchange} />
            <input type="text" name='grade' placeholder='Grade' value={user.grade} onChange={hchange} />

            <button onClick={clickk}>store</button>
        <p>{show && printout}</p>
      
    </div>
  )
}

export default ArrayKeyandObject
