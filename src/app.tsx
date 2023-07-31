import React, { createContext } from 'react';
import { FcAbout, FcInfo, FcApproval, FcCancel } from 'react-icons/fc';
import Space from '../components/space';
import Button from '../components/button';

import './index.less';

export const ConfigContext = createContext({
  prefix: 'rc'
});

const App = () => {
  return (
    <div className='h-full'>
      <Button>
        <span>jjjj</span>
      </Button>
    </div>
    // <ConfigContext.Provider value={{}}>
    // <div className='w-96 h-96'>
    //     <Space
    //         size='large'
    //         direction='vertical'
    //         align='start'
    //         split={<button className='bg-slate-700 w-80'>button1</button>}
    //     >
    //         <button className='bg-slate-300'>button1</button>
    //         <button className='bg-slate-300 h-80'>button1</button>
    //         <button className='bg-slate-300'>button1</button>
    //         <button className='bg-slate-300'>button1</button>
    //     </Space>
    // </div>
    // </ConfigContext.Provider>
  );
};

export default App;
