import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Hemanth' },
  { id: '1', name: 'Kumar' },
  { id: '2', name: 'Jack' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
