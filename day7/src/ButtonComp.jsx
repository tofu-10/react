function ButtonComp({ message, children, style }) {
  console.log(children);
  return (
    <button
        style={style}

      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonComp;