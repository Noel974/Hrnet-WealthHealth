import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import { useTable } from 'react-table';
import SearchBar from '../Filtre/Search';

function Listtable(){
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const [pageSize, setPageSize] = useState(10); 

    const data = React.useMemo(() => employees.slice(0, pageSize), [employees, pageSize]); // 

    const columns = React.useMemo(
        () => [
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Start Date', accessor: 'startDate' },
            { Header: 'Department', accessor: 'department' },
            { Header: 'Date of Birth', accessor: 'dateOfBirth' },
            { Header: 'Street', accessor: 'street' },
            { Header: 'City', accessor: 'city' },
            { Header: 'State', accessor: 'state' },
            { Header: 'Zip Code', accessor: 'zipCode' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return(
        <main className="main-table">
            <h2>Current Employees</h2>
            <SearchBar className="search" pageSize={pageSize} setPageSize={setPageSize} />
            <table {...getTableProps()} className="table"> 
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <NavLink to="/">Home</NavLink>
        </main>
    )
}

export default Listtable;
