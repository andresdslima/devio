import { ProductProps } from '../@types';
import bigMac from '../assets/images/bigMac.png';
import fritas from '../assets/images/acompanhamentos.jpg';
import coca from '../assets/images/bebidas.png';
import hamburguer from '../assets/images/combos.jpg';
import sobremesa from '../assets/images/sobremesas.jpg';

export const products: ProductProps[] = [
	{
		id: 1,
		name: 'Hambúrguer',
		description: '2x hamburguer 200g',
		price: '110,00',
		categoria: 'hamburguer',
		image: `${hamburguer}`,
	},
	{
		id: 2,
		name: 'Cheeseburger',
		description: '2x hamburguer 200g',
		price: '120,00',
		categoria: 'hamburguer',
		image: `${hamburguer}`,
	},
	{
		id: 3,
		name: 'McChicken',
		description: '2x frango 200g',
		price: '130,00',
		categoria: 'frango',
		image: `${hamburguer}`,
	},
	{
		id: 4,
		name: 'Fritas',
		description: '2x fritas 200g',
		price: '140,00',
		categoria: 'fritas',
		image: `${fritas}`,
	},
	{
		id: 5,
		name: 'Chicken fingers',
		description: '2x frango 200g',
		price: '150,00',
		categoria: 'frango',
		image: `${hamburguer}`,
	},
	{
		id: 6,
		name: 'Chicken wings',
		description: '2x frango 200g',
		price: '160,00',
		categoria: 'frango',
		image: `${hamburguer}`,
	},
	{
		id: 7,
		name: 'Big Mac',
		description: '2x hamburguer 200g',
		price: '170,00',
		categoria: 'hamburguer',
		image: `${bigMac}`,
	},
	{
		id: 8,
		name: 'Fish burger',
		description: '2x peixe 200g',
		price: '180,00',
		categoria: 'peixe',
		image: `${hamburguer}`,
	},
	{
		id: 9,
		name: 'Onion burger',
		description: '200g',
		price: '190,00',
		categoria: 'vegan',
		image: `${hamburguer}`,
	},
	{
		id: 10,
		name: 'McSalad',
		description: '200g',
		price: '200,00',
		categoria: 'vegan',
		image: `${hamburguer}`,
	},
	{
		id: 11,
		name: 'Coca-cola',
		description: '500ml',
		price: '210,00',
		categoria: 'bebida',
		image: `${coca}`,
	},
	{
		id: 12,
		name: 'McFlury',
		description: '500ml',
		price: '220,00',
		categoria: 'sobremesa',
		image: `${sobremesa}`,
	},
];
