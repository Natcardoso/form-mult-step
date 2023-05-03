import React, { useState } from "react";
import { ContainerStep, Title } from "../../styles/app-styled";
import { Card, ContainerCards } from "../StepOne/styles";
import Target from "./assets/target.svg";
import Lamp from "./assets/lamp.svg";
import { Idata } from "../../App";

type Props = {
    data: Idata;
    update: (key: string, value: string | number) => void;
};

export const StepFive = ({ data, update }: Props) => {
    const [checked, setChecked] = useState(data.projectBanner);

    return (
        <ContainerStep>
            <Title>Em qual faixa de projeto você está?</Title>

            <ContainerCards>
                <input
                    type="radio"
                    id="5.000"
                    onClick={() => {
                        update("projectBanner", "5.000");
                        setChecked("5.000");
                    }}
                    checked={checked == "5.000"}
                />
                <Card htmlFor="5.000">
                    <Target />
                    <span>R$ 5.000 +</span>
                </Card>
                <input
                    type="radio"
                    id="10.000"
                    onClick={() => {
                        update("projectBanner", "10.000");
                        setChecked("10.000");
                    }}
                    checked={checked == "10.000"}
                />
                <Card htmlFor="10.000">
                    <img src="https://assets.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6de80d683b9d_Price%20Tier%2002.svg" />
                    <span>R$ 10.000 +</span>
                </Card>
                <input
                    type="radio"
                    id="20.000"
                    onClick={() => {
                        update("projectBanner", "20.000");
                        setChecked("20.000");
                    }}
                    checked={checked == "20.000"}
                />
                <Card htmlFor="20.000">
                    <Lamp />
                    <span>R$ 20.000 +</span>
                </Card>
            </ContainerCards>
        </ContainerStep>
    );
};
