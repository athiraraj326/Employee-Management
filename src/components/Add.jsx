import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addEmployeeDetailsAPI, updateEmployeeDetailsAPI } from '../services/allAPI';

const Add = ({ setEmployeeDetailsUploadResponse, show, handleClose, handleShow, setEmployeeDetails,setEmployeeDetailsUpdateResponse, employeeDetails,editData,modalMode}) => {

    const [isIdInvalid, setIsIdInvalid] = useState(false)
    const [isNameInvalid, setIsNameInvalid] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)


    const userDataValidation = (inputData) => {
        const { name, value } = inputData
        if (name == "employeeId") {
            setEmployeeDetails({ ...employeeDetails, empId: value })
            !!value.match(/^[1-9]\d*$/) ? setIsIdInvalid(false) : setIsIdInvalid(true)
        }
        if (name == "employeeName") {
            setEmployeeDetails({ ...employeeDetails, empName: value })
            !!value.match(/^[a-zA-Z]+ [a-zA-Z]+$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
        }
        if (name == "emailId") {
            setEmployeeDetails({ ...employeeDetails, emailId: value })
            !!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
        }
    }

    const handleAddEmployeeDetails = async () => {
        const { empId, empName, emailId, empStatus } = employeeDetails
        if (empId && empName && emailId && empStatus) {
            try {
                const response = await addEmployeeDetailsAPI(employeeDetails)
                // console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    handleClose()
                    setEmployeeDetails({ ...employeeDetails, empId: "", empName: "", emailId: "", empStatus: "" })
                    setEmployeeDetailsUploadResponse(response.data)
                    alert("Employee Details added successfully!!!")
                }

            } catch {
                console.log(err);

            }
        } else {
            alert("Please fill the form completely!!!")
        }
    }

    const handleUpdateDetails = async()=>{
        const {empId,empName,emailId,empStatus} = employeeDetails      
        if(empId && empName && emailId && empStatus){
            try{
              const response = await updateEmployeeDetailsAPI(editData.id,employeeDetails)
              // console.log(response);
                if(response.status>=200 && response.status<300){
                    handleClose()
                    setEmployeeDetails({...employeeDetails,empId:"",empName:"",emailId:"",empStatus:""})
                    setEmployeeDetailsUpdateResponse(response.data)
                    alert("Employee Details Updated successfully!!!")
                }
                
            }catch{
                console.log(err);             
            }
        }else{
            alert("Please fill the form completely!!!")
        }
      }


    return (
        <>
            <div className="d-flex align-items-center">
                <h4 className='fw-bold'>Add Employee Details</h4>
                <button onClick={handleShow} className='btn btn-success rounded ms-3 fs-5 fw-bolder'>+</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{ modalMode === 'add' ? 'Add' : 'Update'} Employee Details...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='border rounded p-3'>
                        <FloatingLabel controlId="floatingInputId" label="Employee ID" className="mb-3">
                            <Form.Control onChange={e => userDataValidation(e.target)} name='employeeId' type="text" placeholder="Employee ID" value={employeeDetails.empId} />
                        </FloatingLabel>
                        {
                            isIdInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter a valid Id</div>
                        }
                        <FloatingLabel controlId="floatingInputName" label="Employee Name" className="mb-3">
                            <Form.Control onChange={e => userDataValidation(e.target)} name='employeeName' type="text" placeholder="Employee Name" value={employeeDetails.empName} />
                        </FloatingLabel>
                        {
                            isNameInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter your full name</div>
                        }
                        <FloatingLabel controlId="floatingInputEmail" label="Email Address" className="mb-3">
                            <Form.Control onChange={e => userDataValidation(e.target)} name='emailId' type="text" placeholder="Email Address" value={employeeDetails.emailId} />
                        </FloatingLabel>
                        {
                            isEmailInvalid && <div className='mb-3 fw-bolder text-danger'>Invalid Email Address</div>
                        }
                        <Form.Select size='lg' style={{ fontSize: '16px' }} onChange={e => setEmployeeDetails({ ...employeeDetails, empStatus: e.target.value })} value={employeeDetails.empStatus}>
                            <option>Employee Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                    {
                        modalMode ==='add'?
                        <Button onClick={handleAddEmployeeDetails} className='btn btn-primary'>Add</Button>
                        :
                        <Button onClick={handleUpdateDetails} className='btn btn-success'>Update</Button>
                    }

                </Modal.Footer>
            </Modal>
        </>


    )
}

export default Add