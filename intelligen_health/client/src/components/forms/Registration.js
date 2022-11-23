import React, { useState } from 'react';
import QRCode from 'qrcode';
 function Registration() {
  const[Registration,SetRegistration]=useState({
    PatientName:"",
    Address:"",
    Mobile:"",
    Gender:"",
    Pid:"",

  })
  const printQr=()=>{
    var divContents = document.getElementById("imgqr").innerHTML;
            let a = window.open('', '', 'height=500, width=500');
            a.document.write('<html>');
            a.document.write('<body > <center><h1>Intelligent Emergency App</h1><center>');
            a.document.write(divContents);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
  }
  const[urlp,Seturlp]=useState("");
  const[msg,SetMsg]=useState("");
  const[alerttype,Setalerttype]=useState("");
  
   const finalData=()=>{
              
    let gender=document.querySelector('input[type="radio"]:checked').value;
    SetRegistration({})
    if(Registration.PatientName=="" || Registration.Address=="" || Registration.Mobile==""){
     Setalerttype("alert-danger")
     SetMsg("Please fill all field")
     setTimeout(() => {
      Setalerttype("")
     SetMsg("")
     }, 3000);
    }
    else{
    let json = JSON.stringify(Registration);
  
   

    QRCode.toDataURL(json, function (err, url) {
      Seturlp(url)})
      if(urlp!=""){
        SetMsg("Successfully added")
        Setalerttype("alert-success")
          setTimeout(() => {
            SetMsg("")
          Setalerttype("")
          }, 3000);
         document.getElementById("qrcont").hidden=false;
      }
    }

    console.log(Registration);
  }
   

const handleInput=(e)=>{
    SetRegistration({...Registration,[e.target.name]:e.target.value});
  console.log(Registration)
    
   
    
}
const close=()=>{
Seturlp("");

  document.getElementById("qrcont").hidden=true;

}

  return (
   <>
<div className={`alert ${alerttype}`} role="alert">
 <center><p>{msg}</p></center>
</div>

<div className="card regi">
  
<form name="myform" className="form-group regi-form" action="#" id="InstiTuteDetForm" metho="POST">

    <div className="row bg-light text-dark" id="BasicDetails" >
    <div className='text text-Center'>
    <center><b> <h3>Patient Registration form</h3></b></center>
  </div>
    <div className="col">
    <label  >Patient Name </label>
    <input type="text" className="form-control" name="PatientName" placeholder="Patient Name"  onChange={handleInput}/>
    <label  >Address</label>
    <input type="text" className="form-control"  name="Address"  placeholder="Address"onChange={handleInput}/>
    <label  >Mobile No. </label>

<input type="number" className="form-control" name="Mobile"placeholder="Mobile "onChange={handleInput}/>
<label  >Select Specialist </label>
<select className='form-select'>
<option defaultValue={""}>Select Specialist</option>

  <option value="Gynacologist">Gynacologist</option>
  <option value="ortho">Ortho</option>
  <option value="Genaral">Genaral</option>
  <option value="Neuro">Neuro</option>
</select>

<label htmlFor="Gender" > Gender  </label>

    <div className="form-check form-check-inline mx-2">
              <input className="form-check-input" type="radio" name="Gender" id="Gender" value="Male"/>
              <label className="form-check-label" htmlFor="Gender">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Gender" id="Gender" value="Female"/>
              <label className="form-check-label" htmlFor="Gender">Female</label>
            </div> 
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Gender" id="Gender" value="Other"/>
              <label className="form-check-label" htmlFor="Gender">Other</label>
            </div> 

        
    
    </div>
    <div className='text-center'>
    <button type="button"className='btn btn-info' onClick={finalData}>Register</button>
    
    </div>
   </div>

   </form>
   
   </div>
   <div className='card text text-center qrcontainer' id="qrcont" hidden >
   <div className='container' id="imgqr">
   <img src={urlp} id="qrimg"></img>
   
   </div>
   <center><button type='button' className='btn btn-info' id="print_bt" onClick={printQr}>Print</button>
   <button type='button' className='btn btn-info mx-2'id="cancel-bt" onClick={close}>Close</button>
   </center>
  
   </div>
   </>
   
  )
}

export default Registration