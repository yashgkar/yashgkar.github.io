import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Script from "next/script"
import config from "next/config"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GTAG}');
        `}
			</Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
