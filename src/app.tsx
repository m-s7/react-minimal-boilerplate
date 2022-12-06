import React, {useState} from 'react'
import icon from '@/assets/icon.png'
import {Button} from '@/components'
import debounce from '@/utils/debounce'

export const App = () => {
	const [isHello, setIsHello] = useState(false)

	const clickHandler = debounce(() => {
		setIsHello(false)
	}, 950)

	return (
		<div className="container">
			<img src={icon} className="icon-main" alt="React Icon" />
			<h1 className="heading-main">React Minimal Boilerplate</h1>
			<p className="technologies">(React18 + TypeScript + Webpack5 + SCSS + Jest + ESLint)</p>
			<Button onClick={() => {
				setIsHello(true)
				clickHandler()
			}}>
                Say Hello!
			</Button>
			<p className={`hello ${!isHello ? 'hidden' : 'fade-out'}`}>Hello</p>
		</div>
	)
}