import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Global, css } from '@emotion/core'
import { globalCSS } from './styles/global-css'
import { App } from './components/app'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <>
        <Provider store={store}>
            <Global  
                styles={css`
                        ${globalCSS}               
                `}
            />        
            <App />
        </Provider>
    </>,
    mountNode
)
