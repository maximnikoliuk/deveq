import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

function App() {
  return (
    <>
      <Landing />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
