import './matchMedia.mock'
import { render, fireEvent, act, screen } from '@testing-library/react'
import ToggleDarkModeButton from "../ToggleDarkModeButton";

describe('ToggleDarkModeButton', () => {

  it('最初は light テーマ', () => {
    const { container } = render(<ToggleDarkModeButton />)

    expect(container.innerHTML).toMatch('<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>');
  })

  it('クリックしてダークテーマ', () => {
    const { container } = render(<ToggleDarkModeButton />)
    fireEvent.click(screen.getByRole('button'))

    expect(container.innerHTML).toMatch('<path d=\"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z\"');
  })

  it('ダブルクリックしてライトテーマ', async () => {
    const { container } = render(<ToggleDarkModeButton />)
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))

    expect(container.innerHTML).toMatch('<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>');
  })
});
