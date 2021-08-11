import React from 'react';
import { Spin } from 'antd';
import { antIcon } from 'antd';

export default function LoadingIndicator(props) {
    const antIcon = <antIcon type="loading-3-quarters" style={{ fontSize: 30 }} spin />;
    return (
        <Spin indicator={antIcon} style = {{display: 'block', textAlign: 'center', marginTop: 30}} />
    );
}