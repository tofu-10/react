import { LoginFormHook } from "./components/LoginFormHook"
import FetchUsers from "./components/fetchapi/FetchUsers";
import AxiosPost from "./components/fetchapi/AxiosPost";
function App() {
  return (
    <>
      <LoginFormHook />
      <FetchUsers />
      <AxiosPost />
    </>
  )
}
export default App;