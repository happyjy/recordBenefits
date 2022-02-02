import React, { useEffect, useState } from "react";
import Input from "../component/Input";
import styled from "styled-components";
import { TextField } from "@mui/material";

const Component = ({
  mode,
  content,
  price,
  setPrice,
  onClickCreate,
  onClickEdit,
  onKeyPress,
}) => {
  console.log("input !", { price, setPrice });

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Input
      // id="outlined-basic"
      type="number"
      min="1"
      placeholder="금액"
      size="small"
      value={price}
      required
      onChange={(e) => onChangePrice(e)}
      onKeyPress={(e) => onKeyPress({ e, onClickCreate, onClickEdit })}
      // addTextFeild='true'
    />
  );
};

const usePriceInput = ({
  mode,
  content,
  onClickCreate,
  onClickEdit,
  onKeyPress,
}) => {
  const [price, setPrice] = useState(123);

  return [
    price,
    setPrice,
    <Component
      mode={mode}
      content={content}
      price={price}
      setPrice={setPrice}
      onClickCreate={onClickCreate}
      onClickEdit={onClickEdit}
      onKeyPress={onKeyPress}
    />,
  ];
};

export default usePriceInput;
