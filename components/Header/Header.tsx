import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"
import Button from "../Button/Button"

import styles from "./Header.module.scss"

const Header = () => {
	const router = useRouter()

	const goToLinkedIn = useCallback(
		() => router.replace("https://linkedin.com/in/yashgarudkar"),
		[router]
	)

	return (
		<header className={styles.HeaderContainer}>
			<div className={styles.Container}>
				<div className={styles.LogoContainer}>
					<Link href="/">
						<h1>
							Yash<span>.</span>
						</h1>
					</Link>
				</div>
				<div className={styles.Links}>
					<Link href="/resume">Resume</Link>
					<Link href="/about">About</Link>
					<Link href="/services">Services</Link>
				</div>
				<div className={styles.CTA}>
					<Button onClick={goToLinkedIn}>Let&apos;s Chat</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
