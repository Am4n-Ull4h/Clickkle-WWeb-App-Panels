import React from "react";
import { Route, Routes } from "react-router-dom";
import "./utilities/axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import DataAndPrivacy from "./pages/DataAndPrivacy";
import Security from "./pages/Security";
import PeopleAndSharing from "./pages/PeopleAndSharing";
import PaymentAndSubs from "./pages/PaymentAndSubs";
import Storage from "./components/Storage/Storage";
import {ImgValue} from "./context/ImgContext";

const App = () => {
  return (
    <ImgValue>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalInfo />} />
          <Route path="/data" element={<DataAndPrivacy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/sharing" element={<PeopleAndSharing />} />
          <Route path="/payment" element={<PaymentAndSubs />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </Header>
    </ImgValue>
  );
};

export default App;
