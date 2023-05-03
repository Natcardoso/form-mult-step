import React, { useState } from "react";
import { Card, ContainerCards } from "./styles";
import { ContainerStep, Title } from "../../styles/app-styled";
import { Idata } from "../../App";

type Props = {
    data: Idata;
    update: (key: string, value: string | number) => void;
};

export const StepOne = ({ data, update }: Props) => {
    const [checked, setChecked] = useState(data.services);

    const handleChange = (id: string) => {
        update("services", id);
        setChecked(id);
    };

    return (
        <ContainerStep>
            <Title>Quais serviços você precisa?</Title>
            <ContainerCards>
                <input
                    type="radio"
                    id="design"
                    onClick={() => handleChange("design")}
                    checked={checked == "design"}
                />
                <Card htmlFor="design">
                    <img src="https://assets.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d3ded683ba0_Icon%20Art.svg" />
                    <span>Design</span>
                </Card>
                <input
                    type="radio"
                    id="development"
                    onClick={() => handleChange("development")}
                    checked={checked == "development"}
                />
                <Card htmlFor="development">
                    <img src="https://assets.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6da0a6683b8e_Icon%20Message.svg" />
                    <span>Desenvolvimento</span>
                </Card>
                <input
                    type="radio"
                    id="other"
                    onClick={() => handleChange("other")}
                    checked={checked == "other"}
                />
                <Card htmlFor="other">
                    <img src="https://assets.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d9c3d683b8c_Icon%20Glass.svg" />
                    <span>Outros</span>
                </Card>
            </ContainerCards>
        </ContainerStep>
    );
};
