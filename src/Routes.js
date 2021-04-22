import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as RouterWrapper,
  Switch,
  Route,
} from 'react-router-dom'

const Home = lazy(() => import('./views/Home/Home'))
const MainHeader = lazy(() => import('./shared/MainHeader'))
const PokemonList = lazy(() => import('./views/PokemonList/PokemonList'))
const BerryList = lazy(() => import('./views/BerryList/BerryList'))
const PokemonDetails = lazy(() =>
  import('./views/PokemonDetails/PokemonDetails')
)
const BerryDetails = lazy(() =>
  import('./views/BerryDetails/BerryDetails')
)
const PokeSearch = lazy(() => import('./views/PokeSearch/PokeSearch'))
const NoMatch = () => <>'There is nothing to see here'</>

export default function App() {
  return (
    <RouterWrapper>
      <Suspense fallback={<p>...Loading</p>}>
        <MainHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/PokemonList">
            <PokemonList />
          </Route>
          <Route exact path="/PokemonDetails/:name">
            <PokemonDetails />
          </Route>
          <Route exact path="/BerryList">
            <BerryList />
          </Route>
          <Route exact path="/BerryDetails/:name">
            <BerryDetails />
          </Route>
          <Route exact path="/PokeSearch">
            <PokeSearch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}
