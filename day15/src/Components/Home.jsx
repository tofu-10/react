function Home({ count, setCount }) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "auto" }}>
          <h1>Welcome to the page</h1>
          <h2>We are learning Router react</h2>
          <div>count: {count}</div>
          <button onClick={() => setCount((count = count + 1))}>Add</button>
        </div>
      </div>
    </>
  );
}
export default Home;
  