import React, { useEffect, useState } from 'react'
import { deleteEmployeeDetailsAPI, getAllEmployeeDetailsAPI } from '../services/allAPI';

const List = ({employeeDetailsUploadResponse,employeeDetailsUpdateResponse, setEmployeeDetails,setEditData,setModalMode,setShow}) => {
  const [allEmployees, setAllEmployees] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, [employeeDetailsUploadResponse,employeeDetailsUpdateResponse])

  const getAllEmployees = async () => {
    try {
      const response = await getAllEmployeeDetailsAPI()
      // console.log(response);
      setAllEmployees(response.data)

    } catch (err) {
      console.log(err);
    }
  }
  // console.log(allEmployees);

  const deleteEmployee = async(id)=>{
    await deleteEmployeeDetailsAPI(id)
    getAllEmployees()
  }

  const editEmployee = async (employee)=>{
    // console.log(employee);
    setEmployeeDetails({empId: employee.empId, empName: employee.empName, emailId: employee.emailId, empStatus: employee.empStatus})
    setEditData(employee)
    setModalMode('edit');
    setShow(true);
  }


  return (
    <div className='container px-4 mx-auto'>
      <h3 className='text-primary text-center mb-5'>Employee Details</h3>
      {
        allEmployees?.length > 0 ?
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Email Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {
              allEmployees?.map((employee,index) => (
                <tbody>
                  <td className='p-2'>{index+1}</td>
                  <td className='p-2'>{employee?.empId}</td>
                  <td className='p-2'>{employee?.empName}</td>
                  <td className='p-2'>{employee?.emailId}</td>
                  <td className='p-2'>{employee?.empStatus}</td>
                  <td>
                    <div className="d-flex">
                      <button onClick={()=>editEmployee(employee)} className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
                      <button onClick={()=>deleteEmployee(employee?.id)} className='btn text-danger'><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tbody>
              ))
            }
          </table>
          :
          <div className="text-center">No details are added yet!!!</div>

      }
    </div>
  )
}

export default List