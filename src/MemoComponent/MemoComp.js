import React from 'react'
import { jsxClosingElement } from '@babel/types';
import { SSL_OP_LEGACY_SERVER_CONNECT } from 'constants';

function MemoComp({ name }) {
    console.log("Rendering Memo Component")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp) 
