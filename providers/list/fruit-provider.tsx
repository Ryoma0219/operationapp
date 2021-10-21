import React, {
  createContext,
  useContext,
  useCallback,
  useReducer
} from 'react'

import { useImmerReducer } from 'use-immer'

import { fruitReducer, Dispatches } from './fruit-reducer'

type TFruitState = {
  fruit: any
}

type TContextProps = TFruitState & {
  setFruit(fruit: TFruitState): void
}

const initialState: TFruitState = {
  fruit: {
    name: '',
    ids: ['abc'],
    fruit: {
      'abc': {
        age: 27,
        name: 'ohoshi'
      }
    }
  }
}

const FruitContext = createContext<TContextProps>({
  ...initialState,
  setFruit: () => Promise.resolve(),
})

export const FruitProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(fruitReducer, initialState)
  const setFruit = useCallback((fruit: TFruitState) => {
    dispatch(Dispatches.setFruit(fruit))
  }, [])

  return (
    <FruitContext.Provider value={{
      ...state,
      setFruit,
    }}>
      {children}
    </FruitContext.Provider>
  )
}

export const useFruit = () => useContext(FruitContext)
