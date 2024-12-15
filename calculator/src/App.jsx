import { useState } from 'react'
import './App.css'

export default function App() {
  // Thanks https://react.dev/learn/managing-state for state
  const [operand1, setOperand1] = useState(0);
  const [hasDecimal, setHasDecimal] = useState(false);
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState('N');

  const handleClick = (e) => {
    switch(e.target.id) {
      case 'one':
          setOperand1(1);
          break;
      case 'two':
          setOperand1(2);
          break;
      case 'three':
          setOperand1(3);
          break;
      case 'four':
          setOperand1(4);
          break;
      case 'five':
          setOperand1(5);
          break;
      case 'six':
          setOperand1(6);
          break;
      case 'seven':
          setOperand1(7);
          break;
      case 'eight':
          setOperand1(8);
          break;
      case 'nine':
          setOperand1(9);
          break;
      case 'zero':
          setOperand1(0);
          break;
      case 'add':
          setOperator('+');
          break;
      case 'subtract':
          setOperator('-');
          break;
      case 'multiply':
          setOperator('*');
          break;
      case 'divide':
          setOperator('/');
          break;
      case 'decimal':
          setHasDecimal(true);
          break;
      default:
          setOperand1(0);
          setOperand2(0);
          setOperator('N');
          setHasDecimal(false);
    }
  }

  return (
    <>
      <button id="clear" onClick={handleClick}>A/C</button>
      <button id="divide" onClick={handleClick}>/</button>
      <button id="multiply" onClick={handleClick}>X</button>
      <button id="subtract" onClick={handleClick}>-</button>
      <button id="add" onClick={handleClick}>+</button>
      <button id="equals" onClick={handleClick}>=</button>
      <button id="nine" onClick={handleClick}>9</button>
      <button id="eight" onClick={handleClick}>8</button>
      <button id="seven" onClick={handleClick}>7</button>
      <button id="six" onClick={handleClick}>6</button>
      <button id="five" onClick={handleClick}>5</button>
      <button id="four" onClick={handleClick}>4</button>
      <button id="three" onClick={handleClick}>3</button>
      <button id="two" onClick={handleClick}>2</button>
      <button id="one" onClick={handleClick}>1</button>
      <button id="zero" onClick={handleClick}>0</button>
      <button id="decimal" onClick={handleClick}>.</button>
      <p id="display">{operand2} {operator === 'N' ? null : operator} {operand1}</p>
    </>
  )
}
