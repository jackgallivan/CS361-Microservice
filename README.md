# CS361-Microservice
This is a microservice that uses the Elo rating system to calculate the rating for two players.

Instructions:

Make an API request by sending a JSON object in a POST request to [URL TBD] with the following format:
{
	player1_rating: NUMBER,
	player2_rating: NUMBER,
}

The new player ratings will be sent back in a JSON object with the following format:
{
	player1_rating: {
		win: NUMBER,
		draw: NUMBER,
		lose: NUMBER,
	},
	player2_rating: {
		win: NUMBER,
		draw: NUMBER,
		lose: NUMBER,
	},
}
