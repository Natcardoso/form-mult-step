import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #0e0e0e70;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const animationShow = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Modal = styled.div`
    width: 30%;
    height: 50%;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${animationShow} 1s forwards;

    .gifSuccess {
        width: 50%;
    }

    span {
        color: gray;
    }
`;
