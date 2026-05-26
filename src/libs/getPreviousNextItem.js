const getPreviousNextItem = (items, currentId) => {
	const totalItems = items?.length;
	const currentIndex = items?.findIndex(({ id }) => id === currentId);
	const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
	const nextItem = currentIndex < totalItems - 1 ? items[currentIndex + 1] : null;
	const currentItem = items[currentIndex];

	const prevId = prevItem ? prevItem.id : null;
	const nextId = nextItem ? nextItem.id : null;
	const isPrevItem = !!prevItem;
	const isNextItem = !!nextItem;
	return { prevId, nextId, currentItem, isPrevItem, isNextItem };
};

export default getPreviousNextItem;
