import styled from 'styled-components'

export const HeaderContainer = styled.header`
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.ham-menu {
		display: none;
		height: 100%;
		width: 4rem;
	}

	.links {
		width: 100%;

		.link {
			display: inline-block;
			float: right;
			color: black;
			text-decoration: none;
			margin-left: 4rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 700px) {
		.links {
			display: none;
		}

		.ham-menu {
			display: block;
		}
	}

	.mobile-link {
		color: black !important;
	}
`
