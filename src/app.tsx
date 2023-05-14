import React from 'react';

import './index.less';

function Chil(props: any) {
  React.Children.forEach(props.children, (i, index) => {
    console.log(i, index, 'i');
  });
  return props.children;
}

const App = () => {
  return (
    <div>
      <Chil>
        <span>11</span>
        <span>11</span> <span>11</span> <span>11</span>
      </Chil>
    </div>
  );
};

export default App;
