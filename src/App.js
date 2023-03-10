import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { radioOptions } from "./config";
import navigator from "react";
import Slider from "@mui/material/Slider";

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
  border-radius: 67px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 15px;
  background: #06cfc185;
  border-style: groove;
  border-color: #f7feff36;
  margin: 2rem 0rem ;
  height: 3rem;
  width: 92%;

  &:focus {
    outline: none;
  }
`;

const CopyButton = styled.button`
  background: #06cfc185;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0rem;
  text-align: center;
  height: 42%;
  border: 1px #ffffff2b solid;
  width: 100%;
  height: 3rem;
  cursor: pointer;

 &:hover {
    background: #06cfc1;
    color: white; 
  }
`;

const CheckBoxInputContainer = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  width: 98%;
`;

const PwLengthContainer = styled.div`
  display: grid;
  grid-template-columns: 90% 6%;
  grid-template-rows: 1fr;
  width: 98%;
`;

const Button = styled.button`
  height: 3rem;
  padding: 0rem 3.2rem;
  margin: 2rem;
  border-radius: 67px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  font-size: 1.5rem;
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
    color: white;
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

  const copyToClipboard = (content) => {
    if (window.isSecureContext && navigator.clipboard) { // Secure context check
      navigator.clipboard.writeText(content);
      alert('Copied to clipboard');
    } else {
      unsecuredCopyToClipboard(content);// Fallback for insecure context
    }
  };

  function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;// Set the text content to be the text you wished to copy
    document.body.appendChild(textArea);
    textArea.focus();// Select the text content
    textArea.select();// Use try & catch for unsupported browser
    try {
      document.execCommand('copy');
      alert('Copied to clipboard');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
      alert('Unable to copy to clipboard');
    }
    document.body.removeChild(textArea);
  }

  return (
    <Background>
      <H1> Random Password Generator</H1>
      <Card className="card">

        <CheckBoxInputContainer className="checkbox-input-container">
          <Input type="text" placeholder="Your Password" value={password} />
          <CopyButton onClick={() => copyToClipboard(password)}
          >Copy</CopyButton>
        </CheckBoxInputContainer>
      <PwLengthContainer>
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
            value={length}
          />
          </PwLengthContainer>
          <Slider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={6}
            min={6}
            max={25}
            onChange={(e, value) => {
              setLength(value);
            }}

          />
        {radioOptions.map((option, index) => (
          <CheckBoxInputContainer className="checkbox-input-container">
            <Label for={option.id}>{option.label}</Label>
            <input
              style={{ height: "1.4rem" }}
              type={option.type}
              id={option.id}
              name={option.value}
              value={option.value}
              min={option.min}
              max={option.max}
              key={index}
              onChange={() => {
                const newCheckbox = [...checkbox]; //copy the array
                if (newCheckbox.includes(option.value)) {
                  const index = newCheckbox.indexOf(option.value); //get the index of the value
                  newCheckbox.splice(index, 1); //remove the value from the array
                }
                if (!newCheckbox.includes(option.value)) {
                  newCheckbox.push(option.value); //add the value to the array
                }
                setCheckbox(newCheckbox);
              }}
            />
          </CheckBoxInputContainer>
        ))}
        <Button
          onClick={() => {
            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowerCase = "abcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
            let output = "";

            for (let i = 0; i < length; i++) {
              if (checkbox.includes("upperCase")) {
                output +=
                  upperCase[Math.floor(Math.random() * upperCase.length)];
              }
              if (checkbox.includes("lowerCase")) {
                output += lowerCase[Math.floor(Math.random() * lowerCase.length)];
              }
              if (checkbox.includes("numbers")) {
                output += numbers[Math.floor(Math.random() * numbers.length)];
              }
              if (checkbox.includes("symbols")) {
                output += symbols[Math.floor(Math.random() * symbols.length)];
              }
              let pw = output.slice(0, length);
              setPassword(pw);
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
