import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CocktailDetail = () => {
  const { idDrink } = useParams()
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((res) => res.json())
      .then((json) => {
        //drinks måste vara samma som det som är i datan
        setCocktails(json.drinks)
      })
  }, [idDrink])


  return (
    <div>
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
      ))}
    </div >
  )
}