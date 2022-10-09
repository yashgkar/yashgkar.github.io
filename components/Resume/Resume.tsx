import { useMemo } from "react"
import { nanoid } from "nanoid"
import Image from "next/image"
import HistoryCard from "./HistoryCard/HistoryCard"
import styles from "./Resume.module.scss"
import ResumeIcon from "../../assets/resume.png"
import GraduateIcon from "../../assets/graduate.png"

const Resume = () => {
	const WorkHistory = useMemo(() => {
		return [
			{
				id: nanoid(),
				companyName: "Perennial Systems",
				from: "April 2022",
				to: "Current",
				designation: "Senior Associate Engineer",
				tasksHandled: [
					"Worked on a PWA made with Nextjs for inspiring women towards investment and learn mutual funds.",
					"Built a highly interactive landing page in plain HTML, CSS, vanilla JavaScript(for animations) on Next js for high SEO and faster page loads. (Nextjs, scss)",
					"Mentor fellow associates in React, day-to-day and help them with UI perspective while working on features, highly proactive behavior in projects with design and product team.",
					"Worked on UI component library with Storybook UI for faster development. Base level components with maximum features to help speed up development. Best practices implementation for highly optimized components. (React, Storybook UI, scss, redux, thunk, redux-toolkit)"
				]
			},
			{
				id: nanoid(),
				companyName: "Perennial Systems",
				from: "April 2020",
				to: "March 2022",
				designation: "Associate Engineer",
				tasksHandled: [
					"Worked on a money transfer app. Owned multiple features and created bug free user flows. Used single codebase to send money from any to any country. Success scenario: 100% lines of code coverage.(React, Node, styled-components, redux, thunk, sass)",
					"Worked on brands reviewer app for social media influencers. Created application boilerplate from scratch for scalable and theme based UI components. Responsible for multiple features on the application with complex forms. (React, Redux, Node, thunk, Material UI, Formik with yup validation, NestJS, MongoDB)",
					"Worked on SME Financing App. A platform for investors to invest in companies. Owned a feature and completed with bug free delivery. Success scenario: 100% lines of code coverage. (React, Node, Redux, styled-components, scss, Node, storybook for UI components)",
					"Created react boilerplate for new projects, reviewed PRs for fellow engineers."
				]
			},
			{
				id: nanoid(),
				companyName: "Perennial Systems",
				from: "August 2020",
				to: "March 2021",
				designation: "Trainee Engineer",
				tasksHandled: [
					"Learned to work on production scale ReactJS and NodeJS applications",
					"Learned to build applications without frameworks and only with JS & TS to understand functional and class based programming.",
					"Worked on a production scale project by myself only. A LinkedIn chrome helper extension built with Chrome's API to scrape search results and message prospects. Success scenario: 100% lines of code coverage.",
					"Used React, Node, NestJS, MaterialUI, Ant Design, PostGRES, Sequelize, Swagger"
				]
			}
		]
	}, [])

	return (
		<div className={styles.Container}>
			<h3>Work History</h3>
			<div className={styles.HistoryContainer}>
				{WorkHistory.map((history) => (
					<div key={history.id}>
						<span className={styles.Pointer}>
							<Image
								width="16"
								height="16"
								src={ResumeIcon.src}
								alt="resume icon"
							/>
						</span>
						<HistoryCard {...history} />
					</div>
				))}
			</div>
			<h3>Education </h3>
			<div
				className={styles.HistoryContainer}
				style={{
					marginBottom: "6rem"
				}}
			>
				<span className={styles.Pointer}>
					<Image
						width="16"
						height="16"
						src={GraduateIcon.src}
						alt="resume icon"
					/>
				</span>
				<HistoryCard
					companyName="Sandip Institute of Technology and Research Center"
					designation="Bachelor in Computer Engineering"
					from="2016"
					to="2020"
					tasksHandled={[
						"Completed engineering with 6.95 CGPA",
						"Built a project for final year by self. Training and placements portal for college. (Node, EJS - frontend, MongoDB, Express, Multer)",
						"Google Devfest Volunteer",
						"Attended TechFest Bombay for AWS live coding session",
						"Attended Indian Science Congress and several sessions for progress in computer field by leaders in the domain"
					]}
				/>
			</div>
			{/* <button className={styles.CTA}>Download Resume</button> */}
		</div>
	)
}

export default Resume
