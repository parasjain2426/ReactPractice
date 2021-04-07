import React from 'react';
import ReactDOM from 'react-dom'

const PortalExample = ()=>{
    const style = {
        textAlign:'center',
        margin:'20px'
    }
    return ReactDOM.createPortal(<h1 style={style}>Hii Everyone!</h1>,document.getElementById('root'))
}

export default PortalExample;