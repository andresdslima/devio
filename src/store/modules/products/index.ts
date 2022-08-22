import { createSlice } from '@reduxjs/toolkit';
import { ProductsSliceProps } from '../../../@types/index';

const initialState: ProductsSliceProps = {
	myOrder: [],
	allOrders: [],
};

const productsSlice = createSlice({
	name: '@products',
	initialState,
	reducers: {
		setMyOrder: (state, action) => {
			Object.assign(state, {
				...state,
				myOrder: [...state.myOrder, action.payload],
			});
		},
		setAllOrders: (state, action) => {
			Object.assign(state, {
				...state,
				allOrders: [...state.allOrders, action.payload],
			});
		},
	},
});

export const { setMyOrder, setAllOrders } = productsSlice.actions;

export default productsSlice.reducer;
