import { LoginFormHook } from "./components/LoginFormHook";
import FetchUsers from "./components/fetchapi/FetchUsers";
import AxiosPost from "./components/fetchapi/AxiosPost";
import React from "react";
import { ToDos } from "./components/fetchapi/ToDos";
import { Comment } from "./components/fetchapi/Comment";
import { ReactMemoExample } from "./optimizations/ReactMemoExample";
import { UseMemoExample } from "./optimizations/UseMemoExample";
function App() {
  return (
    <>
      {/* <LoginFormHook /> */}
      {/* <FetchUsers /> */}
      <UseMemoExample />
      {/* <AxiosPost /> */}
      {/* <ToDos /> */}
      {/* <Comment/> */}
      <ReactMemoExample />
    </>
  );
}
export default App;
