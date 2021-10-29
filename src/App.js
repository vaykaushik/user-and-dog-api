// Main Stylesheet

import './sass/styles.scss';

// All Components

import RandomUser from './components/RandomUser/RandomUser'; // Random User API
import RandomDogs from './components/RandomDogs/RandomDogs'; // Dog API

function App() {
  return (
    <div className="App">
      <RandomUser/>
      <RandomDogs/>
    </div>
  );
}

export default App;
