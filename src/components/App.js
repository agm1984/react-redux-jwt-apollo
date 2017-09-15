import React from 'react'

import Header from './Header'

// props.children
export default ({ children }) => {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    )
}