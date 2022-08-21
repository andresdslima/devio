interface ProductProps {
	id: number;
	name: string;
	description: string;
	price: string;
	categoria: string;
}

export const products: ProductProps[] = [
	{
		id: 1,
		name: 'Hambúrguer',
		description: '2x hamburguer 200g',
		price: '110,00',
		categoria: 'hamburguer',
	},
	{
		id: 2,
		name: 'Cheeseburger',
		description: '2x hamburguer 200g',
		price: '120,00',
		categoria: 'hamburguer',
	},
	{
		id: 3,
		name: 'McChicken',
		description: '2x frango 200g',
		price: '130,00',
		categoria: 'frango',
	},
	{
		id: 4,
		name: 'Fritas',
		description: '2x fritas 200g',
		price: '140,00',
		categoria: 'fritas',
	},
	{
		id: 5,
		name: 'Chicken fingers',
		description: '2x frango 200g',
		price: '150,00',
		categoria: 'frango',
	},
	{
		id: 6,
		name: 'Chicken wings',
		description: '2x frango 200g',
		price: '160,00',
		categoria: 'frango',
	},
	{
		id: 7,
		name: 'Big Mac',
		description: '2x hamburguer 200g',
		price: '170,00',
		categoria: 'hamburguer',
	},
	{
		id: 8,
		name: 'Fish burger',
		description: '2x peixe 200g',
		price: '180,00',
		categoria: 'peixe',
	},
	{
		id: 9,
		name: 'Onion burger',
		description: '200g',
		price: '190,00',
		categoria: 'vegan',
	},
	{
		id: 10,
		name: 'McSalad',
		description: '200g',
		price: '200,00',
		categoria: 'vegan',
	},
	{
		id: 11,
		name: 'Coca-cola',
		description: '500ml',
		price: '210,00',
		categoria: 'bebida',
	},
	{
		id: 12,
		name: 'McFlury',
		description: '500ml',
		price: '220,00',
		categoria: 'sobremesa',
	},
];
