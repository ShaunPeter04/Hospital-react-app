import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewPatients = () => {

    const [data, changeData] = useState(

        [
            {
                "patientId": "PT101",
                "name": "Arun Kumar",
                "age": 34,
                "gender": "Male",
                "bloodGroup": "O+",
                "doctor": "Dr. Meera Nair",
                "disease": "Viral Fever",
                "roomNo": "A101",
                "admissionDate": "2026-07-01",
                "mobile": "9876543210"
            },
            {
                "patientId": "PT102",
                "name": "Anjali Nair",
                "age": 28,
                "gender": "Female",
                "bloodGroup": "A+",
                "doctor": "Dr. Joseph Thomas",
                "disease": "Migraine",
                "roomNo": "A102",
                "admissionDate": "2026-07-02",
                "mobile": "9876543211"
            },
            {
                "patientId": "PT103",
                "name": "Rahul Das",
                "age": 45,
                "gender": "Male",
                "bloodGroup": "B+",
                "doctor": "Dr. Suresh Kumar",
                "disease": "Diabetes",
                "roomNo": "B201",
                "admissionDate": "2026-07-03",
                "mobile": "9876543212"
            },
            {
                "patientId": "PT104",
                "name": "Sneha Roy",
                "age": 31,
                "gender": "Female",
                "bloodGroup": "AB+",
                "doctor": "Dr. Meera Nair",
                "disease": "Asthma",
                "roomNo": "B202",
                "admissionDate": "2026-07-03",
                "mobile": "9876543213"
            },
            {
                "patientId": "PT105",
                "name": "Vishnu Prasad",
                "age": 53,
                "gender": "Male",
                "bloodGroup": "O-",
                "doctor": "Dr. Anand Krishnan",
                "disease": "Hypertension",
                "roomNo": "C301",
                "admissionDate": "2026-07-04",
                "mobile": "9876543214"
            },
            {
                "patientId": "PT106",
                "name": "Keerthana S",
                "age": 24,
                "gender": "Female",
                "bloodGroup": "A-",
                "doctor": "Dr. Joseph Thomas",
                "disease": "Food Poisoning",
                "roomNo": "C302",
                "admissionDate": "2026-07-05",
                "mobile": "9876543215"
            },
            {
                "patientId": "PT107",
                "name": "Nikhil Menon",
                "age": 39,
                "gender": "Male",
                "bloodGroup": "B-",
                "doctor": "Dr. Anand Krishnan",
                "disease": "Fracture",
                "roomNo": "D401",
                "admissionDate": "2026-07-06",
                "mobile": "9876543216"
            },
            {
                "patientId": "PT108",
                "name": "Priya Thomas",
                "age": 47,
                "gender": "Female",
                "bloodGroup": "O+",
                "doctor": "Dr. Suresh Kumar",
                "disease": "Pneumonia",
                "roomNo": "D402",
                "admissionDate": "2026-07-06",
                "mobile": "9876543217"
            },
            {
                "patientId": "PT109",
                "name": "Akhil Raj",
                "age": 36,
                "gender": "Male",
                "bloodGroup": "AB-",
                "doctor": "Dr. Meera Nair",
                "disease": "Kidney Stone",
                "roomNo": "E501",
                "admissionDate": "2026-07-07",
                "mobile": "9876543218"
            },
            {
                "patientId": "PT110",
                "name": "Divya Mohan",
                "age": 29,
                "gender": "Female",
                "bloodGroup": "A+",
                "doctor": "Dr. Joseph Thomas",
                "disease": "Typhoid",
                "roomNo": "E502",
                "admissionDate": "2026-07-08",
                "mobile": "9876543219"
            }
        ]

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