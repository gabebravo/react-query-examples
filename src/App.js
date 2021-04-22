import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as RouterWrapper,
  Switch,
  Route,
} from 'react-router-dom'

// const Header = lazy(() => import('./shared/Header'))
const PokemonList = lazy(() => import('./views/PokemonList/PokemonList'))
const PokemonDetails = lazy(() =>
  import('./views/PokemonDetails/PokemonDetails')
)
const NoMatch = () => <>'There is nothing to see here'</>

export default function App() {
  return (
    <RouterWrapper>
      <Suspense fallback={<p>...Loading</p>}>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route exact path="/PokemonDetails/:name">
            <PokemonDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}
