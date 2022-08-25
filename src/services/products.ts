import { ProductProps } from '../@types';
import bigMac from '../assets/images/bigMac.png';
import fritas from '../assets/images/acompanhamentos.jpg';
import coca from '../assets/images/bebidas.png';
import hamburguer from '../assets/images/combos.jpg';
import sobremesa from '../assets/images/sobremesas.jpg';

export const products: ProductProps[] = [
	{
		id: 'ham-110-a0',
		name: 'Hambúrguer',
		description: '2x hamburguer 200g',
		price: '110,00',
		category: 'hamburguer',
		image: `${hamburguer}`,
	},
	{
		id: 'che-120-b1',
		name: 'Cheeseburger',
		description: '2x hamburguer 200g',
		price: '120,00',
		category: 'hamburguer',
		image: `${hamburguer}`,
	},
	{
		id: 'mcc-130-c2',
		name: 'McChicken',
		description: '2x frango 200g',
		price: '130,00',
		category: 'frango',
		image: `${hamburguer}`,
	},
	{
		id: 'fri-140-d3',
		name: 'Fritas',
		description: '2x fritas 200g',
		price: '140,00',
		category: 'fritas',
		image: `${fritas}`,
	},
	{
		id: 'chi-150-e4',
		name: 'Chicken fingers',
		description: '2x frango 200g',
		price: '150,00',
		category: 'frango',
		image: `${hamburguer}`,
	},
	{
		id: 'chi-160-f5',
		name: 'Chicken wings',
		description: '2x frango 200g',
		price: '160,00',
		category: 'frango',
		image: `${hamburguer}`,
	},
	{
		id: 'big-170-g6',
		name: 'Big Mac',
		description: '2x hamburguer 200g',
		price: '170,00',
		category: 'hamburguer',
		image: `${bigMac}`,
	},
	{
		id: 'fis-180-h7',
		name: 'Fish burger',
		description: '2x peixe 200g',
		price: '180,00',
		category: 'peixe',
		image: `${hamburguer}`,
	},
	{
		id: 'oni-190-i8',
		name: 'Onion burger',
		description: '200g',
		price: '190,00',
		category: 'vegan',
		image: `${hamburguer}`,
	},
	{
		id: 'mcs-200-j9',
		name: 'McSalad',
		description: '200g',
		price: '200,00',
		category: 'vegan',
		image: `${hamburguer}`,
	},
	{
		id: 'coc-210-k0',
		name: 'Coca-cola',
		description: '500ml',
		price: '210,00',
		category: 'bebida',
		image: `${coca}`,
	},
	{
		id: 'mcf-220-l1',
		name: 'McFlury',
		description: '500ml',
		price: '220,00',
		category: 'sobremesa',
		image: `${sobremesa}`,
	},
];
