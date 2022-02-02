import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./Record.css";
import Button from "@mui/material/Button";
import { Chip, TextField } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import EditIcon from "@mui/icons-material/Edit";
import { MobileDatePicker } from "@mui/lab";
import { format } from "date-fns";
import useBenefitTypeList from "../hook/useBenefitTypeList";
import useDatePicker from "../hook/useDatePicker";
import usePriceInput from "../hook/usePriceInput";
import useContentInput from "../hook/useContentInput";

const RecordContainer = styled.div`
  margin: 1.5rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  height: 100vh;
  background: #ff6666;
  color: #fff;
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
`;
const Title = styled.h1`
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const FormContainer = styled.div`
  /* border: 1px solid; */
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;
const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.3rem;
`;

const AddTextFeild = styled(TextField)`
  /* height: 1.5rem; */
  border: 1px solid yellow;
  width: 100%;
`;
const AddButton = styled(Button)`
  /* line-height: 1.5rem; */
`;
const ListContainer = styled.div``;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.6rem;
  justify-content: space-between;
  margin: 0.3rem 0;
  padding: 0.3rem;
  background: rgba(255, 255, 255, 0.1);
`;
const ListItemLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;
`;
const ListItemRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.3rem;
  justify-content: center;
  align-items: center;
`;
const ListItem = styled.div``;
const ControlItemConteinr = styled.div``;
const Edit = styled(EditIcon)`
  cursor: pointer;
`;
const Delete = styled(DeleteIcon)`
  cursor: pointer;
`;

const DownLoadButton = styled(Button)``;

const dummyData = [
  {
    id: 1,
    tag: 2,
    date: new Date(),
    content: "24/7 코트",
    price: 280000,
    receipt: "file갯수",
  },
  {
    id: 2,
    tag: 1,
    date: new Date(),
    content: "24/7 니트",
    price: 50000,
    receipt: "file갯수",
  },
  {
    id: 3,
    tag: 0,
    date: new Date(),
    content: "무텐다드 바지",
    price: 30000,
    receipt: "file갯수",
  },
];

