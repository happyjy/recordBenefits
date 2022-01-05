import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const RecordContainer = styled.div`
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
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
  flex-direction: row;
  column-gap: 1rem;
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
  padding: 1rem;
  margin: 0.3rem 0;
  background: rgba(255, 255, 255, 0.1);
`;
const ListItem = styled.div``;
const ControlItemConteinr = styled.div``;

const rows = [
  {
    id: 1,
    tag: '복지',
    date: '2022-01-06',
    content: '24/7 코트',
    price: 280000,
    receipt: '',
  },
  {
    id: 2,
    tag: '복지',
    date: '2022-01-16',
    content: '24/7 니트',
    price: 50000,
    receipt: '',
  },
  {
    id: 3,
    tag: '복지',
    date: '2022-01-20',
    content: '무텐다드 바지',
    price: 30000,
    receipt: '',
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
  return (
    <RecordContainer>
      <Title>복지 기록 하기</Title>
      <FormContainer>
        <AddTextFeild id='outlined-basic' />
        <AddButton variant='contained'>ADD</AddButton>
      </FormContainer>
      <ListContainer>
        {rows.map((v) => (
          <ListItemContainer index={v.id}>
            <ListItem>{v.id}</ListItem>
            <ListItem>{v.tag}</ListItem>
            <ListItem>{v.date}</ListItem>
            <ListItem style={{ minWidth: '200px', textAlign: 'left' }}>{v.content}</ListItem>
            <ListItem>{v.receip}</ListItem>
          </ListItemContainer>
        ))}
        <ControlItemConteinr></ControlItemConteinr>
      </ListContainer>
      {/* <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </div> */}
    </RecordContainer>
  );
};
export default Record;
