import React from "react";
import { useState } from "react";
import styled from "styled-components";

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
  margin: 5% 0 4% 0;
  width: 16rem;
  display: flex;
  justify-content: space-between;
`;

const CheckBox = styled.input`
  box-sizing: border-box;
  cursor: pointer;
  outline: 2px solid #333;
  border: 3px solid white;
  width: 0.8rem;
  height: 0.8rem;
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
  transition: background-position .5s;
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
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <Background>
            <H1> Random Password Generator</H1>
            <Card>
                <Input type="text" placeholder="Your Password" />
                <CheckBoxContainer>
                    <CheckBoxInputContainer>
                        <Label for="length">Password Length :</Label>
                        <input
                            id="length"
                            name="length"
                            type="number"
                            min="6"
                            max="40"
                            placeholder="6"
                        />
                    </CheckBoxInputContainer>
                    <CheckBoxInputContainer>
                        <Label>Upper Case</Label>
                        <CheckBox
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                            name="upperCase"
                            value="upperCase"
                            id="upperCase"
                        />
                    </CheckBoxInputContainer>
                    <CheckBoxInputContainer>
                        <Label>Lower Case</Label>
                        <CheckBox
                            type="checkbox"
                            // checked={checked}
                            // onChange={handleChange}
                            name="lowerCase"
                            id="lowerCase"
                        />
                    </CheckBoxInputContainer>
                    <CheckBoxInputContainer>
                        <Label>Numbers</Label>
                        <CheckBox
                            type="checkbox"
                            // checked={checked}
                            // onChange={handleChange}
                            name="numbers"
                            id="numbers"
                        />
                    </CheckBoxInputContainer>
                    <CheckBoxInputContainer>
                        <Label>Numbers</Label>
                        <CheckBox
                            type="checkbox"
                            // checked={checked}
                            // onChange={handleChange}
                            name="symbols"
                            id="symbols"
                        />
                    </CheckBoxInputContainer>
                </CheckBoxContainer>
                <Button onClick={() => { }} onHover>
                    Generate
                </Button>
            </Card>
        </Background>
    );
}

export default App;
