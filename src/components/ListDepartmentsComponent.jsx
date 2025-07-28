import React, { useEffect, useState } from 'react'
import { getAllDepartments } from '../services/Department';

const ListDepartmentsComponent = () => {

     /*let  dummyData=[
          {
               "id":1,
               "departmentName":"R&D",
               "departmentDescription":"Research and Department"
          },
          {
               "id":2,
               "departmentName":"Finance",
               "departmentDescription":"Finance Developement"
          },
          {
               "id":3,
               "departmentName":"Sports",
               "departmentDescription":"Sports Department"
          }
     ] */

     const [departments,setDepartments]=useState([]);
     useEffect( ()=>{
          getAllDepartments().then((response)=>{
               console.log(response.data);
               setDepartments(response.data);
          }).catch(error=>{
               console.error(error)
          })
     },[])

     
  return (
    <div className='container'>
     <h2 className='text-center'>List of Departments</h2>
     <table className='table table-bordered table-striped'>
          <thead>
               <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
               </tr>
          </thead>
          <tbody>
               {
                    departments.map(department=>
                         <tr key={department.id}>
                              <td>{department.id}</td>
                              <td>{department.departmentName}</td>
                              <td>{department.departmentDescription}</td>
                         </tr>
                    )
               }
          </tbody>
     </table>

    </div>
  )
}

export default ListDepartmentsComponent