import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact us</h1>
        <form>
  <div style={{width:"30%",margin:"auto"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <label for="exampleInputEmail1" class="form-label" >Last Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"required/>
    <label for="exampleInputEmail1" class="form-label">email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <label for="exampleInputEmail1" class="form-label">type your messege</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default Contact