import { StudentCard } from "./Details.jsx";
import {Counterer} from "./Counter.jsx"
export default App;
function App() {
  return (
    <>
      <div className="TotalBox">
        <StudentCard
          firstName={"Rijan"}
          lastName={"shrestha"}
          age={20}
          rollno={10}
          classes={"csit"}
        />
        <StudentCard
          firstName={"Krishna"}
          lastName={"Ronaldo"}
          age={20}
          rollno={10}
          classes={"csit"}
        />
        <StudentCard
          firstName={"Lional"}
          lastName={"Messi"}
          age={20}
          rollno={10}
          classes={"csit"}
        />
      </div>
      <div className="hello">
        <Counterer />
      </div>
    </>
  );
}
