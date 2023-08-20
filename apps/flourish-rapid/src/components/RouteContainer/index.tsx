import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Links from '../Links'
import TypographyPage from '../TypographyPage'

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/typography" element={<TypographyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteContainer
