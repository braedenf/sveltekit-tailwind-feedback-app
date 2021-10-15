export type ID = number | string;

export type Feedback = {
	id: ID;
	rating: number;
	text: string;
};

export type UIThemeOrder = 'primary' | 'secondary';

export type ButtonType = 'button' | 'menu' | 'reset' | 'submit';
