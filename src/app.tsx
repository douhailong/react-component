import React, { createContext } from 'react';
import { FcAbout, FcInfo, FcApproval, FcCancel } from 'react-icons/fc';
import Space from '../components/space';
import Alert from '../components/alert';

import './index.less';

export const ConfigContext = createContext({
    prefix: 'rc'
});

const Child = (props: { children: React.ReactElement }) => {
    console.log(React.Children.count(props.children), 'jj');
    return props.children;
};

const App = () => {
    return (
        <div className='h-full'>
            <Child>
                <span>888</span>
                <span>888</span>
                <span>888</span>
            </Child>
            {/* <div className='a'>
                <div className='b'>111</div>
                <div className='b'>222</div>
                <div className='b'>333</div>
                <div className='b'>444</div>
            </div> */}
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
