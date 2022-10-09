import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Yash Garudkar</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
      <Main />
		</div>
	)
}

export default Home