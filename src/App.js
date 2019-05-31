import React from 'react';

// Create component
function App() {

  const sayHello = () => {
    console.log('hello');
  }

  const changeTitle = () => {
    title = document.querySelector('h1');
    title.innerText = 'Something else';
  }

  return (
    <section>
      <h1>Title</h1>
      <p>Lorem</p>
      <button onClick={changeTitle}></button>
    </section>
  );
}

export default App;
