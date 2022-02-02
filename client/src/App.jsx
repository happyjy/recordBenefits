import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Layout from "./base/Layout";
import { RecoilRoot } from "recoil";
import Record from "./page/Record";
import NotFound from "./page/NotFound";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          {/* <Route path='/' element={<Layout />}> */}
          <Route index element={<Record />} />
          <Route path="*" element={<NotFound />} />
          {/* </Route> */}
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
