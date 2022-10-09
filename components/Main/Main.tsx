import Image from "next/image"
import Link from "next/link"

import Arrow from "../../assets/arrow.png"
import Button from "../Button/Button"
import styles from "./Main.module.scss"

const Main = () => {
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
					<br /> React-Node applications for than 2.5 years.
				</p>
				<Button>Hire Me</Button>
				<span className={styles.ProjectsLink}>
					<Link href="/resume">
						<>
							<p>Projects</p>
							<div className={styles.ArrowIcon}>
								<Image
									src={Arrow.src}
									width={"20"}
									height={"20"}
									alt="arrow icon"
								/>
							</div>
						</>
					</Link>
				</span>
				<div className={styles.Contact}>
					<h2>
						Contact: <br/>
						<a href="mailto:yashgarudkar@gmail.com">garudkary@gmail.com</a>
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
