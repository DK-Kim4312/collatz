"use client";
import { useState } from "react";
import styles from "../styles/collatz_sequence.css";
import LineGraph from "./LineGraph";

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
        <div className="main">
            <div>
                <div className="rowblock">
                    <div className={styles.description}>
                        <h1>Collatz Sequence</h1>
                        <p>
                            The Collatz conjecture is a conjecture in mathematics that concerns a
                            sequence defined as follows: start with any positive integer n. Then
                            each term is obtained from the previous term as follows: if the
                            previous term is even, the next term is one half of the previous
                            term. If the previous term is odd, the next term is 3 times the
                            previous term plus 1. The conjecture is that no matter what value of
                            n, the sequence will always reach 1.
                        </p>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter a natural number"
                            value={inputNumber}
                            onChange={(e) => setInputNumber(e.target.value)}
                        />
                    </div>
                    <LineGraph data={sequence} />
                </div>
                <div>


                    <button className="custom-button" onClick={handleButtonClick}>Generate Sequence</button>

                    <table className="result-table">
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
            </div>
        </div>
    );
}

export default CollatzSequence;
