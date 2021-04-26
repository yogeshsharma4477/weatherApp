import React from 'react'
import Weather from './weather'

const tcs = {
  color:"white",
  fontWeight:"bold"
}
function App() {
  return (
    <div>
     <h1  style={tcs} className='tc'>Real-Time Weather App</h1>
    <Weather />
    </div>
  );
}

export default App;
