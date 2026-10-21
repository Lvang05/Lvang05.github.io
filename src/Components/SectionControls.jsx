import { useContext } from 'react'
import { SectionContext } from '../contexts/SectionContext'

const SectionControls = () => {
  const { dispatch } = useContext(SectionContext)

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '1rem 0', flexWrap: 'wrap' }}>
      <button onClick={() => dispatch({ type: 'TOGGLE_ABOUT' })}>
        Toggle About
      </button>
      <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITES' })}>
        Toggle Favorites
      </button>
      <button onClick={() => dispatch({ type: 'TOGGLE_CONTACT' })}>
        Toggle Contact
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  )
}

export default SectionControls