import { useState } from "react"

export default function Randomizer({ gameList, playerName, visibility }) {
	let randNum = Math.floor(Math.random() * gameList.length)
	const [randValue, setRandValue] = useState(randNum)

	function randomize() {
		randNum = Math.floor(Math.random() * gameList.length)
		setRandValue(randNum)
	}

	return (
		<div id="randContainer">
			<p>
				Selection for user <span id="playerName"></span>: {playerName} (
				{visibility})
			</p>
			<p id="outputRand">{gameList[randValue].name}</p>

			<button id="buttonRand" onClick={randomize}>
				Reshuffle
			</button>
		</div>
	)
}
