import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  const [emailText, setEmailText] = useState("");
  const [perfectEmailText, setPerfectEmailText] = useState("");
  return (
    <>
      <Landing />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route
          path="/form"
          element={
            <Form
              setEmailText={setEmailText}
              setPerfectEmailText={setPerfectEmailText}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result emailText={emailText} perfectEmailText={perfectEmailText} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
