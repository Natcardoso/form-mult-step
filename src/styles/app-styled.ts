import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
`;

export const Content = styled.div`
    background-color: #fff;
    width: 750px;
    height: 70%;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ButtonActions = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        font-size: 18px;
        padding: 1.5rem 3rem;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s;
    }

    .buttonBack {
        background-color: transparent;
        color: var(--gray);

        :hover {
            color: var(--purple-04);
        }
    }

    .buttonNext {
        color: white;
        background: var(--purple-04);
        border-radius: 1rem;

        :hover {
            background: var(--purple-03);
        }
    }
`;

export const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
`;

export const SubTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-top: 0.5rem;
    color: var(--gray);
`;

const showContent = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const ContainerStep = styled.div`
    animation: ${showContent} 1s forwards;
`;
