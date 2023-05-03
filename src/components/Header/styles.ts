import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--border-header);
    border-radius: 1rem;
    margin-bottom: 5rem;
    padding: 0 2rem;
`;

export const ContainerStep = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;

    .line {
        border: 1px solid #dfdfe873;
        height: 2rem;
        margin-left: 1rem;
    }
`;

export const Line = styled.div`
    margin: 1.5rem 1rem;
    width: 1px;
    height: 2rem;
    background: var(--color-border);
`;

type Props = {
    active: boolean;
    check: boolean;
};

export const StepSvg = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    color: var(--color-icon);
    background: var(--white);
    background: ${({ active, check }) =>
        (active && "var(--purple-03)") || (check && "#f5f1ff")};
    color: ${({ active, check }) =>
        (active && "var(--white)") || (check && "var(--purple-03)")};
    padding: 1rem;
    transition: color 0.3s linear;
`;

const animationDetails = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    animation: ${animationDetails} 0.8s forwards;

    span {
        font-weight: 700;
    }

    span:nth-child(1) {
        font-size: 14px;
        color: var(--purple-03);
    }
`;
