import Link from "next/link"

export default function NotFound() {
	return (
		<main>
			<div className="user-input">
				<div className="container">
					<h2>404</h2>
				</div>
			</div>

			<div className="content">
				<div className="container">
					<h3>The location you were looking for isn't here...</h3>
					<p>
						This is the Game Picker 9000, a Node.js application that pulls a
						user's data from the Steam Web API and selects a rendom game to
						play. For more information on the Steam Web API, see the official{" "}
						<Link
							href="https://steamcommunity.com/dev"
							target="_blank"
							rel="noopener"
						>
							documentation
						</Link>
						.
					</p>
					<p>
						If you've landed on this page in error, try returning to the{" "}
						<Link href="/">Home Page</Link>. From there you can use your Steam
						ID to pull information about your profile.
					</p>

					<Link href="/" className="btn btn--green">
						Go Home
					</Link>
				</div>
			</div>
		</main>
	)
}
