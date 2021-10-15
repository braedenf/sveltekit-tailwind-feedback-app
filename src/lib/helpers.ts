export function range(from: number, to: number) {
	if (!(to > from)) throw 'first argument must be smaller then second one';
	if (from !== from || to !== to) throw 'arguments must be of type integer';
	if (from < 0 || to < 0) throw 'arguments must be positive';

	var elements = to - from + 1;
	return [...Array(elements)].map((_, i) => (i += from));
}
