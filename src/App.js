//Imports
import React from 'react';
import Contact from './Contact';
import Sources from './Sources';
import Message from './Message';

// Create component
function App() {

  // Hardcode data in for now
  const vegetables = ['Lettuce', 'Cucumber', 'Carrots', 'Spinach', 'Potato', 'Celery', 'Beetroot'];
  const messages = [{'author':'Harry', 'message':'Who is there?', 'date':'2013-2-10'}, 
  {'author':'Johnny', 'message':'Bye bye.', 'date':'2019-2-10'}, 
  {'author':'Cole', 'message':'How are you?', 'date':'2019-5-20'}
];
  
  var counter = 0;

  // Counter function for buton
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
            </section>

            <Contact/>
            
            <Sources/>
            
            <h3>Multiple Message Components</h3>
            <section className="columns">
                {messages.map((item, index) => {
                    return <Message author={item.author} message={item.message} date={item.date}/>
                })}

            </section>
        </section>
    </section>
  );
}

export default App;
