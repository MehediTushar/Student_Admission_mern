import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router';
import {toast, Toaster} from "react-hot-toast";
import {createStudentRequest,studentByIDRequest, updateStudentRequest} from "../apiRequest/apiRequest.js";

const StudentForm = () => {
    let navigate=useNavigate();
    let [FormValue,SetFormValue]=useState({firstName:"", 
    lastName:"",
     gender:"", 
     dateOfBirth:"", 
     nationality:"",
     address:"",
     email:"",
     phone:"",
     admissionDate:"",
     courses:"",
     status:""
    });
    let [UpdateID,SetUpdateID]=useState(null);

    useEffect(() => {
        (async ()=>{
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            SetUpdateID(id)
            if(id!==null){
               await FillForm(id)
            }
        })()
    }, []);

    const FillForm =async (id) => {
        let res= await studentByIDRequest(id)
        SetFormValue({
            firstName:res['firstName'],
            lastName:res['lastName'],
            gender:res['gender'],
            dateOfBirth:res['dateOfBirth'],
            nationality:res['nationality'],
            address:res['address'],
            email:res['email'],
            phone:res['phone'],
            admissionDate:res['admissionDate'],
            courses:res['courses'],
            status:res['status']
        })
     }
     const InputOnChange = (name,value) => {
        SetFormValue((FormValue)=>({
            ...FormValue,
            [name]:value
        }))
    }
    const Save = async () => {
        if(FormValue.firstName.length===0){
            toast.error("First Name Required !")
        }
        else if(FormValue.lastName.length===0){
            toast.error("Last Name Required !")
        }
        else if(FormValue.gender.length===0){
            toast.error("Gender Required !")
        }
        else if(FormValue.dateOfBirth.length===0){
            toast.error("Date Of Birth Required !")
        }
        else if(FormValue.nationality.length===0){
            toast.error("Nationality Required !")
        }
        else if(FormValue.address.length===0){
            toast.error("Address Required !")
        }
        else if(FormValue.email.length===0){
            toast.error("Email Required !")
        }
        else if(FormValue.phone.length===0){
            toast.error("Phone Required !")
        }
        else if(FormValue.admissionDate.length===0){
            toast.error("Admission Date Required !")
        }
        else if(FormValue.courses.length===0){
            toast.error("Course Required !")
        }
        else if(FormValue.status.length===0){
            toast.error("Status Required !")
        }
        else{
            if(UpdateID==null){
                let res=await createStudentRequest(FormValue);
                if(res){
                    toast.success("Create Request Completed");
                    navigate("/");
                }
                else{
                    toast.error("Create Request Fail");
                }
            }
            else{
                let res=await updateStudentRequest(FormValue,UpdateID);
                if(res){
                    toast.success("Update Request Completed");
                    navigate("/");
                }
                else{
                    toast.error("Update Request Fail");
                }
            }


        }

    }
    return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your First Name</label>
                        <input value={FormValue.firstName} onChange={(e)=>InputOnChange('firstName',e.target.value)} type="text" className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Last Name</label>
                        <input value={FormValue.lastName} onChange={(e)=>InputOnChange('lastName',e.target.value)} type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Gender</label>
                        <input value={FormValue.gender} onChange={(e)=>InputOnChange('gender',e.target.value)} type="text" className="form-control" placeholder="Gender"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Date Of Birth</label>
                        <input value={FormValue.dateOfBirth} onChange={(e)=>InputOnChange('dateOfBirth',e.target.value)} type="date" className="form-control" placeholder="Date Of Birth"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Nationality</label>
                        <input value={FormValue.nationality} onChange={(e)=>InputOnChange('nationality',e.target.value)} type="text" className="form-control" placeholder="Nationality"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Address</label>
                        <input value={FormValue.address} onChange={(e)=>InputOnChange('address',e.target.value)} type="text" className="form-control" placeholder="Address"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Email</label>
                        <input value={FormValue.email} onChange={(e)=>InputOnChange('email',e.target.value)} type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Phone Number</label>
                        <input value={FormValue.phone} onChange={(e)=>InputOnChange('phone',e.target.value)} type="number" className="form-control" placeholder="Phone"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Admission Date</label>
                        <input value={FormValue.admissionDate} onChange={(e)=>InputOnChange('admissionDate',e.target.value)} type="date" className="form-control" placeholder="Admission Date"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Course</label>
                        <input value={FormValue.courses} onChange={(e)=>InputOnChange('courses',e.target.value)} type="text" className="form-control" placeholder="Courses"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Your Status</label>
                        <input value={FormValue.status} onChange={(e)=>InputOnChange('status',e.target.value)}  type="text" className="form-control" placeholder="Status"/>
                    </div>
                    <div className="col-md-4 p-2">
                        <label className="form-label">Save Change</label><br/>
                        <button onClick={Save} className="btn w-100 btn-success">Submit</button>
                    </div>
                </div>
                <Toaster position="bottom-center" />
            </div>
    );
};

export default StudentForm;