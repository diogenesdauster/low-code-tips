import Head from 'next/head'
import Header from '@includes/header'
import Footer from '@includes/footer'


export default function DefaultLayout(props) {
	return (
		<main>
			<Head>
				<title>{props.title}</title>
				<meta name='description' content={props.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'/>	
			</Head>
			<Header/>
			{props.children}
			<Footer/>
		</main>
	
	)

}
