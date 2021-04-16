import { HeaderContainer } from './index.style'
import Logo from '../logo/index'
import {
	InstagramOutlined,
	LinkedinOutlined,
	PaperClipOutlined,
	TwitterOutlined,
	DownloadOutlined,
	MenuOutlined,
} from '@ant-design/icons'
import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import resume from '../../assets/resume.pdf'

const Header = () => {
	const [isDownload, setIsDownload] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const DownloadLink = (src) => (
		<a href={src}>
			<Tooltip className='link' placement='top' title='Resume'>
				<div
					onMouseEnter={() => setIsDownload(true)}
					onMouseLeave={() => setIsDownload(false)}
				>
					{isDownload ? (
						<DownloadOutlined color='black' />
					) : (
						<PaperClipOutlined color='black' />
					)}
				</div>
			</Tooltip>
		</a>
	)

	return (
		<HeaderContainer>
			<div className='ham-menu' onClick={() => setIsOpen(!isOpen)}>
				<MenuOutlined color='black' />
			</div>
			<div className='logo'>
				<Logo />
			</div>
			<div className='links'>
				{DownloadLink(resume)}
				<a
					className='link'
					href='https://www.instagram.com/yashgarudkar/'
					target='_blank'
					rel='noreferrer'
				>
					<InstagramOutlined color='black' /> Instagram
				</a>
				<a
					className='link'
					href='https://twitter.com/codeitachi'
					target='_blank'
					rel='noreferrer'
				>
					<TwitterOutlined color='black' /> Twitter
				</a>
				<a
					href='https://www.linkedin.com/in/yashgarudkar/'
					target='_blank'
					rel='noreferrer'
					className='link'
				>
					<LinkedinOutlined color='black' /> LinkedIn
				</a>
			</div>
			<SwipeableDrawer
				anchor='left'
				open={isOpen}
				onClose={() => setIsOpen(false)}
				onOpen={() => setIsOpen(true)}
			>
				<ul>
					<li>
						<a
							href='https://www.instagram.com/yashgarudkar/'
							target='_blank'
							rel='noreferrer'
							className='mobile-link'
						>
							<InstagramOutlined color='black' /> Instagram
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com/codeitachi'
							target='_blank'
							rel='noreferrer'
							className='mobile-link'
						>
							<TwitterOutlined color='black' /> Twitter
						</a>
					</li>
					<li>
						<a href='/#' className='mobile-link'>
							<LinkedinOutlined color='black' /> LinkedIn
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/yashgarudkar/'
							target='_blank'
							rel='noreferrer'
							className='mobile-link'
						>
							<DownloadOutlined color='black' /> Resume
						</a>
					</li>
				</ul>
			</SwipeableDrawer>
		</HeaderContainer>
	)
}

export default Header
