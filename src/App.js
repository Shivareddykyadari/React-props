import './App.css';
import Greet from './Greet';
import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
       <Greet name="shiva" heroName="ravitej"><p>children Action</p></Greet>
       <Greet name="ravi" heroName='shiva'><button>Action</button></Greet>
       <Greet name="rocky" heroName='yesh' />

       <Welcome name="shiva" heroName="ravitej"><p>children Action</p></Welcome>
       <Welcome name="ravi" heroName='shiva'><button>Action</button></Welcome>
       <Welcome name="rocky" heroName='yesh' />
    </div>
  );
}

export default App;
