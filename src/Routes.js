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
const UserInfo = lazy(() => import('./views/DependentQuery/UserInfo'))
const ListsItems = lazy(() => import('./views/ListsItems/ListsItems'))
const QueryCacheEx = lazy(() =>
  import('./views/QueryCacheEx/QueryCacheEx')
)
const PushToQueryCache = lazy(() =>
  import('./views/PushToQueryCache/PushToQueryCache')
)
const PostCountSideEffect = lazy(() =>
  import('./views/QuerySideEffect/PostCount')
)
const ReftchQueryInvalidation = lazy(() =>
  import('./views/ReftchQueryInvalidation/ReftchQueryInvalidation')
)
const ReftchInvactiveQuery = lazy(() =>
  import('./views/ReftchInvactiveQuery/ReftchInvactiveQuery')
)
const ReftchMultiQueriesByInvalidating = lazy(() =>
  import(
    './views/ReftchMultiQueriesByInvalidating/ReftchMultiQueriesByInvalidating.jsx'
  )
)
const ReftchMultiInvalidAlt = lazy(() =>
  import('./views/ReftchMultiInvalidAlt/ReftchMultiInvalidAlt.jsx')
)
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
          <Route exact path="/DependentQuery">
            <UserInfo />
          </Route>
          <Route exact path="/ListsItems">
            <ListsItems />
          </Route>
          <Route exact path="/QueryCacheEx">
            <QueryCacheEx />
          </Route>
          <Route exact path="/PushToQueryCache">
            <PushToQueryCache />
          </Route>
          <Route exact path="/PostCountSideEffect">
            <PostCountSideEffect />
          </Route>
          <Route exact path="/ReftchQueryInvalidation">
            <ReftchQueryInvalidation />
          </Route>
          <Route exact path="/ReftchInvactiveQuery">
            <ReftchInvactiveQuery />
          </Route>
          <Route exact path="/ReftchMultiQueriesByInvalidating">
            <ReftchMultiQueriesByInvalidating />
          </Route>
          <Route exact path="/ReftchMultiInvalidAlt">
            <ReftchMultiInvalidAlt />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}
