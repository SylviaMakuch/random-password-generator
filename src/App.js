import React from "react";
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
  color: #fff;
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
  border-style: hidden;
  /* box-shadow:  41px -41px 52px #1b9294,
             -41px 41px 52px #619d9d; */
`;

const RadioContainer = styled.div`
  margin: 2rem;
  width: 16rem;
`;

const RadioInputContainer = styled.div`
  margin: 5% 0 4% 0;
  width: 16rem;
  display: flex;
  justify-content: space-between;
`;

const Radio = styled.input`
  box-sizing: border-box;
  appearance: none;
  background: white;
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
  boarder: none;
  border-radius: 15px;
  border-radius: 50px;
  background: linear-gradient(225deg, #06cfc1, #05aea2);
  box-shadow: -1px 1px 3px #024d48, 1px -1px 3px #0affff;
  border-style: hidden;
`;

const Label = styled.label`
  color: black;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 500;
`;

function App() {
    return (
        <Background>
            <H1> Random Password Generator</H1>
            <Card>
                <Input type="text" placeholder="Your Password" />
                <RadioContainer>
                    <RadioInputContainer>
                    <Label for="length">Password Length :</Label>
                    <input
                        value="6"
                        name="length"
                        step="1"
                        type="number"
                        min="6"
                        max="40"
                    />
                    </RadioInputContainer>
                    <RadioInputContainer>
                        <Label>Upper Case</Label>
                        <Radio type="radio" name="upperCase" />
                    </RadioInputContainer>
                    <RadioInputContainer>
                        <Label>Lower Case</Label>
                        <Radio type="radio" name="lowerCase" />
                    </RadioInputContainer>
                    <RadioInputContainer>
                        <Label>Numbers</Label>
                        <Radio type="radio" name="numbers" />
                    </RadioInputContainer>
                    <RadioInputContainer>
                        <Label>Numbers</Label>
                        <Radio type="radio" name="symbols" />
                    </RadioInputContainer>
                </RadioContainer>
                <Button>Generate</Button>
            </Card>
        </Background>
    );
}

export default App;
