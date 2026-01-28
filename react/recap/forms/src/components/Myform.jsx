import { useState } from "react";
export default function Myform() {

    //const [name, setName] = useState("");
    //const [age, setAge] = useState("");
    //const [email, setEmail] = useState("");
    const [inputs, setInputs] = useState({name: "", age: "", email: ""});

    function handleSubmit(e) {
        e.preventDefault();
        
        alert(`Hello, ${inputs.name}`);
        alert(`age is ${inputs.age}`);
        alert(`mail is ${inputs.email}`);
        alert(`phone no is ${inputs.phone}`);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputs({...inputs, [name]: value});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor=""> Enter your name: <input type="text" name="name" id="name" onChange={handleChange}/></label><br />
            <label htmlFor=""> Enter your age: <input type="text" name="age" id="age" onChange={handleChange}/></label><br />
            <label htmlFor=""> Enter your email: <input type="text" name="email" id="email" onChange={handleChange}/></label><br />
            <label htmlFor=""> Enter your phone no: <input type="tel" name="phone" id="phone" onChange={handleChange}/></label><br />

            <input type="submit" id="submit"/>
        </form>
    )
}