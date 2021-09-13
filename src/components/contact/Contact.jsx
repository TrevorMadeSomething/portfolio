import { useState } from "react";
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <form>
                <div className="left">
                    <h2>I would <span className="love">love</span> to hear from you!</h2>
                    <div className="fieldContainer">
                        <input type="text" placeholder="Name" className="name" />
                        <input type="text" placeholder="Email" className="email" />
                    </div>
                    <div className="right">
                        <textarea placeholder="Message"></textarea>
                        <button onClick={handleSubmit}>Submit</button>
                        {message && <span>Thank you, I will reply ASAP</span>}
                    </div>
                </div>
            </form>
        </div>
    )
}
