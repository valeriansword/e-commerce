import React from "react";
function LoginPage(){
    return(
        <div className="min-vh-100 d-flex justify-content-center align-items-center bg-secondary">
            <div className="bg-white rounded w-25 p-3">
                <form>
                    <h2>Sign-in page</h2>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="enter email" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="enter password" className="form-control" />
                    </div>
                    <button className="btn btn-warning rounded-0 w-100 mb-2">Sign-in</button>
                    <p>By signing here you are agree to our terms and conditions</p>
                    <button className="btn btn-default border rounded-0 mb-2 w-100">Creat account</button>

                </form>

            </div>
                
        </div>
    )
}
export default LoginPage;