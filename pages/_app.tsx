import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=G-0VXKZBHJB8`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0VXKZBHJB8');
        `}
			</Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
