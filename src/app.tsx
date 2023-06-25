import React, { createContext } from 'react';
import { FcAbout, FcInfo, FcApproval, FcCancel } from 'react-icons/fc';
import Space from '../components/space';
import Alert from '../components/alert';

import './index.less';

export const ConfigContext = createContext({
    prefix: 'rc'
});

const App = () => {
    return (
        // <ConfigContext.Provider value={{}}>
        <div className='flex justify-center items-center w-full h-screen bg-[#eff3f5]'>
            <div className='div1'>div1</div>
            {/* <div className='w-96 h-96'>
                <Space
                    size='large'
                    direction='vertical'
                    align='start'
                    split={
                        <button className='bg-slate-700 w-80'>button1</button>
                    }
                >
                    <button className='bg-slate-300'>button1</button>
                    <button className='bg-slate-300 h-80'>button1</button>
                    <button className='bg-slate-300'>button1</button>
                    <button className='bg-slate-300'>button1</button>
                </Space>
            </div> */}
        </div>
        // </ConfigContext.Provider>
    );
};

export default App;