// const iconList = {
//   0: { label: "복지", icon: <SentimentVerySatisfiedIcon /> },
//   1: { label: "야근", icon: <NightlightIcon /> },
//   2: { label: "사무용품", icon: <WorkOutlineIcon /> },
// };
// const initTagList = [
//   { id: 0, label: "복지", status: true },
//   { id: 1, label: "야근", status: false },
//   { id: 2, label: "사무용품", status: false },
// ];
const Record = () => {
  const fileuploadRef = useRef();
  // { type: "WRITE", index: null}, { type: EDIT, index: int}
  const [mode, setMode] = useState({ type: "WRITE", index: null });
  const [benefitsList, setBenefitsList] = useState(dummyData);
  // const [tagList, setTagList] = useState(initTagList);
  // const [usedBenefitDate, setUsedBenefitDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState("");
  // const [content, setContent] = useState("");
  // const [price, setPrice ] = useState();

  const benefitInfo = useRef([]);
  // const contentRef = useRef([]);

  const onClickEditIcon = (e, id) => {
    // benefitInfo.current.contenteditable = !benefitInfo.current.contenteditable;
    const {
      id: benefitsId,
      tag,
      date,
      price,
      content,
    } = benefitsList.filter((v) => {
      return v.id === id;
    })[0];

    tagList.map(
      (v) => (v.id === tag ? (v.status = true) : (v.status = false), v)
    );
    setUsedBenefitDate(date);
    setPrice(price);
    setContent(content);

    setMode({ type: "EDIT", index: id });
  };
  const onClickDelete = (e, id) => {
    setBenefitsList((prev) => prev.filter((v) => v.id !== id));
  };
  const onClickUploadRecipt = (e) => {
    fileuploadRef && fileuploadRef.current && fileuploadRef.current.click();
  };

  useEffect(() => {
    setTotalPrice(
      benefitsList.reduce((prev, curr) => {
        return { price: prev.price + curr.price };
      }).price
    );
  }, [benefitsList]);

  // useEffect(() => {}, [tagList]);

  // const onClickTag = (num) => {
  //   setTagList((prev) => {
  //     return [
  //       ...prev.map((v) => {
  //         v.status = v.id === num ? true : false;
  //         return v;
  //       }),
  //     ];
  //   });
  // };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  // const onKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     // TODO: toast ui 만들기
  //     if (!content || !price) return;

  //     if (mode.type === "WRITE") onClickCreate();
  //     if (mode.type === "EDIT") onClickEdit();
  //   }
  // };
  const onInitForm = () => {
    setTagList((prev) =>
      prev.map((v, i) => {
        i === 0 ? (v.status = true) : (v.status = false);
        return v;
      })
    );
    setContent("");
    setPrice("");
    setMode({ type: "WRITE", index: null });
  };
  const onClickCreate = (e) => {
    console.log("onClickCreate");
    if (!content || !price) return;

    setBenefitsList((prev) => {
      return [
        ...prev,
        {
          id: benefitsList.length + 1,
          tag: tagList.filter((v) => v.status)[0].id,
          date: usedBenefitDate,
          price: parseInt(price),
          content,
        },
      ];
    });

    onInitForm();
  };
  const onClickEdit = (e) => {
    console.log("onClickEdit");
    setBenefitsList((prev) =>
      prev.map((v) => {
        if (v.id === mode.index) {
          v = {
            ...v,
            tag: tagList.filter((v) => v.status)[0].id,
            date: usedBenefitDate,
            price: parseInt(price),
            content,
          };
        }
        return v;
      })
    );

    onInitForm();
  };
  const onClickCancle = (e) => {
    setMode({ type: "WRITE", index: null });
    onInitForm();
  };

  const onKeyPress = ({ e, onClickCreate, onClickEdit }) => {
    if (e.key === "Enter") {
      console.log("--- Enter");
      // TODO: toast ui 만들기
      if (!content || !price) return;

      if (mode.type === "WRITE") onClickCreate();
      if (mode.type === "EDIT") onClickEdit();
    }
  };

  // customHooks
  const [iconList, tagList, setTagList, BenefitTypeListComponent] =
    useBenefitTypeList();
  const [usedBenefitDate, setUsedBenefitDate, DatePickerComponent] =
    useDatePicker();
  var [price, setPrice, PriceInputComponent] = usePriceInput({
    mode,
    content,
    onClickCreate,
    onClickEdit,
    onKeyPress,
  });
  var [content, setContent, ContentInputComponent] = useContentInput({
    mode,
    price,
    onClickCreate,
    onClickEdit,
    onKeyPress,
  });

  return (
    <RecordContainer>
      <Title>복지 기록 하기</Title>
      <FormContainer>
        <FormItem style={{ justifyContent: "space-between" }}>
          <BenefitTypeListComponent />
          {/* <ChipsContainer>
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
          </ChipsContainer> */}
          <DatePickerComponent />
          {/* <div className="calendar" style={{ height: "24px", width: "100px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                value={usedBenefitDate}
                onChange={(newValue) => {
                  setUsedBenefitDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="yyyy.MM.dd"
              />
            </LocalizationProvider>
          </div> */}
        </FormItem>
        <FormItem>
          {PriceInputComponent}
          {/* <PriceInputComponent price={price} setPrice={setPrice} /> */}
          {/* <AddTextFeild
            type="number"
            min="1"
            value={price}
            onChange={(e) => onChangePrice(e)}
            onKeyPress={(e) => onKeyPress(e)}
            // addTextFeild='true'
            id="outlined-basic"
            placeholder="금액"
            size="small"
            required
          /> */}
          {ContentInputComponent}
          {/* <AddTextFeild
            value={content}
            onChange={(e) => onChangeContent(e)}
            onKeyPress={(e) => onKeyPress(e)}
            // addTextFeild='true'
            id="outlined-basic"
            placeholder="입력하세요"
            size="small"
            required
          /> */}
          {mode.type === "WRITE" && (
            <AddButton onClick={(e) => onClickCreate(e)} variant="contained">
              ADD
            </AddButton>
          )}
          {mode.type === "EDIT" && (
            <AddButton onClick={(e) => onClickEdit(e)} variant="contained">
              EDIT
            </AddButton>
          )}
          {mode.type === "EDIT" && (
            <AddButton onClick={(e) => onClickCancle(e)} variant="contained">
              CANCLE
            </AddButton>
          )}
        </FormItem>
      </FormContainer>
      <ListContainer>
        {/* 합계 */}
        <ListItemContainer>
          <ListItemRightContainer>
            <ListItem>총 금액: {totalPrice}</ListItem>
            {/* <div contentEditable={true}>23</div> */}
          </ListItemRightContainer>
        </ListItemContainer>
        {benefitsList.map((v) => (
          <ListItemContainer key={v.id} index={v.id}>
            <ListItemLeftContainer
              ref={(el) => (benefitInfo.current[v.id] = el)}
            >
              <ListItem>{v.id}</ListItem>
              <ListItem>{iconList[v.tag].label}</ListItem>
              <ListItem>{format(v.date, "yyyy.MM.dd")}</ListItem>
              <ListItem /* contentEditable={true} */>{v.price}</ListItem>
              <ListItem
                style={{
                  minWidth: "70px",
                  maxWidth: "200px",
                  textAlign: "left",
                }}
              >
                {v.content}
              </ListItem>
            </ListItemLeftContainer>
            <ListItemRightContainer>
              <ListItem>{v.receipt}</ListItem>
              <CloudUploadOutlinedIcon
                onClick={(e) => onClickUploadRecipt(e)}
              />
              <Edit onClick={(e) => onClickEditIcon(e, v.id)} />
              <Delete onClick={(e) => onClickDelete(e, v.id)} />
            </ListItemRightContainer>
          </ListItemContainer>
        ))}
        <input ref={fileuploadRef} type="file" multiple={true} hidden />
        <ControlItemConteinr></ControlItemConteinr>
      </ListContainer>
    </RecordContainer>
  );
};
export default Record;
