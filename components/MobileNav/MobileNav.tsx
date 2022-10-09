import Image from "next/image"
import Link from "next/link"
import styles from "./MobileNav.module.scss"
import ResumeIcon from "../../assets/cv.png"
import InfoIcon from "../../assets/information.png"
import ServiceIcon from "../../assets/services.png"

const MobileNav = () => {
	return (
		<nav className={styles.Navbar}>
			<Link href="/resume">
				<div className={styles.NavButton}>
					<Image
						width="26"
						height="26"
						src={ResumeIcon.src}
						alt="resume icon"
					/>
				</div>
			</Link>
			<Link href="/about">
				<div className={styles.NavButton}>
					<Image width="26" height="26" src={InfoIcon.src} alt="resume icon" />
				</div>
			</Link>
			<Link href="/services">
				<div className={styles.NavButton}>
					<Image
						width="26"
						height="26"
						src={ServiceIcon.src}
						alt="resume icon"
					/>
				</div>
			</Link>
		</nav>
	)
}

export default MobileNav
