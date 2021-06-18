import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:'',
        number:'',
        email:'',
        message:''
    })

    const InputEvent = (event) =>{
        const {name, value } = event.target;
        setData((preVal) =>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Mobile Number is ${data.number} and email is ${data.email}, Here is what is want to say ${data.message}:  `);
    }

    return(
        <div className="container">
            <h2 className="text-center">Contact page</h2>
            <div className="contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="name" 
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={InputEvent}
                                        placeholder="type here name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" 
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        name="number"
                                        value={data.number}
                                        onChange={InputEvent}
                                        placeholder="type here number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" 
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea 
                                        className="form-control" 
                                        id="exampleFormControlTextarea"
                                        name="message"
                                        value={data.message}                                        
                                        onChange={InputEvent}
                                        rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;