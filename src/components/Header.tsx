import { Box, Button, Flex, Text } from '@devup-ui/react'
import type { Theme } from '../hooks/useTheme'

interface HeaderProps {
  page: 'home' | 'archive' | 'detail'
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ page, theme, onToggleTheme }: HeaderProps) {
  const homeHref = page === 'home' ? '#top' : page === 'archive' ? '../' : '../../'
  const projectsHref = page === 'home' ? './projects/' : page === 'archive' ? '#archive' : '../'
  const approachHref = page === 'home' ? '#approach' : page === 'archive' ? '../#approach' : '../../#approach'
  const contactHref = page === 'home' ? '#contact' : page === 'archive' ? '../#contact' : '../../#contact'

  return (
    <Box as="header" className="site-header page-shell">
      <Box as="a" className="brand" href={homeHref} aria-label="이강욱 포트폴리오 처음으로">Gangwook Lee</Box>
      <Flex className="header-actions">
        <Box as="nav" className="site-nav" aria-label="주요 메뉴">
          <Box as="a" href={projectsHref} aria-current={page === 'archive' ? 'page' : undefined}>Projects</Box>
          <Box as="a" href={approachHref}>Approach</Box>
          <Box as="a" href={contactHref}>Contact</Box>
        </Box>
        <Button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`${theme === 'dark' ? '라이트' : '다크'} 모드로 전환`}>
          <Text as="span" aria-hidden="true">◐</Text> Theme
        </Button>
      </Flex>
    </Box>
  )
}
