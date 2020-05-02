import React from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/core'
import { globalCSS } from './styles/global-css'
import { App } from './app'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <>
        <Global  
            styles={css`
                    ${globalCSS}               
            `}
        />        
        <App />
    </>,
    mountNode
)
