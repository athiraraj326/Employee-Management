import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

export const addEmployeeDetailsAPI = async (data)=>{
    return await commonAPI("POST",`${SERVER_URL}/allEmployees`,data)
} 

export const getAllEmployeeDetailsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allEmployees`,"")
}

export const deleteEmployeeDetailsAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allEmployees/${id}`,{})
}

export const updateEmployeeDetailsAPI = async(id,updateEmployeeDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allEmployees/${id}`,updateEmployeeDetails)
}