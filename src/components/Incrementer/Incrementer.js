import React from 'react';
import { CounterContext } from '../CounterProvider/counter-context';

const Incrementer = () => {
  return (
        <CounterContext.Consumer>
            {(context) => (
                <>
                    <button style={context.styles.button} onClick={context.increment}> + </button>
                </>
            )}

        </CounterContext.Consumer>
  );
};

export default Incrementer;
