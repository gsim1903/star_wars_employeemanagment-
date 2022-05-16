import React, { useEffect, useState } from 'react'
import axios from 'axios'

//get
//fetch it with axios
//store the data
//rely on useState (componetstate)
//dsiplay the jsx return
// use.map to create an aray with jsx

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const response = await axios.get('https://swapi.dev/api/people')
    setEmployees(response.data.results)
  }

  const employeeList = employees.map((employee) => {
    return (
      <li key={employees.name}>
        <h1>{employee.name}</h1>
      </li>
    )
  })

  useEffect(() => {
    fetchEmployees()
  }, [])

  return <div data-cy="employee-list"> {employeeList}</div>
}

export default EmployeeList
