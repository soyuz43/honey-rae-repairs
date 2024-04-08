export const App = () => {
  
  const handleBtnClck = () => {
    console.log("clicked!")
  }
  return (
    <>
      <h1>hello</h1>
      <div>This is react!</div>
      <button className="btn-secondary" onClick={() => {}}>CLickME</button>
    </>
  );
};
