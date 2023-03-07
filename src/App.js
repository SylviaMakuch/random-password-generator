import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { radioOptions } from "./config";

const Background = styled.div`
  background: rgb(31, 166, 168);
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
`;

const Card = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 67px;
  background: rgb(31, 166, 168);
  box-shadow: rgb(27 146 148) 41px -41px 52px, rgb(35 186 188) -41px 41px 52px;
`;

const Input = styled.input`
  height: 50px;
  width: 400px;
  border-radius: 67px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  boarder: none;
  border-radius: 15px;
  background: #06cfc185;
  border-style: groove;
  border-color: #f7feff36;
  &:focus {
    outline: none;
  }
`;

const CheckBoxContainer = styled.div`
  margin: 2rem;
  width: 16rem;
`;

const CheckBoxInputContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  justify-content: space-between;
  margin: 15px 0;
`;

const Button = styled.button`
  height: 2rem;
  width: 12rem;
  border-radius: 67px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
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
  font-size: 1rem;
  font-weight: 500;
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
              value={length}
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
                key={index}
                onChange={(e) => {
                  const optionSelected = e.target.value;
                  setCheckbox(optionSelected);
                  console.log(checkbox);
                }
                }
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
            let password = "";
    
            if (checkbox === "uppercase") {
              for (let i = 0; i < length; i++) {
                password += upperCase.charAt(
                  Math.floor(Math.random() * upperCase.length)
                );
              }
            } else if (checkbox === "lowercase") {
              for (let i = 0; i < length; i++) {
                password += lowerCase.charAt(
                  Math.floor(Math.random() * lowerCase.length)
                );
              }
            } else if (checkbox === "numbers") {
              for (let i = 0; i < length; i++) {
                password += numbers.charAt(
                  Math.floor(Math.random() * numbers.length)
                );
              }
            } else if (checkbox === "symbols") {
              for (let i = 0; i < length; i++) {
                password += symbols.charAt(
                  Math.floor(Math.random() * symbols.length)
                );
              }
            } else if (checkbox === "all") {
              for (let i = 0; i < length; i++) {
                password += upperCase.charAt(
                  Math.floor(Math.random() * upperCase.length)
                );
                password += lowerCase.charAt(
                  Math.floor(Math.random() * lowerCase.length)
                );
                password += numbers.charAt(
                  Math.floor(Math.random() * numbers.length)
                );
                password += symbols.charAt(
                  Math.floor(Math.random() * symbols.length)
                );
              }
            }
            setPassword(password);
          }}  
          
          
        >
          Generate Password
        </Button>
      </Card>
    </Background>
  );
}

export default App;
