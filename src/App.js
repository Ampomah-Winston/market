import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className = 'market-root'>
        <section className='market-splash'>
          Splash
        </section>        
        <section className='market-left'>
          filters
        </section>
        <section className='market-center'>
          content
        </section>
        <section className='market-right'>
          preview
        </section>
    </div>
  )
}

export default App;
