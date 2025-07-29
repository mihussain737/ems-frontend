import React,{useState,useEffect} from 'react'
import { deleteEmployee, listEmplyees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

     /*const dummyData= [
          {
               "id":1,
               "firstName":"Imam",
               "lastName":"Hussain",
               "email":"imam@gmail.com"
          },
          {
               "id":2,
               "firstName":"Chote",
               "lastName":"Pathan",
               "email":"chote@gmail.com"
          },
          {
               "id":3,
               "firstName":"Mote",
               "lastName":"Hussain",
               "email":"mote@gmail.com"
          }
     ] */

          const [employees,setEmployees]= useState([])

          const navigator=useNavigate();

          useEffect(()=> {
              getAllEmployees();
          }, [])

          function getAllEmployees(){
                listEmplyees().then((response)=>{
                    setEmployees(response.data);
               }).catch(error => {
                    console.error(error);
               })
          }

          function addNewEmployee(){
               navigator('/add-employee')

          }

          function updateEmployee(id){
               let flagConfirm= confirm("Are you sure want to edit this!!")
               if(flagConfirm){
                    navigator(`/edit-employee/${id}`)
               }
               
          }

          function removeEmployee(id){
              let flagConfirm= confirm("Are you sure want to delete!!")
              if(flagConfirm){
               console.log(id);
               deleteEmployee(id).then((response)=>{
                    getAllEmployees()
               }).catch(error=>{
                    console.error(error)
               })
              }else{
               getAllEmployees()
              }
               
          }

  return (
    <div className='container'>
     <h2 className='text-center'>List of Employees</h2>
     <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
     <table className='table table-striped table-bordered'>
          <thead>
            <tr style={{fontSize:'20px'}}>
               <th>Employee Id</th>
               <th>Employee First Name</th>
               <th>Employee Last Name</th>
               <th>Employee Email Id</th>
               <th style={{textAlign:'center'}}>Actions</th>
           </tr>
          </thead>
          <tbody>
               {
                    employees.map(employee =>
                    <tr key={employee.id}>
                         <td>{employee.id}</td>
                         <td>{employee.firstName}</td>
                         <td>{employee.lastName}</td>
                         <td>{employee.email}</td>
                         <td><button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>Update</button>
                         <button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)}
                              style={{marginLeft:'10px'}}>Delete</button></td>
                    </tr>
                    )
               }
          </tbody>
     </table>
    </div>
  )
}

export default ListEmployeeComponent