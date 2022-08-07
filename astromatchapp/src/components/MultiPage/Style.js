import styled from "styled-components";

// UiController.js styles

export const UiControllerJS = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;



    button {
        width: 50%;
        border: 1px solid black;
    }

    img {
        padding-top: 3px;
        height: 60%;
    }

    @media screen and (max-width: 479px) {
        top: 750px;
        position: fixed;
    }

    @media screen and (min-width: 480px) {
        bottom: 0px;
        position: fixed;

        width: 25%;
    }
`