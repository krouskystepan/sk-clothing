import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TCartItem {
  id: string
  name: string
  imageURL: string
  price: number
  quantity: number
}

// HERE
const initialState: TCartItem[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItem>) => {
      const existingItem = state.find((item) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload
      const updatedState = state.filter((item) => item.id !== itemIdToRemove)
      return updatedState
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemToUpdate = state.find((item) => item.id === action.payload.id)
      if (itemToUpdate) {
        if (action.payload.quantity <= 0) {
          // Remove the item if quantity becomes 0 or lower
          return state.filter((item) => item.id !== action.payload.id)
        }
        itemToUpdate.quantity = action.payload.quantity
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
