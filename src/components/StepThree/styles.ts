import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.label`
    border: 2px solid var(--color-border);
    display: flex;
    flex-direction: column;
    padding: 3rem 0 2rem 0;
    border-radius: 2rem;
    width: 46%;
    align-items: center;
    color: var(--purple-04);
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s linear;

    svg {
        margin-bottom: 1.5rem;
    }

    :hover,
    :focus {
        border: 2px solid var(--purple-03);
    }
`;
