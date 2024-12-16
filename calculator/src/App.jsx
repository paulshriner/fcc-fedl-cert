import { useState } from 'react'
import './App.css'

function App() {
  // Thanks https://react.dev/learn/managing-state for state
  const [operand1, setOperand1] = useState('N');
  const [operand2, setOperand2] = useState('N');
  const [operator, setOperator] = useState('N');

  const handleClick = (e) => {
    switch(e.target.id) {
      case 'one':
        // if operand is 0 then set it to the number, else add to the existing number (same for 0-9)
        setOperand2(operand2 === 'N' ? 1 : operand2 === '-N' ? -1 : operand2 + '1');
        break;
      case 'two':
        setOperand2(operand2 === 'N' ? 2 : operand2 === '-N' ? -2 : operand2 + '2');
        break;
      case 'three':
        setOperand2(operand2 === 'N' ? 3 : operand2 === '-N' ? -3 : operand2 + '3');
        break;
      case 'four':
        setOperand2(operand2 === 'N' ? 4 : operand2 === '-N' ? -4 : operand2 + '4');
        break;
      case 'five':
        setOperand2(operand2 === 'N' ? 5 : operand2 === '-N' ? -5 : operand2 + '5');
        break;
      case 'six':
        setOperand2(operand2 === 'N' ? 6 : operand2 === '-N' ? -6 : operand2 + '6');
        break;
      case 'seven':
        setOperand2(operand2 === 'N' ? 7 : operand2 === '-N' ? -7 : operand2 + '7');
        break;
      case 'eight':
        setOperand2(operand2 === 'N' ? 8 : operand2 === '-N' ? -8 : operand2 + '8');
        break;
      case 'nine':
        setOperand2(operand2 === 'N' ? 9 : operand2 === '-N' ? -9 : operand2 + '9');
        break;
      case 'zero':
        setOperand2(operand2 === 'N' || operand2 === 0 ? 0 : operand2 === '-N' ? -0 : operand2 + '0');
        break;
      case 'add':
        if (operand2 === '-N') {
          // user doesn't want negative number anymore so need to remove
          setOperand2('N');
        } else {
          // Here user pressed plus after entering number, prep for second number
          if (operand2 !== 'N') {
            setOperand1(operand2);
            setOperand2('N');
          }
          // Here user entered second number so this adds the numbers together
          if (operand1 !== 0 && operand1 !== 'N' && operand2 !== 'N') {
            setOperand1(solve());
            setOperand2('N');
          }
        }
        setOperator('+');
        break;
      case 'subtract':
        // if no operator, then do subtraction
        if (operator === 'N') {
          setOperator('-');
          if (operand2 !== 'N') {
            setOperand1(operand2);
            setOperand2('N');
          }
        } else {
          // if 0 then user is entering a negative number, else do the operation
          if (operand2 !== 'N') {
            setOperand1(solve());
            setOperand2('N');
            setOperator('-');
          } else if (operator !== '-') {
            setOperand2('-N');
          }
        }
        break;
      case 'multiply':
        if (operand2 === '-N') {
          setOperand2('N');
        } else {
          if (operand2 !== 'N') {
            setOperand1(operand2);
            setOperand2('N');
          }
          if (operand1 !== 0 && operand1 !== 'N' && operand2 !== 'N') {
            console.log("a");
            setOperand1(solve());
            setOperand2('N');
          }
        }
        setOperator('*');
        break;
      case 'divide':
        if (operand2 === '-N') {
          setOperand2('N');
        } else {
          if (operand2 !== 'N') {
            setOperand1(operand2);
            setOperand2('N');
          }
          if (operand1 !== 0 && operand1 !== 'N' && operand2 !== 'N') {
            setOperand1(solve());
            setOperand2('N');
          }
        }
        setOperator('/');
        break;
      case 'decimal':
        !operand2.toString().includes('.') && setOperand2(operand2 + '.');
        break;
      case 'equals':
        setOperand2(solve());
        setOperand1('N');
        setOperator('N');
        break;
      default:
        setOperand1('N');
        setOperand2('N');
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
    <div id="outer">
      <div id="container">
        <div id="display-outer">
          <p id="display">{operand1 !== 'N' && operand1} {operator !== 'N' && operator} {operand1 === 'N' ? (operand2 === 'N' ? 0 : operand2) : operand2 === '-N' ? '-' : (operand2 === 'N' ? null : operand2)}</p>
        </div>
        <button id="clear" onClick={handleClick}>A/C</button>
        <button id="divide" onClick={handleClick}>/</button>
        <button id="multiply" onClick={handleClick}>X</button>
        <button id="seven" onClick={handleClick}>7</button>
        <button id="eight" onClick={handleClick}>8</button>
        <button id="nine" onClick={handleClick}>9</button>
        <button id="subtract" onClick={handleClick}>-</button>
        <button id="four" onClick={handleClick}>4</button>
        <button id="five" onClick={handleClick}>5</button>
        <button id="six" onClick={handleClick}>6</button>
        <button id="add" onClick={handleClick}>+</button>
        <button id="one" onClick={handleClick}>1</button>
        <button id="two" onClick={handleClick}>2</button>
        <button id="three" onClick={handleClick}>3</button>
        <button id="equals" onClick={handleClick}>=</button>
        <button id="zero" onClick={handleClick}>0</button>
        <button id="decimal" onClick={handleClick}>.</button>
      </div>
    </div>
  );
}

export default App
