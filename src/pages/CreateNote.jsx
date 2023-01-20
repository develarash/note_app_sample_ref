import {Link ,useNavigate} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {RiDeleteBin6Line} from "react-icons/ri"
import { useState } from "react";
import {v4 as uuid}from "uuid"

import useCreateDate from "../components/useCreateDate";

function CreateNote({setNotes}) {
    const[title,setTitle]=useState("")
    const[details,setDetails]=useState("")
    const date=useCreateDate(); 
    const navigate=useNavigate();


    const handleSubmit =(e)=>{
        e.preventDefault();
        if(title && details){
         const note={id:uuid(),title,details,date}

         setNotes(prevNotes=>[note,...prevNotes])
        //  console.log(note)

        navigate("/")
        // redirec to home page

        }



    }


  return (
    <section>
        <header className="create-note__header">
            <Link to="/" className="btn "><IoIosArrowBack/></Link>
            <button className="btn lg primary" onClick={handleSubmit}>Save</button>
            {/* <button className="btn danger"><RiDeleteBin6Line/></button> */}
        </header>
        <form  className="create-note__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} autoFocus onChange={(e)=>setTitle(e.target.value)} />
            <textarea  placeholder="Note details..." value={details} onChange={(e)=>setDetails(e.target.value)} rows="28"></textarea>
        </form>
    </section>
    )
}

export default CreateNote