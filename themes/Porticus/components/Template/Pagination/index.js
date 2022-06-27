import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import withProps from 'recompose/withProps';
import renderNothing from 'recompose/renderNothing';
import Pagination from './Pagination';

const makePagination = ({ startPage, endPage, pageCount, currentNumber, updateCurrentNumberHandler }) => {
	let pagItems = [];

	if (startPage > 1) {
		const firstPage = currentNumber === 1 ? <li key={currentNumber} onClick={() => updateCurrentNumberHandler(1)} className="pagination-item current">1</li> : <li className="pagination-item" onClick={() => updateCurrentNumberHandler(1)} key={1}>1</li>;
		const keyNumber = Math.random();
		const ellipsisStart = <li key={keyNumber} className="ellipsis-dots" aria-hidden="true"><span>...</span></li>;

		pagItems.push(firstPage);

		if (startPage !== 2) {
			pagItems.push(ellipsisStart);
		}
	}

	for (let index = startPage; index <= endPage; index++) {
		let pagNumber = index === currentNumber ? <li onClick={() => updateCurrentNumberHandler(index)} className="pagination-item current" key={index}>{index}</li> : <li className="pagination-item" onClick={() => updateCurrentNumberHandler(index)} key={index}>{index}</li>;

		if (startPage === endPage) {
			pagNumber = <li className="pagination-item disabled" key={index}>{index}</li>;
		}

		pagItems.push(pagNumber);
	}

	if (endPage < pageCount) {
		const lastPage = currentNumber === pageCount ? <li onClick={() => updateCurrentNumberHandler(pageCount)} className="pagination-item current" key={pageCount}>{pageCount}</li> : <li className="pagination-item" onClick={() => updateCurrentNumberHandler(pageCount)} key={pageCount}>{pageCount}</li>;
		const keyNumber = Math.random();
		const ellipsisEnd = <li key={keyNumber} className="ellipsis-dots" aria-hidden="true"><span>...</span></li>;

		if (endPage !== pageCount - 1) {
			pagItems.push(ellipsisEnd);
		}
		pagItems.push(lastPage);
	}

	return {
		pagItems: pagItems
	};
};

export default compose(
	withProps(makePagination),
	branch(({ pageCount }) => !pageCount, renderNothing)
)(Pagination); // daisy chains the above things into the component