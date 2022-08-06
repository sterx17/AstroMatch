import styled from "styled-components";

// ChoiceScreen.js styles

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2.6vh 0 2vh 0;
`

// Profile.js styles

export const ProfileJS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 92vw;
    height: 80vh;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 15px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        border: 3px solid white;
        margin-bottom: 15px;
    }
`;

export const Bio = styled.section`
    background-color: white;
    width: 92vw;
    height: 70px;
    border-radius: 10px;
    border: 1px solid black;

    h3 {
        box-sizing: border-box;
        margin: 7px 0 0 10px;
        padding: 0;
        font-size: 16px;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    }

    p {
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        margin: 0;
        padding: 5px 10px;
    }
`

// Button.js styles

export const ButtonJS = styled.button`
    width: 73px;
    height: 73px;
    border-radius: 50%;
    padding-top: 4px;
    border: 1px solid black;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));

    img {
        width: 65%;
    }
`