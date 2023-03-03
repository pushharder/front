import React, {useEffect, useState} from 'react';

function App() {
  const [result, setRes] = useState();
  useEffect(() => {
    fetch('http://localhost:4000').then(res => res.json()).then(res => setRes(res.message));
  }, []);

  return (
    <>
      <div>asdfljasdlasdfj</div>
      {result ? <div>{result}</div> : <div>loading</div>}
    </>
  );
}

export default App;
