import './App.css';
import React, { PureComponent } from 'react';
import {FC} from 'react';

// Footer
const Footer = () => (
  <footer>
    <p>This is my footer 😇</p>
  </footer>
)

// BIO PART
type BioProps = {
  name: string;
  age: number;
  desc: string;
  link: string;
  contacts: string
}

const Bio: FC<BioProps> = (props) => (
  <div className="bio">
    <p>My name is <span>{props.name}</span></p>
    <p>I am <span>{props.age}yo.</span></p>
    <p>My specialisation: <span>{props.desc}</span></p>
    <p>Contact me here: <span><a href={props.link} target="_blank" rel="noreferrer">{props.contacts}</a></span></p>
  </div>
)

// COUNTER 
type BtnProps = {
  text: string;
  onClick: () => void
};

const AppBtn: FC<BtnProps> = ({text, onClick}) => (
  <button className="btn" onClick={onClick}>
    {text}
  </button>
)

// REVERSE COUNTER
type ReverseCounterProps = {text: string};
class ReverseCounter extends PureComponent<ReverseCounterProps> {
  state = {counter: 15};
  private _increment = () =>
  this.setState({counter: this.state.counter - 1});
  render () {
    return (
      <>
        <h3>{this.state.counter}</h3>
        <button onClick={this._increment}>{this.props.text}</button>
      </>
    );
  }
}

// Custom Hook
const useReverseCounter = () => { 
  const [count, setCount] = React.useState(5);
  const decrement = () => setCount(count - 1);
  const resetCounter = () => setCount(5);
  return {count, decrement, resetCounter};
}
const App = () => {
  const [counter, setCounter] = React.useState(0);
  const {count, decrement, resetCounter} = useReverseCounter();
  
  return (
  <div className="App">
     <h1>Hi there!</h1>
     <Bio 
      name="Bohdan"
      age={23}
      desc="Front-end"
      contacts="@kargee"
      link="https://t.me/kargee"/>
     <Footer/>
     <h2>Count: {counter}</h2>
     <AppBtn onClick={() => setCounter(counter +1)} text="Тиць"/>
     <h2>Reverse Counter</h2>
     <ReverseCounter text="Мінус"/>
     <h2>Custom hook try</h2>
     <p>Every click decreases count by 1 point, when the count is 0, button is disabled</p>
     <p>If you click Reset button, Count will be updated</p>
     <p>Count: {count}</p>
     <div className="wrapBtn">
      <button onClick={decrement} disabled={count <= 0 ? true : false}>Minus</button>
      <button onClick={resetCounter}>Reset</button>
     </div>
     <span className={count <= 0 ? "alert enable" : "alert"}>Button is disabled</span>
  </div>
  )
}

export default App;
