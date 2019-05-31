import React from 'react';

// Create component
function App() {


  var counter = 0;

  const incrementCounter = () => {
    counter ++;
    console.log(counter);
  }



  return (
    <section>
      <h1>Title</h1>
      <p>Lorem</p>
      <button onClick={incrementCounter}>{counter}</button>
    </section>
  );
}

export default App;
