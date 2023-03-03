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
    background: rgb(31, 166, 168);
    box-shadow: rgb(27 146 148) 41px -41px 52px, rgb(35 186 188) -41px 41px 52px;
`;

const Input = styled.input`
    height: 50px;
    width: 400px;
    border-radius: 67px;
    text-align: center;
    boarder: none;
    border-radius: 15px;
    background: rgb(137 191 201);
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