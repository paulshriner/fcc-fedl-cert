import { useState } from 'react'
import './App.css'

export default function App() {
  // Thanks https://react.dev/learn/managing-state for state
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState('N');

  const handleClick = (e) => {
    switch(e.target.id) {
      case 'one':
        // if operand is 0 then set it to the number, else add to the existing number (same for 0-9)
        setOperand2(operand2 === 0 ? 1 : operand2 + '1');
        break;
      case 'two':
        setOperand2(operand2 === 0 ? 2 : operand2 + '2');
        break;
      case 'three':
        setOperand2(operand2 === 0 ? 3 : operand2 + '3');
        break;
      case 'four':
        setOperand2(operand2 === 0 ? 4 : operand2 + '4');
        break;
      case 'five':
        setOperand2(operand2 === 0 ? 5 : operand2 + '5');
        break;
      case 'six':
        setOperand2(operand2 === 0 ? 6 : operand2 + '6');
        break;
      case 'seven':
        setOperand2(operand2 === 0 ? 7 : operand2 + '7');
        break;
      case 'eight':
        setOperand2(operand2 === 0 ? 8 : operand2 + '8');
        break;
      case 'nine':
        setOperand2(operand2 === 0 ? 9 : operand2 + '9');
        break;
      case 'zero':
        setOperand2(operand2 === 0 ? 0 : operand2 + '0');
        break;
      case 'add':
        // Here user pressed plus after entering number, prep for second number
        if (operand2 !== 0) {
          setOperand1(operand2);
          setOperand2(0);
        }
        // Here user entered second number so this adds the numbers together
        if (operand1 !== 0) {
          setOperand1(solve());
          setOperand2(0);
        }
        setOperator('+');
        break;
      case 'subtract':
        // if no operator, then do subtraction
        if (operator === 'N') {
          setOperator('-');
          if (operand2 !== 0) {
            setOperand1(operand2);
            setOperand2(0);
          }
        } else {
          // if 0 then user is entering a negative number, else do the operation
          if (operand2 !== 0) {
            setOperand1(solve());
            setOperand2(0);
          } else {
            setOperand2('-');
          }
        }
        break;
      case 'multiply':
        if (operand2 !== 0) {
          setOperand1(operand2);
          setOperand2(0);
        }
        if (operand1 !== 0) {
          setOperand1(solve());
          setOperand2(0);
        }
        setOperator('*');
        break;
      case 'divide':
        if (operand2 !== 0) {
          setOperand1(operand2);
          setOperand2(0);
        }
        if (operand1 !== 0) {
          setOperand1(solve());
          setOperand2(0);
        }
        setOperator('/');
        break;
      case 'decimal':
        setOperand2(operand2 + '.');
        break;
      case 'equals':
        setOperand2(solve());
        setOperand1(0);
        setOperator('N');
        break;
      default:
        setOperand1(0);
        setOperand2(0);
        setOperator('N');
    }
  }

  const solve = () => {
    switch (operator) {
      case '+':
        return parseFloat(operand1) + parseFloat(operand2);
      case '-':
        return parseFloat(operand1) - parseFloat(operand2);
      case '*':
        return parseFloat(operand1) * parseFloat(operand2);
      case '/':
        return parseFloat(operand1) / parseFloat(operand2);
      default:
        return parseFloat(operand2);
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
      <p id="display">{operand1} {operator === 'N' ? null : operator} {operand2}</p>
    </>
  )
}
