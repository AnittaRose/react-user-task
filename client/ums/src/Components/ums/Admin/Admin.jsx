import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Admin() {
    const navigate = useNavigate();


    const handleClick = async (event) => {
        event.preventDefalut();
        console.log("Button clicked");

        let params = new URLSearchParams(window.location.search);
    
        
        let token_key = params.get('token');
        console.log(token_key);
    
        
        const id = 'some_value'; 
    
        navigate(`/Add?login=${token_key}&id=${id}`);
    }
    
    return(
       
    <>
        <div className="nav">
            {/* <div class=""><img src="https://img.freepik.com/free-vector/abstract-people-team-background-design_23-2147493323.jpg?ga=GA1.1.392549930.1719407083&semt=ais_hybrid" class="logo" alt=""></div> */}
            <div className="d-flex justify-content-between align-items-center container">
            <div className="link-dark fw-bold fs-3">
                <img
                src="./images/ums-letter-logo-design-with-polygon-shape-ums-polygon-and-cube-shape-logo-design-ums-hexagon-logo-template-white-and-black-colors-ums-monogram-business-and-real-estate-.png"
                className="logoo"
                alt=""
                />
            </div>
            <div className="">
                <div className="d-flex justify-content-between align-items-center">
                <div className="px-2">
                    <a
                    href="./index.html"
                    className="text-decoration-none link-dark fw-bold"
                    >
                    Home
                    </a>
                </div>
                <div className="px-2">
                    <a href="" className="text-decoration-none link-dark fw-bold">
                    About Us
                    </a>
                </div>
                <div className="px-2">
                    <a href="" className="text-decoration-none link-dark fw-bold">
                    Blog
                    </a>
                </div>
                <div className="px-2">
                    <a href="" className="text-decoration-none link-dark fw-bold">
                    Contact Us
                    </a>
                </div>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <i className="fa fa-bars" style={{ fontSize: 24 }} />
                </button>
                <span className="">
                    <img
                    src="https://img.icons8.com/?size=100&id=86280&format=png&color=FFFFFF"
                    className="user-icon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                    alt=""
                    />
                </span>
                {/* <button class="btn btn-primary" type="button" >Toggle top offcanvas</button> */}
                <div
                    className="offcanvas offcanvas-top"
                    tabIndex={-1}
                    id="offcanvasTop"
                    aria-labelledby="offcanvasTopLabel"
                >
                    <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                    </div>
                    <div className="offcanvas-body">...</div>
                </div>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header">
                    {/* <h5 id="offcanvasRightLabel">Offcanvas right</h5> */}
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                    </div>
                    <div className="offcanvas-body">
                    <div className="">
                        <button className="bttn px-5 p-2" onClick={handleClick}>
                        Add
                        </button>
                    </div>
                    {/* <div className="">
                        <button className="bttn px-5 p-2" onClick={signout}>
                        Log Out
                        </button>
                    </div> */}
                    </div>
                </div>
                </div>
                {/* <div class="text-center"><a href="./index.html" class="text-decoration-none link-light">Login</a></div> */}
            </div>
            </div>
        </div>
        <table className="table container pt-5">
            <thead>
            <tr className="tr text-center">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">View</th>
            </tr>
            </thead>
            <tbody id="userTable" className="tab fw-bold text-center"></tbody>
        </table>
        </>

        
    )
}

export default Admin;