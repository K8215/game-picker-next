export default function GameOutput({gameList}) {
  	return (
    	<div id="gameContainer">
        	<h2>All Games <span id="outputTotal">({gameList.length})</span> </h2>
        	<ul id="outputList">
          		{gameList.map((game) => (
            		<li key={game.appid}>
              			<h3>{game.name}</h3>
              			<span className="game-time">Playtime: {Math.round(game.playtime_forever / 60)} hrs</span>
            		</li>
          		))}
        	</ul>
    	</div>
  	)
}
