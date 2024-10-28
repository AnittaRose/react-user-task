import { useState } from "react";

function reset(){

    return(

        <>
        <div class="background">
            <div class="d-flex justify-content-evenly">
                <div class="p-5">
                    <div class="reset p-5">
                        <div class="fw-bold">Reset<br /> your <br /> password</div>
                    </div>
                    <div class="pt-3 p-5">
                        <div class="">
                            <label for="" class="newone fw-bold">Password:</label>
                            <div class=""><input type="text" id="Password" /></div>
                        </div>
                        <div class="pt-4">
                            <label for="" class="newone fw-bold">New Password:</label>
                            <div class=""><input type="text" id="newpassword" /></div>
                        </div>
                        <div class="pt-4"><input type="submit" class="rounded-pill change px-3" /></div>
                    </div>
                </div>
                <div class=""><img src="./images/reset-password-concept-illustration_114360-7876.jpg" class="password-image" alt="" /></div>
            </div>
        </div>
        
        </>
    )
    
}
export default reset;