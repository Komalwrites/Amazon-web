import React, { useContext } from 'react';
import { Logincontext } from '../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options = ({deleteData,get}) => {

  const { account, setAccount } = useContext(Logincontext);
  
  const removeData = async (req,res) => {

    try {
        const res = await fetch(`/delete/${deleteData}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json", 
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 400 || !data) {
            console.log("error aai remove time pr");
        } else {
            setAccount(data);
            toast.success("Item removed from the cart 😃!", {
                position: "top-center"
            });
            get();
        }
    } catch (error) {
        console.log("error");
    }

}

  return (
    <div className="delete-save-share" key={deleteData}>
        <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
        </select>
        <p  style={{ cursor: "pointer" }} onClick={()=>removeData(deleteData)}>Delete</p><span>|</span>
        <p className="forremovemedia">Save for Later</p><span>|</span>
        <p className="forremovemedia">Compare with similar items</p><span>|</span>
        <p className="forremovemedia">Share</p>
        <ToastContainer />
    </div>
  )
}

export default Options
