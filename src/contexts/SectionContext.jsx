import { createContext, useReducer } from 'react'

export const SectionContext = createContext()

const initialState = {
  showAbout: true,
  showFavorites: true,
  showContact: true
}

const sectionReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ABOUT':
      return { ...state, showAbout: !state.showAbout }
    case 'TOGGLE_FAVORITES':
      return { ...state, showFavorites: !state.showFavorites }
    case 'TOGGLE_CONTACT':
      return { ...state, showContact: !state.showContact }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export const SectionProvider = ({ children }) => {
  const [sections, dispatch] = useReducer(sectionReducer, initialState)

  return (
    <SectionContext.Provider value={{ sections, dispatch }}>
      {children}
    </SectionContext.Provider>
  )
}