import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Yash Garudkar</title>
				<meta name="description" content="Yash Garudkar Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
      <Main />
		</div>
	)
}

export default Home
