"use client";
import { useState } from "react";

function CollatzSequence() {
  const [inputNumber, setInputNumber] = useState("");
  const [sequence, setSequence] = useState([]);

  const collatzSequence = (n) => {
    const sequenceArray = [];

    while (n !== 1) {
      sequenceArray.push(n);

      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
    }
    sequenceArray.push(1);

    setSequence(sequenceArray);
  };

  const handleButtonClick = () => {
    const number = parseInt(inputNumber);

    if (!isNaN(number) && number > 0) {
      collatzSequence(number);
    } else {
      alert("Please enter a positive natural number.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a natural number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={handleButtonClick}>Generate Sequence</button>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {sequence.map((number, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollatzSequence;
