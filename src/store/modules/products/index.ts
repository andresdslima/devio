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
		deleteMyOrder: state => {
			Object.assign(state, {
				...state,
				myOrder: [],
			});
		},
		setAllOrders: (state, action) => {
			Object.assign(state, {
				...state,
				allOrders: [...state.allOrders, action.payload],
			});
		},
		changeOrderStatus: (state, action) => {
			Object.assign(state, {
				...state,
				allOrders: state.allOrders.map(orderArray => {
					const order = orderArray[orderArray.length - 1];

					if (order.id === action.payload) {
						order.status = 'ready';
					}

					return orderArray;
				}),
			});
		},
		deleteOrderFromAll: (state, action) => {
			Object.assign(state, {
				...state,
				allOrders: state.allOrders.filter(orderArray => {
					const order = orderArray[orderArray.length - 1];

					return order.id !== action.payload;
				}),
			});
		},
	},
});

export const {
	setMyOrder,
	setAllOrders,
	deleteMyOrder,
	changeOrderStatus,
	deleteOrderFromAll,
} = productsSlice.actions;

export default productsSlice.reducer;
