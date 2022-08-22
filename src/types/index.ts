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
