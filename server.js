import React from 'react'
import { App } from './src/components/app'
import { Provider } from 'react-redux'
import { store } from './src/state/store'

const express = require('express')
const fs = require('fs')
const path = require('path')
const http = require('http')
const reactDOMServer = require('react-dom/server')
const { renderToString } = reactDOMServer
const app = express()

app.get('*', (req, res) => {
	const filePath = path.resolve('dist', 'index.html')
	fs.readFile(filePath, 'utf-8', (err, data) => {
		if(err) {
			console.log(err)
			res.status(404).send('Error in reading index.html on the server')
		}

		const reactHtml = renderToString(
			<Provider store={store}>
				<App />
			</Provider>
		)
		const html = data.replace('{{HTML}}', reactHtml)
		res.status(200).send(html)
	})
})

app.listen(3000, function () {
	console.log('Listening on port 3000...')
});