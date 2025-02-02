import '../css/register.css'

const SignUp = () =>
{
    return(
        <>
         <form action="#" method="#" class="signup"/>
    <label for="first-name">First Name
      <input type="text" id="first-name" placeholder="First Name" required/>
    </label>

    <br/>
    <br/>

    <label for="last-name">Last Name
      <input type="text" id="last-name" placeholder="Last Name" required/>
    </label>

    <br/>
    <br/>

    <label for="age"><ion-icon name="person"></ion-icon> Age
      <input type="number" id="age" placeholder="Enter Age" required/>
    </label>

    <br/>
    <br/>

    <label for="phone"> <ion-icon name="phone-portrait-outline"></ion-icon>Phone
      <input type="text" id="phone" placeholder="Enter Phone" required/>
    </label>

    <br/>
    <br/>

    <label for="city">City
      <input type="text" id="city" placeholder="eg. Egypt" required/>
    </label>
    <br/>
    <br/>
    <label for="country">Country
      <input type="text" id="country" placeholder="eg. Cairo" required/>
    </label>
    <br/>
    <br/>

    <label for="email"><ion-icon name="mail-outline"></ion-icon>  Email
      <input type="email" id="email2" placeholder="Enter Email" required/>
  </label>
  <br/>
  <br/>

    <label for="passwd"><ion-icon name="lock-closed-outline"></ion-icon>Password
      <input type="password" id="password"  required/>
    </label>

    <br/>
    <br/>

    <label for="confirm"><ion-icon name="lock-closed-outline"></ion-icon>Confirm Password
      <input type="password" id="name" placeholder="Confirm Password" required/>
    </label>
    <br/>
    <br/>
    <button class="submit">Here we go!</button>

  
        </>
    )
}
export default  SignUp;