import styled, { keyframes } from "styled-components";

const showContent = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
    animation: ${showContent} 0.5s linear;
`;

export const Content = styled.div`
    margin-top: 2rem;

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;

        label {
            margin-bottom: 0.5rem;
        }

        input {
            padding: 1.5rem 1rem;
            border: none;
            background: var(--white);
            border-radius: 8px;

            :focus {
                outline: 1px solid var(--purple-03);
            }

            ::-webkit-input-placeholder {
                color: var(--gray);
                font-size: 16px;
            }
        }
    }
`;
