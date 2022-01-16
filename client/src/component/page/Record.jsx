import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './Record.css';
import Button from '@mui/material/Button';
import { Chip, TextField } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { MobileDatePicker } from '@mui/lab';
import { format } from 'date-fns';

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

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const DownLoadButton = styled(Button)``;

const Record = () => {
  const dummyData = [
    {
      id: 1,
      tag: 2,
      date: new Date(),
      content: '24/7 코트',
      price: 280000,
      receipt: 'file갯수',
    },
    {
      id: 2,
      tag: 1,
      date: new Date(),
      content: '24/7 니트',
      price: 50000,
      receipt: 'file갯수',
    },
    {
      id: 3,
      tag: 0,
      date: new Date(),
      content: '무텐다드 바지',
      price: 30000,
      receipt: 'file갯수',
    },
  ];
  const iconList = {
    0: { label: '복지', icon: <SentimentVerySatisfiedIcon /> },
    1: { label: '야근', icon: <NightlightIcon /> },
    2: { label: '사무용품', icon: <WorkOutlineIcon /> },
  };

  const fileuploadRef = useRef();
  const [tagList, setTagList] = useState([
    { id: 0, label: '복지', status: true },
    { id: 1, label: '야근', status: false },
    { id: 2, label: '사무용품', status: false },
  ]);
  const [date, setDate] = useState(new Date());
  const [content, setContent] = useState('');
  const [price, setPrice] = useState();
  const [benefitsList, setBenefitsList] = useState(dummyData);

  const onClickDelete = (e, id) => {
    console.log({ e, id });
    setBenefitsList((prev) => prev.filter((v) => v.id !== id));
  };
  const onClickUploadRecipt = (e) => {
    fileuploadRef && fileuploadRef.current && fileuploadRef.current.click();
  };
  useEffect(() => {
    // console.log({ tagList });
  }, [tagList]);

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
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      // TODO: toast ui 만들기
      if (!content || !price) return;
      onClickButton();
      setContent('');
      setPrice('');
    }
  };
  const onClickButton = (e) => {
    console.log({ tag: tagList.filter((v) => v)[0], date, content });
    setBenefitsList((prev) => {
      return [...prev, { id: benefitsList.length + 1, tag: tagList.filter((v) => v.status)[0].id, date, price, content }];
    });
  };

  return (
    <RecordContainer>
      <Title>복지 기록 하기</Title>
      <FormContainer>
        <FormItem style={{ justifyContent: 'space-between' }}>
          <ChipsContainer>
            {tagList?.map((v, i) => {
              return (
                <Chip
                  key={v.id}
                  label={iconList[v.id].label}
                  onClick={() => onClickTag(v.id)}
                  variant={v.status ? 'outlined' : 'contained'}
                  size='small'
                  icon={iconList[v.id].icon}
                />
              );
            })}
          </ChipsContainer>
          <div className='calendar' style={{ height: '24px', width: '100px' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat='yyyy.MM.dd'
              />
            </LocalizationProvider>
          </div>
        </FormItem>
        <FormItem>
          <AddTextFeild
            type='number'
            value={price}
            onChange={(e) => onChangePrice(e)}
            onKeyPress={(e) => onKeyPress(e)}
            AddTextFeild='true'
            id='outlined-basic'
            placeholder='금액'
            size='small'
            required
          />
          <AddTextFeild
            value={content}
            onChange={(e) => onChangeContent(e)}
            onKeyPress={(e) => onKeyPress(e)}
            AddTextFeild='true'
            id='outlined-basic'
            placeholder='입력하세요'
            size='small'
            required
          />
          <AddButton onClick={(e) => onClickButton(e)} variant='contained'>
            ADD
          </AddButton>
        </FormItem>
      </FormContainer>
      <ListContainer>
        {benefitsList.map((v) => (
          <ListItemContainer key={v.id} index={v.id}>
            <ListItemLeftContainer>
              <ListItem>{v.id}</ListItem>
              <ListItem>{iconList[v.tag].label}</ListItem>
              <ListItem>{format(v.date, 'yyyy.MM.dd')}</ListItem>
              <ListItem>{v.price}</ListItem>
              <ListItem style={{ minWidth: '70px', maxWidth: '200px', textAlign: 'left' }}>{v.content}</ListItem>
            </ListItemLeftContainer>
            <ListItemRightContainer>
              <ListItem>{v.receipt}</ListItem>
              <CloudUploadOutlinedIcon onClick={(e) => onClickUploadRecipt(e)} />
              <DeleteIcon onClick={(e) => onClickDelete(e, v.id)} />
            </ListItemRightContainer>
          </ListItemContainer>
        ))}
        <input ref={fileuploadRef} type='file' multiple='true' hidden />
        <ControlItemConteinr></ControlItemConteinr>
      </ListContainer>
    </RecordContainer>
  );
};
export default Record;
