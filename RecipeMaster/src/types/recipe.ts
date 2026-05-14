//recipe structure

export interface Ingredient {
  id: string;
  name: string;
  amount: string; // e.g., "200g" or "3 pieces"
}

export interface Recipe {
  id: string;
  title: string;
  image: string; // URL for a placeholder image
  description: string;
  ingredients: Ingredient[];
  category: string; // e.g., "Breakfast", "Lunch", etc.
  tags: string[]; // e.g., ["Vegan", "Quick", "Dinner"]
}