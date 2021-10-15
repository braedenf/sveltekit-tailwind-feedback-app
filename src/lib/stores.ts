import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

import type { Writable } from 'svelte/store';
import type { Feedback } from './types';

export const FeedbackStore: Writable<Feedback[]> = writable([
	{
		id: uuidv4(),
		rating: 7,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.'
	},
	{
		id: uuidv4(),
		rating: 9,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.'
	},
	{
		id: uuidv4(),
		rating: 8,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.'
	},
	{
		id: uuidv4(),
		rating: 6,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.'
	}
]);
