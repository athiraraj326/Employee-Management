import React, { useState } from 'react'
import Add from '../components/Add'
import List from '../components/List'

const Home = () => {
  const  [employeeDetailsUploadResponse,setEmployeeDetailsUploadResponse] = useState("")
  const  [employeeDetailsUpdateResponse,setEmployeeDetailsUpdateResponse] = useState("")
  const [editData, setEditData] = useState(null);

  const [employeeDetails, setEmployeeDetails] = useState({
    empId: "", empName: "", emailId: "", empStatus: ""
})

  const [show, setShow] = useState(false);
  const [modalMode, setModalMode] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => {
      setModalMode('add');
      setShow(true);}


  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mt-3">
        <Add setEmployeeDetailsUploadResponse={setEmployeeDetailsUploadResponse} show={show} handleClose={handleClose} handleShow={handleShow} setEmployeeDetails={setEmployeeDetails} employeeDetails={employeeDetails} editData={editData} setEmployeeDetailsUpdateResponse={setEmployeeDetailsUpdateResponse} modalMode={modalMode} setModalMode={setModalMode}/>
      </div>
      <div className="container-fluid my-5">
        <List employeeDetailsUploadResponse={employeeDetailsUploadResponse} employeeDetailsUpdateResponse={employeeDetailsUpdateResponse} editData={editData}  setEmployeeDetails={setEmployeeDetails} setEditData={setEditData} setModalMode={setModalMode} setShow={setShow}/>
      </div>
    </div>
  )
}

export default Home


