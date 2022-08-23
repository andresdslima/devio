export interface ChildrenProps {
	children: JSX.Element[] | JSX.Element;
}

export interface ModalProps {
	showModal?: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductProps {
	id: number;
	name: string;
	description: string;
	price: string;
	categoria?: string;
	image: string;
}

export interface OrderProps {
	client_id: number;
	client: string;
	comment: string;
}

export interface ProductsSliceProps {
	myOrder: (ProductProps | OrderProps)[];
	allOrders: (ProductProps | OrderProps)[][];
}

export interface PersistedReducerProps {
	persistedReducer: ProductsSliceProps;
}

export interface ButtonProps {
	color: string;
}
