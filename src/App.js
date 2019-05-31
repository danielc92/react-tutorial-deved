import React from 'react';

// Create component
function App() {

  const vegetables = ['Lettuce', 'Cucumber', 'Carrots', 'Spinach', 'Potato', 'Celery', 'Beetroot'];
  
  var counter = 0;

  const incrementCounter = () => {
    counter ++;
    console.log(counter);
  }

  return (
    <section className="content">
      <h1>Counters (App.js)</h1>
      <button onClick={incrementCounter}>{counter}</button>
      <h1>Vegetable list</h1>
      <ul>
        {vegetables.map((veggie, index) => {
          return <li id={index}>{veggie}</li>
        })}  
      </ul>        
    </section>
  );

}

export default App;
