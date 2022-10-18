import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"

import Arrow from "../../assets/arrow.png"
import Button from "../Button/Button"
import styles from "./Main.module.scss"

const Main = () => {
	const router = useRouter()

	const goToLinkedIn = useCallback(
		() => router.replace("https://linkedin.com/in/yashgarudkar"),
		[router]
	)

	return (
		<main className={`${styles.Main} ${styles.Container}`}>
			<div className={styles.Content}>
				<h1>
					Hi! I am <span className={styles.Chip}>Fullstack</span>
					<br />
					Yash Garudkar
				</h1>
				<p>
					<span>Building beautiful and robust</span>
					<br /> <span className={styles.Tech}>React-Node</span> applications
					for more than 2.5 years.
				</p>
				<Button onClick={goToLinkedIn}>Hire Me</Button>
				<span className={styles.ProjectsLink}>
					<Link href="/resume">
						<div className={styles.ProjectsButton}>
							<p>Projects</p>
							<div className={styles.ArrowIcon}>
								<Image
									src={Arrow.src}
									width={"20"}
									height={"20"}
									alt="arrow icon"
								/>
							</div>
						</div>
					</Link>
				</span>
				<div className={styles.Contact}>
					<h2>
						Contact: <br />
						<a href="mailto:garudkary@gmail.com">garudkary@gmail.com</a>
					</h2>
				</div>
			</div>
			<div className={styles.ImageContainer}>
				<Image
					src="https://i.postimg.cc/j53F1DVx/20220924-163712-01.jpg"
					alt="Yash's Photo"
					width="500"
					height="600"
				/>
			</div>
		</main>
	)
}

export default Main
