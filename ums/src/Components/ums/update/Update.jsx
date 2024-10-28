import { useState } from "react";

function update() {
    return(

        <>
    <div className="container d-flex">
    <div className="form-box Login">
        <div className="">
        <img
            src="https://img.freepik.com/free-vector/update-concept-illustration_114360-26109.jpg?ga=GA1.1.392549930.1719407083&semt=ais_hybrid"
            alt=""
        />
        </div>
        <div className="">
        <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ padding: "0px 0px 0px 700px" }}
        >
            <div className="text-center  fs-2 p-3">UPDATE PAGE</div>
            <form onsubmit="UpdateData(event)" className="formpage px-5 p-5">
            <div className="input-box">
                <label htmlFor="" className="link-danger">
                Username
                </label>
                <input type="text" id="username" className="box pt-4 " />
                <i className="bx bxs-user" style={{ color: "#ffffff" }} />
            </div>
            <div className="input-box pt-4">
                <label htmlFor="" className="link-danger">
                Email
                </label>
                <input type="text" id="email" className="box pt-4 " />
                <i className="bx bx-envelope" style={{ color: "#ffffff" }} />
            </div>
            <div className="input-box pt-5">
                <select name="" id="user_type" className="px-5 box">
                <option value="Admin" className="opt">
                    Admin
                </option>
                <option value="Employee" className="opt">
                    Employee
                </option>
                </select>
            </div>
            <div className="input-box text-center pt-4">
                <input type="submit" defaultValue="submit" className="sub" />
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
</>
    )
}
export default update;