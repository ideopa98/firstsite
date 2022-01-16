import React, { useState } from 'react'


const Contact = () => {
    const [data,setData]=useState({
        fullname:"",
        mobile:"",
        email:"",
    });
    const InputEvent=(event)=>{
        const {name,value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(
        `FORM SUBMITTED

                   Welcome ${data.fullname} to the pride of MUFASA`
        )
        
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us</h1>
            </div>
            <div className='container conatct_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter your name " />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile No.</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="enter your mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Special Requirements</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit Form</button>
                            
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;