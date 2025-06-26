export function StudentCard({ firstName, lastName, age, rollno, classes }) {
  function handleEvent() {
    alert(`${firstName} ${lastName}`);
  }
  return (
    <>
      <div className="card " onClick={handleEvent}>
        <h1>
         {firstName} {lastName}
        </h1>
        <p>Age: {age}</p>
        <p>Roll No: {rollno}</p>
        <p>class: {classes}</p>
      </div>
      <hr />
    </>
  );
}
