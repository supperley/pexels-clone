import { categories } from './constants';

export const getRandomCategories = () =>
    categories.sort(() => Math.random() - 0.5).slice(0, 7);
