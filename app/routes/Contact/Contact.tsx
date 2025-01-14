import "./Contact.css"
import Nav from "../../Nav/Nav.tsx";
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function Contact() {
    const [state, switchState] = useState(1);

    const color = (num: number) => {
        return num == state ? "rgb(220, 229, 238)" : "";
    }
    const shadow = (num: number) => {
        return num == state ? "1px 1px 1px black" : "";
    }
    const toggle = (num : number) => {
        switchState(num);
    }

    return (
        <div>
            <Nav data={4} />
            <main>
              <div className="container">
                    <div className="actions">
                        <button style={{ backgroundColor: color(1), boxShadow: shadow(1) }} className="font" onClick={() => toggle(1) }>Phone</button>
                        <button style={{ backgroundColor: color(2), boxShadow: shadow(2) }} className="font" onClick={() => toggle(2) }>Mail</button>
                        <button style={{ backgroundColor: color(3), boxShadow: shadow(3) }} className="font" onClick={() => toggle(3) }>GitHub</button>
                        <button style={{ backgroundColor: color(4), boxShadow: shadow(4) }} className="font" onClick={() => toggle(4) }>LinkedIn</button>
                    </div>
                    <div className="display">
                        {
                            (state == 1 &&
                                <>
                                <h1>647.612.4670</h1>
                                <DotLottieReact
                                    src="https://lottie.host/2b34bfa0-d5d4-46f7-951f-e1976d669254/2faQIY4KT2.lottie"
                                    autoplay
                                />
                                </>
                            ) || (state == 2 && 
                                <>
                                <h1>ckroupa@uwo.ca</h1>
                                <DotLottieReact
                                    src="https://lottie.host/346b2d6c-ccef-4d81-bc64-1f8f67f10871/L3dABkaPrg.lottie"
                                    autoplay
                                />
                                </>
                                
                            ) || (state == 3 && 
                                <>
                                    <h1><a href="https://github.com/ckroupa">GitHub</a></h1>
                                    <DotLottieReact
                                    src="https://lottie.host/7717ecd2-13bc-48b0-80c9-ba263de90595/eRD2y7QRqe.lottie"
                                    autoplay
                                    />
                                </>
                                

                            ) || (state == 4 && 
                                <>
                                <h1><a href="www.linkedin.com/in/cameron-kroupa-7404ba289">LinkedIn</a></h1>
                                <DotLottieReact
                                    src="https://lottie.host/cfa377bc-53da-43ae-b2ef-d7892d516e78/ENo02Agkxs.lottie"
                                    autoplay
                                />
                                </>
                            ) 
                        }
                    
                        
                </div>

            </div>  
            </main>
            
        </div>
    )
}



