import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../../routes'

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routeEntry) => (
          <Route
            key={routeEntry.path}
            path={routeEntry.path}
            element={routeEntry.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default RouteContainer
