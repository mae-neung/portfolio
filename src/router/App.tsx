import { Route, Routes } from 'react-router-dom'
import { portfolioRoutes } from '../data/routes'
import { PortfolioLayout } from '../layouts/PortfolioLayout'

export function App() {
  return (
    <Routes>
      {portfolioRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<PortfolioLayout route={route} />} />
      ))}
      {portfolioRoutes.map((route) => (
        <Route
          key={route.path + 'index.html'}
          path={route.path + 'index.html'}
          element={<PortfolioLayout route={route} />}
        />
      ))}
      <Route path="*" element={<p>페이지를 찾을 수 없습니다. <a href="./">처음으로</a></p>} />
    </Routes>
  )
}
