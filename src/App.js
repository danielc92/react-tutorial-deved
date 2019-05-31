import React from 'react';
import Contact from './Contact';

// Create component
function App() {

  const vegetables = ['Lettuce', 'Cucumber', 'Carrots', 'Spinach', 'Potato', 'Celery', 'Beetroot'];
  
  var counter = 0;

  const incrementCounter = () => {
    counter ++;
    document.getElementById('counter').innerHTML = `I was changed to ${counter}`;
  }

  return (
    <section className="section">
        <section className="container">
            <section className="content">
              <h1>Main component</h1>
              <h3>Counters (App.js)</h3>
              <button id="counter" onClick={incrementCounter}>Click Me</button>
              
              <h3>Vegetable list</h3>
              <ul>
                {vegetables.map((veggie, index) => {
                  return <li id={index}>{veggie}</li>
                })}  
              </ul>  

              <Contact/>      
            
            </section>
        </section>
    </section>
  );
}

export default App;
