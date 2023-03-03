import React from "react";
import styled from "styled-components";

const Background = styled.div`
    background-color: #1fa6a8;
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
    font-weight: 700;
    margin-bottom: 10%;
`;

const Card = styled.div`
    height: 800px;
    width: 600px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 67px;
    background: #1fa6a8;
    box-shadow:  41px -41px 52px #1b9294,
                -41px 41px 52px #23babc;
`;

const Input = styled.input`
    height: 50px;
    width: 400px;
    border-radius: 67px;
    text-align: center;
    boarder: none;
    border-radius: 67px;
    background: rgb(39 193 195);
    border-style: hidden;
    /* box-shadow:  41px -41px 52px #1b9294,
             -41px 41px 52px #619d9d; */
`;



function App() {
    return (
        <Background>
            <H1> Random Password Generator</H1>
            <Card>
                <Input type="text" placeholder="Password" />

            </Card>
        </Background>
    );
}

export default App;