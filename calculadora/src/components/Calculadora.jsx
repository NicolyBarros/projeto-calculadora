import React, { useState } from "react";
import './Calculadora.css';

export default function Calculadora() {
    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState()

    function inputNum(e) {
        let value = e.target.value

        if (num === 0) {
            setNum(value)
        } else {
            setNum(num + value)
        }

    }

    function clear() {
        setNum(0)
        setOldNum(0)
        setOperator()
    }

    function percentage() {
        setNum(num / 100)
    }

    function operatorChange() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(num * (-1))
        }
    }

    function operatorHandle(e) {
        let operator = e.target.value
        setOperator(operator)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if (operator === "/") {
            setNum(Number(oldNum) / Number(num))
        } else if (operator === "x") {
            setNum(Number(oldNum) * Number(num))
        } else if (operator === "-") {
            setNum(Number(oldNum) - Number(num))
        } else if (operator === "+") {
            setNum(Number(oldNum) + Number(num))
        } 
    }

    return (
        <div className="wrapper2">

            <div className="wrapper">
                <div>
                    <h1 className="result">{num}</h1>
                </div>
                <div className="wrapper3">
                    <button className="grey" onClick={clear}>AC</button>
                    <button className="grey" onClick={operatorChange}>+/-</button>
                    <button className="grey" onClick={percentage}>%</button>
                    <button className="orange" onClick={operatorHandle} value={"/"}>/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandle} value={"x"}>X</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHandle} value={"-"}>-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandle} value={"+"}>+</button>
                    <button className="gray" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={inputNum} value={"."} >.</button>
                    <button style={{ visibility: "hidden" }}></button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}