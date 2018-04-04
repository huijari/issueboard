import { h, render } from 'preact'
import { injectGlobal } from 'styled-components'

import App from './component/app'

injectGlobal`
	body {
		background: #fffdfd;
		color: #222;
		font-family: Roboto;
	}
`

render(<App />, document.querySelector('main'))
