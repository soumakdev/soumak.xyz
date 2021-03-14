import React, { Fragment } from "react"
import Social from "./Social"
import Link from "next/link"

const Home = () => {
	return (
		<Fragment>
			<section className="home h-screen">
				<div className="grid grid-rows-layout h-full items-center">
					<header className="text-center lg:text-left">
						<Link href="/">
							<a>soumak</a>
						</Link>
					</header>
					<article className="">
						<h1 className="hero-text">
							Hey, I'm Soumak Frontend developer from India.
						</h1>
					</article>
					<Social />
				</div>
			</section>
		</Fragment>
	)
}

export default Home
