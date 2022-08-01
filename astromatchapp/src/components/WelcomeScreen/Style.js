import styled from "styled-components";

// WelcomeScreen.js styles

export const WelcomeScreenJS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 30%;
        border: 2px solid white;
        border-radius: 10px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0, 0.25));
        position: absolute;
        top: 200px
    }

    h1 {
        color: white;
        width: 50%;
        text-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
        font-size: 24px;
        position: relative;
        top: 330px
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
        position: relative;
        top: 350px
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
        position: relative;
        top: 380px;
    }
`;