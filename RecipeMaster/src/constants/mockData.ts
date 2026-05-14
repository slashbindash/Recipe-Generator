import { Recipe } from '../types/recipe';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Veggie Stew',
    image: 'https://placehold.co/600x400/png?text=Veggie+Stew',
    description: 'A hearty stew that fits everyone’s dietary needs.',
    category: 'Soups',
    tags: ['Vegan', 'Family-Size'],
    ingredients: [
      { id: 'i1', name: 'Carrots', amount: '3' },
      { id: 'i2', name: 'Potatoes', amount: '500g' }
    ]
  },
  {
    id: '2',
    title: 'Omelette',
    image: 'https://placehold.co/600x400/png?text=Omelette',
    description: 'Quick breakfast for one.',
    category: 'Breakfast',
    tags: ['Vegetarian', 'Quick'],
    ingredients: [
      { id: 'i3', name: 'Eggs', amount: '2' }
    ]
  }
];