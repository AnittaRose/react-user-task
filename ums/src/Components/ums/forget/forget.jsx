import { useState } from "react"
 
function forgot(){

    return (
        <>
             <div>
            <div>
            <form onsubmit="forgot(event)">
                <div className="">
                    <div className="text-center">
                        <div className="link-warning fs-4 fw-bold pt-2">Reset Your Password?</div>
                        <div className="link-secondary">Enter Your Password below to receive your password reset instruction.</div>
                        <div className="">
                            <div className="">
                                <div className=""><img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1729224927~exp=1729228527~hmac=6a0c063b915308019c6dadb18299189759ed213cd8ceb0205941b1608916b082&w=740" class="reset-img" alt=""/></div>
                            </div>
                            <div className=""><input type="password" id="password" name="password" placeholder="Enter Password" className="text-center px-3"/></div>
                        </div>
                        <div className="pt-4 "><input type="submit" className="bg-warning link-light px-3 border border-warning"/></div>
                    </div>
                </div>
            </form>
            </div>
        </div>

        
        </>
    )
}

export default forgot


    