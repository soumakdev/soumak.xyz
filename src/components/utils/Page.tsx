import React, { FC, Fragment } from "react"
import Head from "next/head"

interface IPage {
	title: string
}

const Page: FC<IPage> = (props) => {
	const { title, children } = props
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
			</Head>

			{children}
		</Fragment>
	)
}

export default Page
