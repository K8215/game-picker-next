export default function IntroText() {
	return (
		<>
			<h2>Welcome to the Game Picker!</h2>
			<p>
				Do you tremble before the cascade of unplayed games in your Steam
				library? Well, tremble no more! The Game Picker is here to do all the
				picking for you. Simply enter your 17-digit steam ID in the field, hit
				submit, and in seconds you'll have a freshly selected game to play. If
				you're not pleased with the selection, press the Reshuffle button for
				another go-round. But don't press it too many times, or you'll end up
				just as indecisive as you were before.
			</p>
			&nbsp;
			<h3>Don't Know Your Steam ID?</h3>
			<ol>
				<li>Log into the Steam client on your desktop.</li>
				<li>
					In the upper right, where your Steam handle and profile picture are,
					click on the tiny down arrow to open a dropdown menu.
				</li>
				<li>Select "Account Details" from the dropdown menu.</li>
				<li>
					At the top of the Account Details page you'll see "YourHandle's
					Account" in large type. Right under that is your Steam ID.
				</li>
			</ol>
			&nbsp;
			<h3>Don't have a Steam account?</h3>
			<p>
				Give the Game Picker a whirl with this sample id:{" "}
				<span>76561198052374144</span>
			</p>
		</>
	)
}
