import '../css/register.css'

const Login = () => {
    return (
        <>

            <form action="#" method="#" class="login" />
            <label for="email"><ion-icon name="mail-outline"></ion-icon> Email
                <input type="email" id="email1" placeholder="Enter Email" required />
            </label>
            <br />
            <br />
            <label for="passwd"><ion-icon name="lock-closed-outline"></ion-icon>Password
                <input type="password" id="passwd1" placeholder="Enter Password" reqquired />
            </label>
            <br />
            <br />
            <button class="btn">Login</button>
            <br />
            <br />
            <a href="#">Forget Password?</a>
            <br />
            <br />
            <a href="#">Send OTP</a>
            <h3>Login with</h3>
            <a href="#">Facebook</a>
            <a href="#">Google</a>
        </>
    )
     }
    export default Login;