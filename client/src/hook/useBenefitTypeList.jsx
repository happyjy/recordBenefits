import React, { useState } from "react";
import styled from "styled-components";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Chip } from "@mui/material";

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;
`;

const initTagList = [
  { id: 0, label: "복지", status: true },
  { id: 1, label: "야근", status: false },
  { id: 2, label: "사무용품", status: false },
];
const iconList = {
  0: { label: "복지", icon: <SentimentVerySatisfiedIcon /> },
  1: { label: "야근", icon: <NightlightIcon /> },
  2: { label: "사무용품", icon: <WorkOutlineIcon /> },
};

const useBenefitTypeList = () => {
  const [tagList, setTagList] = useState(initTagList);
  const onClickTag = (num) => {
    setTagList((prev) => {
      return [
        ...prev.map((v) => {
          v.status = v.id === num ? true : false;
          return v;
        }),
      ];
    });
  };
  const component = () => (
    <ChipsContainer>
      {tagList?.map((v, i) => {
        return (
          <Chip
            key={v.id}
            label={iconList[v.id].label}
            onClick={() => onClickTag(v.id)}
            variant={v.status ? "outlined" : "contained"}
            size="small"
            icon={iconList[v.id].icon}
          />
        );
      })}
    </ChipsContainer>
  );
  return [iconList, tagList, setTagList, component];
};

export default useBenefitTypeList;
