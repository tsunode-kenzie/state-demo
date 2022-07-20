import Register from './components/Register';
import Students from './components/Students';

import './App.css';
import { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);

  return (
    <div className='App'>
      <Students students={students}>
        <h1>Students</h1>
      </Students>
      <Register banana={setStudents} />
    </div>
  );
}

export default App;