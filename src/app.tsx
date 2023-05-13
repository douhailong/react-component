import React from 'react';

function Chil(props: { children: React.ReactElement }) {
  return props.children;
}

const App = () => {
  return (
    <div>
      <Chil>
        <div className=';'></div>
        <div className=';'></div>
        <div className=';'></div>
        <div className=';'></div>
      </Chil>
    </div>
  );
};

export default App;
