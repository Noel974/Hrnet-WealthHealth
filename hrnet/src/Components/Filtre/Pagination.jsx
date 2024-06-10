import React from 'react';

function Pagination({ canPreviousPage, canNextPage, pageCount, gotoPage, nextPage, previousPage, pageIndex }) {
    return (
        <div className="dataTables_paginate paging_simple_numbers" id="employee-table_paginate">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageCount}
                </strong>{' '}
            </span>
        </div>
    );
}

export default Pagination;
