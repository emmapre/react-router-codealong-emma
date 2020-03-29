import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CocktailList = () => {
	const [cocktails, setCocktails] = useState([])

	useEffect(() => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
			.then((res) => res.json())
			.then((json) => {
				setCocktails(json.drinks)
			})
	}, [])

	return (
		<div>
			{cocktails.map((cocktail) =>
				<div key={cocktail.idDrink}>
					<img src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} />
					<h2>
						<Link to={`/cocktails/${cocktail.idDrink}`}>
							{cocktail.strDrink}
						</Link>
					</h2>
				</div >
			)
			}
		</div >
	)
}
