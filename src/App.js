import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, {useState} from 'react';

const App= () => {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'doctors appointment',
        day: 'Feb 15th at 2:30 pm',
        reminder: true, 

    }, 
    {
        id: 2, 
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm', 
        reminder: true, 
    }, 
    {
        id:3,
        text: 'Food shopping',
        day: 'Feb 5th at 3:49', 
        reminder: false, 
    }

  ])

// Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id ))
  }

  return (
    <div className="container">
      <Header/> 
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}/>
      ): (
        'No task to show'
      )}

    </div> //any jsx expression must have at leats one parent element
  );
} // this is not html but jsx(javascript extension)

export default App;



/*<h1>Hello {name}</h1>
      <h2>Hello, {x?'Isaac' : "this is not isaac"} </h2> */
