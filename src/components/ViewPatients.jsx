import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewPatients = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json").then(

            (response) => {

                changeData(response.data)
            }
        ).catch()
    }

    useEffect(

        () => {
            fetchData()
        }
    )


    return (
        <div>

            <NavigationBar />
            <table className="table table-primary  table-hover w-75 mx-auto mt-4">
                <thead>
                    <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Room No</th>
                        <th scope="col">Mobile Number</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (value, index) => {

                            return (

                                <tr>
                                    <td>{value.patientId}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.bloodGroup}</td>
                                    <td>{value.doctor}</td>
                                    <td>{value.roomNo}</td>
                                    <td>{value.mobile}</td>


                                </tr>


                            )
                        }
                    )}


                </tbody>
            </table>


        </div >
    )
}

export default ViewPatients