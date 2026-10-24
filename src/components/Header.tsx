import { Box, Button, Text, styled } from '@devup-ui/react'
import type { Theme } from '../hooks/useTheme'

const HeaderShell = styled.header`
  display: flex; align-items: center; justify-content: space-between; gap: 22px; min-height: 78px;
  width: min(calc(100% - 76px), 1120px); margin-inline: auto; border-bottom: 1px solid var(--border);
  @media (max-width: 750px) { width: calc(100% - 38px); }
  @media (max-width: 390px) { width: calc(100% - 28px); min-height: 67px; gap: 9px; flex-wrap: wrap; padding-block: 14px; }
`

const Brand = styled.a`
  white-space: nowrap; font-size: 17px; font-weight: 800; letter-spacing: -.02em;
  @media (max-width: 390px) { font-size: 14px; }
`

const HeaderActions = styled.div`
  display: flex; align-items: center; justify-content: end; gap: 24px;
  @media (max-width: 390px) { width: 100%; justify-content: space-between; gap: 7px; }
`

const Navigation = styled.nav`
  display: flex; align-items: center; justify-content: end; flex-wrap: wrap; gap: 25px; font-size: 13px; font-weight: 700;
  @media (max-width: 390px) { justify-content: start; gap: 12px; font-size: 12px; }
`

interface HeaderProps {
  page: 'home' | 'archive' | 'detail'
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ page, theme, onToggleTheme }: HeaderProps) {
  const homeHref = page === 'home' ? '#top' : page === 'archive' ? '../' : '../../'
  const projectsHref = page === 'home' ? './projects/' : page === 'archive' ? '#archive' : '../'
  const contactHref = page === 'home' ? '#contact' : page === 'archive' ? '../#contact' : '../../#contact'

  return (
    <HeaderShell>
      <Brand href={homeHref} aria-label="이강욱 포트폴리오 처음으로">Gangwook Lee</Brand>
      <HeaderActions>
        <Navigation aria-label="주요 메뉴">
          <Box as="a" href={projectsHref} aria-current={page === 'archive' ? 'page' : undefined} _hover={{ color: '$primary' }} selectors={{ '&[aria-current="page"]': { color: '$primary' } }}>Project</Box>
          <Box as="a" href={contactHref} _hover={{ color: '$primary' }}>Contact</Box>
        </Navigation>
        <Button type="button" onClick={onToggleTheme} aria-label={`${theme === 'dark' ? '라이트' : '다크'} 모드로 전환`}
          minWidth="44px" minHeight="44px" p="7px 10px" border="1px solid $border" borderRadius="$buttonRadius" bg="$surface" color="$text" cursor="pointer" fontSize="12px" fontWeight="800" _hover={{ bg: '$secondary' }} _active={{ bg: '$secondaryActive' }} _focusVisible={{ outlineColor: '$focus' }}>
          <Text as="span" aria-hidden="true">◐</Text> Theme
        </Button>
      </HeaderActions>
    </HeaderShell>
  )
}
