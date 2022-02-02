import React, { useEffect, useState } from "react";
import Input from "../component/Input";
import styled from "styled-components";
import { TextField } from "@mui/material";

const Component = ({
  mode,
  price,
  content,
  setContent,
  onClickCreate,
  onClickEdit,
  onKeyPress,
}) => {
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Input
      // id="outlined-basic"
      placeholder="입력하세요"
      size="small"
      value={content}
      onChange={(e) => onChangeContent(e)}
      onKeyPress={(e) => onKeyPress({ e, onClickCreate, onClickEdit })}
      required
      // addTextFeild='true'
    />
  );
};

const useContentInput = ({
  mode,
  price,
  onClickCreate,
  onClickEdit,
  onKeyPress,
}) => {
  const [content, setContent] = useState("");

  return [
    content,
    setContent,
    <Component
      mode={mode}
      price={price}
      content={content}
      setContent={setContent}
      onClickCreate={onClickCreate}
      onClickEdit={onClickEdit}
      onKeyPress={onKeyPress}
    />,
  ];
};

export default useContentInput;
