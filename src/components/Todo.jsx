import React, { useState } from 'react'

const Todo = () => {

  const [todo, setTodo] = useState("");

  return (
    <div><input type="text" placeholder="Type here" className="input" />
    <button type="submit">Add</button>
    </div>
  )
}

export default Todo;