
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
   <div>
    <NavBar/>
    <News country='in' category ='sports'/>
   
    </div>
  );
}

export default App;
