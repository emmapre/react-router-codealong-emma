import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CocktailList } from './pages/CocktailList'
import { CocktailDetail } from './pages/CocktailDetail'

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<CocktailList />
				</Route>
				<Route path='/cocktails/:idDrink'>
					<CocktailDetail />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
