import { Link } from 'react-router-dom'
import { routes } from '../../routes'

const Links = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {routes.map((routeEntry) =>
          routeEntry.label !== 'Home page' ? (
            <Link key={routeEntry.path} to={routeEntry.path}>
              {routeEntry.label}
            </Link>
          ) : null
        )}
      </div>
    </>
  )
}

export default Links
