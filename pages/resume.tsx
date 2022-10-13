import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header/Header"
import Resume from "../components/Resume/Resume"

const ResumePage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Resume - Yash Garudkar</title>
				<meta name="description" content="Yash Garudkar Resume" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Resume />
		</div>
	)
}

export default ResumePage
