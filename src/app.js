import React from 'react';

import { CounterContext } from './components/CounterProvider/counter-context';
import Counter from './components/counter/counter';
import Decrement from './components/Decrementer/Decrementer';
import Increment from './components/Incrementer/Incrementer';

export default class App extends React.Component {
    static contextType = CounterContext;

    render() {
      return (
      <>
          <div style={this.context.styles.container}>
            <Decrement/>
            <Counter />
            <Increment/>
          </div>
      </>
      );
    }
}
