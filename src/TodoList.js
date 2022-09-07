import React, { useState } from 'react'
// import AddIcon from '@mui/icons-material/Add';

const TodoList = () => {

  const [num, setNum] = useState(0);

  const incNum  = () => {
    setNum(num + 1)
  }

  const decNum  = () => {
    if (num >0) {
    setNum (num - 1);
    } else {
      alert("sorry zero limit");
      setNum(0);
    }
  };

  return (
    <div className='main-div'>
        <div className='center-div'>
                <h1> {num} </h1>
                <div className='btn-div'>
                    <button onClick={incNum}>increment</button>
                    <button onClick={decNum}>decrement</button>

                </div>
        </div>
    </div>
  )
}

export default TodoList