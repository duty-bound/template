import React from 'react'
import styled from '@emotion/styled'
import { Name } from './name/index'

const H1 = styled.h1`
	font-family: 'arial';
	color: red;
`

export const App = () =>
	<>
		<H1>App</H1>
		<p>hello</p>
		<Name />
	</>
