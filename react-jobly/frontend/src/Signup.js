import React from "react";
import useFields from "./useFields"

const Signup =()=>{
    const [formData, handleChange,resetFormData,setFormData] =useFields({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""

    })
    const handleSumbit =(e)=>{
        e.preventDefualt()
        sumbitUser()

        resetFormData()
    }
    return(
        <form onSubmit={handleSumbit}>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            />
             <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            />
             <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="first name"
            />
             <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="last name"
            />
             <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            />
            <button>Sign Up</button>
        </form>
    )
}