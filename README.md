# Elo Rating Calculation Microservice
This is a microservice that uses the Elo rating system to calculate the rating for two players.

## Instructions:

To use the API, make an HTTP POST request to:  
http://flip1.engr.oregonstate.edu:9563/calc

> Note: the above URL, if not already defunct, is only accessible via Oregon State University's private network.

You must include a JSON file with your request, using the following format:
```
{
	"player1_rating": NUMBER,
	"player2_rating": NUMBER
}
```

The new player ratings will be sent back inside a JSON object.  
The JSON file will have the following format:
```
{
	"player1_rating": {
		"win": NUMBER,
		"draw": NUMBER,
		"lose": NUMBER
	},
	"player2_rating": {
		"win": NUMBER,
		"draw": NUMBER,
		"lose": NUMBER
	}
}
```
