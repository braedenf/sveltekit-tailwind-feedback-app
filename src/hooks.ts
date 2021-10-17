import { v4 as uuidv4 } from 'uuid';

export async function handle({ request, resolve }) {
	request.locals.userName = 'Braeden';
	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers,
			'hello-world': 'hey programmer'
		}
	};
}

export function getSession(request) {
	return {
		user: {
			id: uuidv4(),
			name: 'braeden',
			access: 'admin'
		}
	};
}
