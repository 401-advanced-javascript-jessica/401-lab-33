import React from 'react';
import { CounterContext } from '../CounterProvider/counter-context';


class Counter extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
          <span style={this.context.styles.counter}>{this.context.count}</span>
    );
  }
}

export default Counter;
