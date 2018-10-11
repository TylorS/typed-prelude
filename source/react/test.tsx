import { defaultResources, Effect } from '../effect'
import { IO } from '../lambda'
import { createStateContext } from './State'

type CounterState = {
  amount: number
}

type CounterActions = {
  increment: IO
  decrement: IO
}

const CounterState = createStateContext({ amount: 0 }, defaultResources())

function incrementCounter(state: CounterState): CounterState {
  return {
    ...state,
    amount: state.amount + 1,
  }
}

function decrementCounter(state: CounterState): CounterState {
  return {
    ...state,
    amount: state.amount - 1,
  }
}

type CounterProps = CounterActions & CounterState

function Counter({ amount, increment, decrement }: CounterProps) {
  return (
    <div>
      <p>{amount}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>+</button>
    </div>
  )
}

export default () => (
  <CounterState.Consumer>
    {({ currentState, updateState }) => (
      <Counter
        {...currentState}
        increment={() => updateState(Effect.of(incrementCounter))}
        decrement={() => updateState(Effect.of(decrementCounter))}
      />
    )}
  </CounterState.Consumer>
)
