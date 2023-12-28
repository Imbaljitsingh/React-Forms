import { useState } from "react";


function App() {

  //useState to store form data

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    st_add: "",
    city: "",
    state: "",
    zipCode: "",
    comment: false,
    candidate: false,
    offer: false,
    mode: ""
  })

  //change Handler function

  function changeHandler(event) {
  

    setformData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
      }
    })

  }

  //save handler

  function saveHandler(event) {
    event.preventDefault()
    //console.log form data
    console.log(formData)
  }

  return (
    <div className="flex flex-col justify-center items-center w-[]">

      {/* form element */}

      <form onSubmit={saveHandler} className="flex flex-col py-16 text-black px-16 border">

        {/* first name  */}

        <label htmlFor="firstName" className="labels" >First Name</label>
        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={changeHandler} placeholder="First Name" className="p-2 rounded-md border"/>

        {/* last name  */}

        <label htmlFor="lastName" className="labels">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={changeHandler} placeholder="Last Name" className="p-2 rounded-md border"/>

        {/* email  */}

        <label htmlFor="email" className="labels">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={changeHandler} placeholder="Enter your email" className="p-2 rounded-md border"/>

        {/* country  */}
        <label htmlFor="country" className="labels">Country</label>
        <select name="country" id="country" onChange={changeHandler} value={formData.country} className="p-2 rounded-md border">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        {/* street address */}
        <label htmlFor="st_add" className="labels">Street Address</label>
        <input type="text" name="st_add" id="st_add" placeholder="Street Address" value={formData.st_add} onChange={changeHandler} className="p-2 rounded-md border"/>

        {/* city */}
        <label htmlFor="city" className="labels">City</label>
        <input type="text" name="city" id="city" placeholder="City" value={formData.city} onChange={changeHandler} className="p-2 rounded-md border"/>


        {/* state */}
        <label htmlFor="state" className="labels">State/Province</label>
        <input type="text" name="state" id="state" placeholder="State/Province" value={formData.state} onChange={changeHandler} className="p-2 rounded-md border"/>

        {/* Zip Code */}
        <label htmlFor="zipCode" className="labels">Zip Code</label>
        <input type="text" name="zipCode" id="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={changeHandler} className="p-2 rounded-md border"/>

        {/* checkbox */}

        <div className="mt-4 font-bold">By Email</div>


        <div className="mt-4 mb-4">
        <input type="checkbox" name="comment" id="comment" checked={formData.comment} onChange={changeHandler} />
        <label htmlFor="comment" className="labels mx-3">Comments</label>
        <p className="mx-7 text-slate-500">Get notified when someone posts a comment on a posting.</p>
        </div>
        
        <div className="mt-4 mb-4">
        <input type="checkbox" name="candidate" id="candidate" checked={formData.candidate} onChange={changeHandler}/>
        <label htmlFor="candidate" className="labels mx-3">Candidate</label>
        <p className="mx-7 text-slate-500">Get notified when a candidate applies for a job.</p>
        </div>

        <div className="mt-4 mb-4">
        <input type="checkbox" name="offer" id="offer" checked={formData.offer} onChange={changeHandler}/>
        <label htmlFor="offer" className="labels mx-3">Offer</label>
        <p className="mx-7 text-slate-500">Get notified when a candidate accept or reject an offer.</p>
        </div>

        {/* radio button */}

        <div className="mt-4 font-bold">Push Notifcations</div>
        <p className=" text-slate-500">These are delivered via SMS to your mobile phone</p>

        <div className="mt-3 mb-3">
        <input type="radio" name="mode" id="everthing" onChange={changeHandler} value={"everything"} checked={formData.mode === "everything"}/>
        <label htmlFor="Everything" className="labels mx-3">Everything</label>
        </div>
        
        <div className="mt-3 mb-3">
        <input type="radio" name="mode" id="viaEmail" onChange={changeHandler} value={"viaEmail"} checked={formData.mode === "viaEmail"}/>
        <label htmlFor="viaEmail" className="labels mx-3">Same as Email</label>
        </div>
        
        <div className="mt-3 mb-3">
        <input type="radio" name="mode" id="no" onChange={changeHandler} value={"noNotifications"} checked={formData.mode === "noNotifications"}/>
        <label htmlFor="no" className="labels mx-3">No Push Notifcations</label>
        </div>


        <div>
        <button className="bg-blue-400 text-white p-2 mt-4 rounded-md text-lg w-[120px]">Save</button>
        </div>

      </form>
    </div>
  );
}

export default App;
