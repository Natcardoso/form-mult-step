import styled from "styled-components";

export const Body = styled.div``;

export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    input[type="radio"]:checked + label {
        border: 2px solid var(--purple-03);
    }

    input[type="radio"] {
        display: none;
    }
`;

export const Card = styled.label`
    background: transparent;
    border: 2px solid var(--color-border);
    display: flex;
    flex-direction: column;
    padding: 3rem 0 2rem 0;
    border-radius: 2rem;
    width: 28%;
    align-items: center;
    color: var(--purple-04);
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s linear;

    svg,
    img {
        margin-bottom: 1.5rem;
    }

    :hover,
    :focus {
        border: 2px solid var(--purple-03);
    }
`;
