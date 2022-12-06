import React from 'react'
import styles from './button.module.scss'

interface ButtonProps {
	onClick?: () => void,
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
	const {children, onClick} = props
	
	return (
		<>
			<button
				type='button'
				className={styles.default}
				onClick={onClick}>
				{children}
			</button>
		</>
	)
}
