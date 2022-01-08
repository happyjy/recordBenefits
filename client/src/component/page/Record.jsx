import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import './Record.css';
import Button from '@mui/material/Button';
import { Chip, TextField } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarPicker from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { DatePicker, MobileDatePicker } from '@mui/lab';

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
const rows = [
  {
    id: 1,
    tag: '복지',
    date: '2022-01-06',
    content: '24/7 코트',
    price: 280000,
    receipt: 'File2',
  },
  {
    id: 2,
    tag: '복지',
    date: '2022-01-16',
    content: '24/7 니트',
    price: 50000,
    receipt: 'File2',
  },
  {
    id: 3,
    tag: '복지',
    date: '2022-01-20',
    content: '무텐다드 바지',
    price: 30000,
    receipt: 'File2',
  },
];

// const columns = [
//   { field: 'id', headerName: 'id', width: 20 },
//   { field: 'tag', headerName: 'tag', width: 40 },
//   { field: 'date', headerName: 'date', width: 80 },
//   { field: 'content', headerName: 'content', width: 200 },
//   { field: 'price', headerName: 'price', width: 70 },
//   { field: 'receipt', headerName: 'receipt', width: 40 },
// ];

const Record = () => {
  const fileuploadRef = useRef();
  const [tagList, setTagList] = useState([true, false, false]);

  const onClickDelete = (e) => {};
  const onClickUploadRecipt = (e) => {
    fileuploadRef && fileuploadRef.current && fileuploadRef.current.click();
  };
  const onClickTag = (num) => {
    setTagList(
      Array.from({ length: 3 }, (_, i) => {
        return i === num ? true : false;
      }),
    );
  };

  return (
    <RecordContainer>
      <Title>복지 기록 하기</Title>
      <FormContainer>
        <FormItem style={{ justifyContent: 'space-between' }}>
          <ChipsContainer>
            <Chip
              label='복지'
              onClick={() => onClickTag(0)}
              variant={tagList[0] ? `contained` : `outlined`}
              size='small'
              icon={<SentimentVerySatisfiedIcon />}
            />
            <Chip
              label='야근'
              onClick={() => onClickTag(1)}
              variant={tagList[1] ? `contained` : `outlined`}
              size='small'
              icon={<NightlightIcon />}
            />
            <Chip
              label='사무용품'
              onClick={() => onClickTag(2)}
              variant={tagList[2] ? `contained` : `outlined`}
              size='small'
              icon={<WorkOutlineIcon />}
            />
          </ChipsContainer>
          <div className='calendar' style={{ height: '24px', width: '100px' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                // value={value}
                onChange={(newValue) => {
                  // setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat='yyyy.MM.dd'
              />
            </LocalizationProvider>
          </div>
        </FormItem>
        <FormItem>
          <AddTextFeild AddTextFeild='true' id='outlined-basic' placeholder='입력하세요' size='small' required />
          <AddButton variant='contained'>ADD</AddButton>
        </FormItem>

        {/* <MobileDatePicker /> */}
      </FormContainer>
      <ListContainer>
        {rows.map((v) => (
          <ListItemContainer index={v.id}>
            <ListItemLeftContainer>
              <ListItem>{v.id}</ListItem>
              <ListItem>{v.tag}</ListItem>
              <ListItem>{v.date}</ListItem>
              <ListItem style={{ minWidth: '70px', maxWidth: '200px', textAlign: 'left' }}>{v.content}</ListItem>
              <ListItem>{v.price}</ListItem>
            </ListItemLeftContainer>
            <ListItemRightContainer>
              <ListItem>{v.receipt}</ListItem>
              <CloudUploadOutlinedIcon onClick={(e) => onClickUploadRecipt(e)} />
              <DeleteIcon onClick={(e) => onClickDelete(e)} />
            </ListItemRightContainer>
          </ListItemContainer>
        ))}
        <input ref={fileuploadRef} type='file' multiple='true' hidden />
        <ControlItemConteinr></ControlItemConteinr>
      </ListContainer>
      {/* <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </div> */}
    </RecordContainer>
  );
};
export default Record;
