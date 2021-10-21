import { Draft } from 'immer/dist/types/types-external'

type TAction = {
  type: 'SET_LIST',
  payload: any
}

const setFruit = (fruit: any): TAction => ({ type: 'SET_LIST', payload: fruit })

export const Dispatches = {
  setFruit
}

export const fruitReducer = (draft: Draft<any>, action: TAction): void => {
  switch (action.type) {
    case 'SET_LIST':
      draft.fruit = action.payload
      console.log(action)
      break
    default:
      break
  }
}
