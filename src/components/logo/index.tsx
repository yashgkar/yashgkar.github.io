const HeaderLogo = ({ iconColor }: any) => (
	<svg
		width='52'
		height='64'
		viewBox='0 0 43 54'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M21.5 31.3784L2.88046 7.84459L40.1195 7.84459L21.5 31.3784Z'
			fill={iconColor}
		/>
		<rect
			x='17.3386'
			y='31.3784'
			width='9.01613'
			height='22.6216'
			fill={iconColor}
		/>
	</svg>
)

HeaderLogo.defaultProps = {
	iconColor: 'black',
}

export default HeaderLogo
