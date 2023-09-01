import { useState } from "react"
//Components
import Randomizer from "./Randomizer"
import Error from "./Error"
import Loader from "./Loader"

export default function UserInput({ gameList, setGameList, setGameOutput }) {
	const [steamId, setSteamId] = useState("")
	const [checkbox, setCheckbox] = useState(true)
	const [randomizer, setRandomizer] = useState(false)
	const [playerName, setPlayerName] = useState("")
	const [visibility, setVisibility] = useState("Private")
	const [loader, setLoader] = useState(false)
	const [isError, setIsError] = useState(false)
	const [errorText, setErrorText] = useState("")

	function handleSubmit(e) {
		e.preventDefault()

		//Clear outputs and show loader
		clearComponents()
		setIsError(false)
		setLoader(true)

		//Run fetch requests
		getGames(steamId)
		getPlayerInfo(steamId)
	}

	function clearComponents() {
		setGameList("")
		setGameOutput(false)
		setRandomizer(false)
		setLoader(false)
	}

	function checkSteamId(data) {
		if (!Object.keys(data).length) {
			const err = "Invalid Steam ID"

			clearComponents()
			setErrorText(err)
			setIsError(true)

			throw new Error(err)
		}
	}

	async function getGames(steamId) {
		//Fetch returns a promise
		const res = await fetch(`/api/games/${steamId}`, {
			next: {
				revalidate: 60 * 60 * 24,
			},
		})

		//Fetch error handling
		if (!res.ok) {
			const err = "Could not retrieve games."

			clearComponents()
			setErrorText(err)
			setIsError(true)

			throw new Error(err)
		}

		//Await promise and store json data
		const json = await res.json()
		const data = json.data.response

		//Not real Steam ID error handling
		checkSteamId(data)

		//Filter out played games if the box is checked
		const unfiltered = data.games

		if (checkbox == true) {
			const filtered = unfiltered.filter(
				(game) => !(game.playtime_forever / 60 > 1)
			)
			setGameList(filtered)
		} else {
			setGameList(unfiltered)
		}

		//Hide loader and show output components
		setLoader(false)
		setRandomizer(true)
		setGameOutput(true)
	}

	async function getPlayerInfo(steamId) {
		//Fetch returns a promise
		const res = await fetch(`/api/user/${steamId}`, {
			next: {
				revalidate: 60 * 60 * 24,
			},
		})

		//Error handling
		if (!res.ok) {
			const err = "Could not retrieve user name."

			clearComponents()
			setErrorText(err)
			setIsError(true)

			throw new Error(err)
		}

		//Await promise and store json data
		const json = await res.json()
		const data = json.data.response

		//Not real Steam ID error handling
		checkSteamId(data)

		const player = data.players[0]
		setPlayerName(player.personaname)

		//Steams API shows a 3 if the user is public and a 1 if they are private
		const visState = data.players[0].communityvisibilitystate
		visState == 3 ? setVisibility("Public") : setVisibility("Private")
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="checkbox-wrapper">
					<label htmlFor="inputCheckbox">
						<input
							id="inputCheckbox"
							name="inputCheckbox"
							type="checkbox"
							defaultChecked="checked"
							onChange={(e) => setCheckbox(e.target.checked)}
						/>
						Filter out games I've already played.
					</label>
					<p>
						NOTE: Your account must be set to public for the filter to work.
						Otherwise all playtimes will display as 0.
					</p>
				</div>

				<div className="field-wrapper">
					<label htmlFor="inputId">Enter your Steam ID number</label>
					<input
						id="inputId"
						name="inputId"
						type="number"
						maxLength="17"
						placeholder="Enter your Steam ID number..."
						onChange={(e) => setSteamId(e.target.value)}
						required="required"
					/>
					<button id="buttonSubmit" type="submit" className="btn--highlight">
						Submit
					</button>
				</div>
			</form>

			{loader && <Loader />}

			{isError && <Error errorText={errorText} />}

			{randomizer && (
				<Randomizer
					gameList={gameList}
					playerName={playerName}
					visibility={visibility}
				/>
			)}
		</>
	)
}
