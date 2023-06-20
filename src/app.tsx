import React from 'react';

import Space from '../components/space';

import './index.less';

const App = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-96 h-96 bg-slate-100'>
                <Space split={<p>y</p>} direction='vertical'>
                    <div>1</div>
                    {[<div>1</div>, null, undefined, <div>1</div>]}
                </Space>
            </div>
        </div>
    );
};

export default App;
