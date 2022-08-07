import styled from "styled-components";

// MatchesList.js styles

export const MatchesListJS = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 480px) {
        width: 100%;
    }

`

export const MatchesTitle = styled.h1`
    width: 50%;
    height: 40px;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-top: 10vh;

    @media screen and (min-width: 480px) {
        width: 100%;
    }
`

// ProfileU.js styles

export const ProfileUJS = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background-color: #ddd;
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 20px;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid black;
        margin-left: 10px;
    }

    p {
        font-size: 0.9rem;
        margin-left: 15px;
    }
    
    @media screen and (min-width: 480px) {
        width: 25%;
    }

`

// MatchesItem.js styles

export const MatchesItemJS = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background-color: #ddd;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;

    button {
        width: 50px;
        height: 100%;
        border: 1px solid black;
    }

    img {
        width: 20px;
        height: 20px;
    }

    @media screen and (min-width: 480px) {
        width: 25%;
    }
`
export const ContainerItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid black;
        margin-left: 10px;
    }

    p {
        font-size: 0.9rem;
        margin-left: 15px;
    }
`