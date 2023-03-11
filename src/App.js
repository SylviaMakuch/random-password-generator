import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { radioOptions } from "./config";

const Background = styled.div`
  background: rgb(22 188 191);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  color: black;
  font-size: 3rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  margin-bottom: 10%;
  text-align: center;

  @media (max -width: 1024px) {
    font-size: 2rem;
  }
`;

const Card = styled.div`
  padding: 2rem;
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 67px;
  background: #20c2c4c4;
  box-shadow: rgb(27 146 148) 41px -41px 52px, rgb(35 186 188) -41px 41px 52px;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const Input = styled.input`
  height: 50px;
  width: 400px;
  margin: 2rem;
  border-radius: 67px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 15px;
  background: #06cfc185;
  border-style: groove;
  border-color: #f7feff36;
  height: 3rem;
  width: 78%;
  &:focus {
    outline: none;
  }
`;

const CheckBoxContainer = styled.div`
  margin: 2rem;
  width: 75%;
`;

const CheckBoxInputContainer = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  justify-content: space-between;
  margin: 1rem 0;
`;

const Button = styled.button`
  height: 3rem;
  padding: 1rem 3.2rem;
  margin: 2rem;
  border-radius: 67px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  font-size: 1rem;
  border-radius: 15px;
  border-radius: 50px;
  background: linear-gradient(120deg, #06cfc1, #05aea2);
  box-shadow: -1px 1px 3px #024d48, 1px -1px 3px #0affff;
  border-style: hidden;
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.5s;
  cursor: pointer;

  &:hover {
    background-position: 0 0;
  }
`;

const Label = styled.label`
  color: black;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

function App() {
  const [checkbox, setCheckbox] = useState([]);
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");

  return (
    <Background>
      <H1> Random Password Generator</H1>
      <Card>
        <Input type="text" placeholder="Your Password" value={password} />
        <CheckBoxContainer>
          <CheckBoxInputContainer>
            <Label for="length">Password Length</Label>
            <input
              type="number"
              id="length"
              name="length"
              min="6"
              max="25"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </CheckBoxInputContainer>
          {radioOptions.map((option, index) => (
            <CheckBoxInputContainer className="checkbox-input-container">
              <Label for={option.id}>{option.label}</Label>
              <input
                type={option.type}
                id={option.id}
                name={option.value}
                value={option.value}
                min={option.min}
                max={option.max}
                x
                key={index}
                onChange={() => {
                  const newCheckbox = [...checkbox]; //copy the array
                  if (newCheckbox.includes(option.value)) {
                    //if the array includes the value
                    const index = newCheckbox.indexOf(option.value); //get the index of the value
                    newCheckbox.splice(index, 1); //remove the value from the array
                  }
                  if (!newCheckbox.includes(option.value)) {
                    //if the array does not include the value
                    newCheckbox.push(option.value); //add the value to the array
                  }
                  setCheckbox(newCheckbox);
                }}
              />
            </CheckBoxInputContainer>
          ))}
        </CheckBoxContainer>
        <Button
          onClick={() => {
            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowerCase = "abcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
            let output = ""; //create an empty string

            for (let i = 0; i < length; i++) {
              //loop through the length of the password
              if (checkbox.includes("upperCase")) {
                //if the checkbox includes uppercase
                output +=
                  upperCase[Math.floor(Math.random() * upperCase.length)]; //add a random uppercase letter to the output string
              }
              if (checkbox.includes("lowerCase")) {
                output +=
                  lowerCase[Math.floor(Math.random() * lowerCase.length)]; //
              }
              if (checkbox.includes("numbers")) {
              }
              if (checkbox.includes("symbols")) {
                output += symbols[Math.floor(Math.random() * symbols.length)];
              }
              let pw = output.slice(0, length); //slice the output string to the length of the password
              setPassword(pw); //set the password state to the output string
            }
          }}
        >
          Generate Password
        </Button>
      </Card>
    </Background>
  );
}

export default App;
