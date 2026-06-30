import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchEmployees } from "../features/employees/employeeSlice";

import React from 'react';

const EmployeeList = () => {
    const dispatch = useDispatch();

    const {data, loading, error} = useSelector(
        (state) => state.employees
    );
    useEffect(()=>{
        dispatch(fetchEmployees());
    },[]);

    if (loading) return <h2>Loading.... </h2>;

    if (error) return <h2>{error}</h2>;
    return (
        <>
           <h1>Employees</h1> 
           {data?.map((emp) => (
            <div key={emp.id}>
                <h3>{emp.name}</h3>
                <p>{emp.email}</p>
            </div>
           ))}
        </>
    );
};
export default EmployeeList;
