import React, { useContext } from 'react';
import { CounterContext } from '../CounterProvider/counter-context';

const Decrementer = () => {
  const context = useContext(CounterContext);

  return (
        <button style={context.styles.button} onClick={ context.decrement }> - </button>
  );
};

export default Decrementer;
