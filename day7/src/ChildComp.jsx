function ChildComp({ title, func }) {
  return <button onClick={func}>{title}</button>;
}

export default ChildComp;
