import styled from "styled-components";

// WelcomeScreen.js styles

export const WelcomeScreenJS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 25vh;

    img {
        width: 30%;
        border: 2px solid white;
        border-radius: 10px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0, 0.25));
    }

    h1 {
        color: white;
        width: 50%;
        text-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
        font-size: 24px;
        margin-top: 21px;
    }

    @media screen and (min-width: 480px) {
        width: 50vw;
        padding-top: 0vh;

        img {
            width: 20%;
        }

        h1 {
            width: 50%;
            text-align: center;
        }
    }
`;

// InputText.js styles

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    
    label {
         //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input {
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
        box-sizing: border-box;
        padding-left: 15px;
        margin-top: 30px;
    }

    @media screen and (min-width: 480px) {
        width: 50vw;

        input {
            width: 40%;
            margin-top: 10px;
        }
    }
`;

// StartButton.js styles

export const StartButtonJS = styled.div`
    width: 40%;
    height: 40px;

    button {
        width: 100%;
        height: 100%;
        background-color: #e26fff;
        border-radius: 10px;
        border: 1px solid white;
        font-size: 16px;
        color: white;
        font-weight: bold;
        margin-top: 30px;
    }

    button:hover {
        border: 1px solid #e26fff;
    }

    button:active {
        border: 1px solid #e26fff;
        background-color: white;
        color: #e26fff;
    }

    @media screen and (min-width: 480px) {
        display: flex;
        justify-content: center;

        button {
            width: 70%;
        }
    }
`;