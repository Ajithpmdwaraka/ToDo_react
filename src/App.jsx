import { useState } from 'react'

function App() {
  const [newItem, setnewItem] = useState("")
  return (
    <>
      <div>
        <form className="new-item-form"></form>
        <div className="form-row">
          <label htmlFor='item'> Add Task</label>
          <input 
            value={newItem} 
            onChange={e => setnewItem(e.target.value)} 
            type='text' 
            id='item'/> 
          <button className='btn'>Add Task</button>       
        </div>
      </div>
      <div>
      <h1 className='header'>ToDo List</h1>
      <ul className='list'>
        <li>
            <label>
              <input type='checkbox' />
              Item 1
            </label>
            <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
            <label>
              <input type='checkbox' />
              Item 2
            </label>
            <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
      </div>
      

    </>
  )
}

export default App
