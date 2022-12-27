import logo from './logo.svg';
import './App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <General></General>
      <div className='Content'>
      <Education></Education>
      <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
