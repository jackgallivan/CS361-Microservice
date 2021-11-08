/*
req.body = {
	player1_rating: NUMBER,
	player2_rating: NUMBER,
}

response.body = {
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
*/

const rating_calc = {
	calc: (req, res, next) => {
		const {player1_rating, player2_rating} = req.body

		// Perform calculations to get the new Elo rating
		const r1 = 10 ** (player1_rating / 400)
		const r2 = 10 ** (player2_rating / 400)
		const e1 = r1 / (r1 + r2)
		const e2 = r2 / (r1 + r2)
		const s1 = [1, 0.5, 0]
		const player1_rating_new = {
			win: Math.round(player1_rating + 32 * (s1[0] - e1)),
			draw: Math.round(player1_rating + 32 * (s1[1] - e1)),
			lose: Math.round(player1_rating + 32 * (s1[2] - e1)),
		}
		const player2_rating_new = {
			win: Math.round(player2_rating + 32 * (s1[0] - e2)),
			draw: Math.round(player2_rating + 32 * (s1[1] - e2)),
			lose: Math.round(player2_rating + 32 * (s1[2] - e2)),
		}
		const result = {
			player1_rating: player1_rating_new,
			player2_rating: player2_rating_new,
		}

		res.status(200).send(result)
	},
}

module.exports = rating_calc
