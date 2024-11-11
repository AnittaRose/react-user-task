import { useState } from "react";

function Employe() {
    return(
        <>
            <div className="Welcomepage p-2">
                <div className="d-flex justify-content-between align-items-center container">
                <div className="text-white">Admin</div>
                <div className="">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="px-2">
                        <a href="./index.html" className="text-decoration-none link-light">
                        Home
                        </a>
                    </div>
                    <div className="px-2">
                        <a href="" className="text-decoration-none link-light">
                        About Us
                        </a>
                    </div>
                    <div className="px-2">
                        <a href="" className="text-decoration-none link-light">
                        Blog
                        </a>
                    </div>
                    <div className="px-2">
                        <a href="" className="text-decoration-none link-light">
                        Contact Us
                        </a>
                    </div>
                    <div>
                        <img
                        src="https://img.icons8.com/?size=100&id=ZZrUFCdkgi9N&format=png&color=000000"
                        style={{ width: 35 }}
                        alt=""
                        onclick="userView()"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <h1>
                Welcome <strong>Back.....</strong>
            </h1>
            <div className="sample"></div>


        

    </>
    )
}
export default Employe;