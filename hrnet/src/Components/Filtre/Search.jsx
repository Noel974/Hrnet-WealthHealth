import React from 'react';

function SearchBar({ pageSize, setPageSize }) {
    return (
        <div className="search-bar">
            <div className="dataTables_length" id="employee-table_length">
                <label>Show 
                    <select name="employee-table_length" aria-controls="employee-table" className="" onChange={e => setPageSize(Number(e.target.value))}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </label>
            </div>
            <div id="employee-table_filter" className="dataTables_filter">
                <label>Search:
                    <input type="search" className="" placeholder="" aria-controls="employee-table" />
                </label>
            </div>
        </div>
    );
}

export default SearchBar;
