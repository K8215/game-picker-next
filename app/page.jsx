"use client"
import { useState } from "react"

//Components
import IntroText from "./components/IntroText"
import UserInput from "./components/UserInput"
import GameOutput from "./components/GameOutput"

export default function GamePickerNext() {
	const [gameOutput, setGameOutput] = useState(false)
	const [gameList, setGameList] = useState("")

	return (
		<main>
			<div className="user-input">
				<div className="container">
					<UserInput
						gameList={gameList}
						setGameList={setGameList}
						setGameOutput={setGameOutput}
					/>
				</div>
			</div>
			<div className="content">
				<div className="container">
					{gameOutput && <GameOutput gameList={gameList} />}
					<IntroText />
				</div>
			</div>
		</main>
	)
}
