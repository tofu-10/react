import Greeting from "./Greetings.jsx";
import { Name } from "./Greetings.jsx";
import { Player } from "./Javourite.jsx";
export default App;
function App() {
  return (
    <>
      <h1>hello</h1>
      <Name />
      {/* <Greeting Name={"Tofuu"}/> */}
      <Greeting firstName={"Budapest"} lastName={"Puuuuuuuumaaaaa"} />
      <Player/>
      <Player/>
    </>
  );
}
