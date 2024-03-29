import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import CounterContext from './components/CounterProvider/counter-context';

class Main extends React.Component {
  render() {
    return (
        <>
          <CounterContext>
            <App />
          </CounterContext>
        </>
        )

  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
