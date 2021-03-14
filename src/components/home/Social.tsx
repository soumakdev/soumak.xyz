import React from "react"
import Link from "next/link"

const Social = () => {
	return (
		<footer className="flex justify-between text-sm flex-col lg:flex-row items-center">
			<div className="flex space-x-5 mb-4 lg:mb-0">
				<Link href="https://twitter.com/soumakxyz">
					<a target="_blank">Twitter</a>
				</Link>

				<Link href="https://github.com/soumakdev">
					<a target="_blank">Github</a>
				</Link>

				<Link href="https://www.linkedin.com/in/soumakdev/">
					<a target="_blank">LinkedIn</a>
				</Link>
			</div>

			<a href="mailto:soumakxyz@gmail.com">Say Hi 👋</a>
		</footer>
	)
}

export default Social
