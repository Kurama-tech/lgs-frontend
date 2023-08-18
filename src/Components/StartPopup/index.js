import React, { useState, useEffect } from "react";
import "./index.css";
import { RxCross2 } from "react-icons/rx";

const FirstTimePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Mendix");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      console.log(course, comment, email, name, phoneNumber);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (event) => {
    console.log(course, comment, email, name, phoneNumber);
    const service = course;
    const message = comment;
    event.preventDefault();
    const phone = phoneNumber;
    try {
      const response = await fetch("https://api.labyrinthglobalsolutions.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          phone,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        alert("registration successful");
        setErrorMsg("");
      } else {
        console.log(course, comment, email, name, phoneNumber);
        const data = await response.json();
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="card-container-3">
            <div className="popup-image-container ">
              <div>
                <h1 className="popup-heading">Get a Free Demo</h1>
                <p className="popup-para">
                  Please Fill the form our expert will contact you
                </p>
                <img
                  className="login-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546385/10-work_2x_fazttu.png"
                  alt="website login"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="close-container" onClick={closePopup}>
                <RxCross2 className="close-1" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name || ''}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="input-container">
                <select
                  id="course"
                  value={course || ''}
                  onChange={(e) => setCourse(e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="Mendix">Mendix</option>

                  <option value="Polarian">polarion</option>

                  <option value="Salesforce">Salesforce</option>

                  <option value="Mobile And Web Application">
                    Mobile and Web Application
                  </option>

                  <option value="Saas And Cloud Solutions">
                    SAAS And Cloud Solutions
                  </option>
                </select>
              </div>
              <div className="input-container">
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber || ''}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="input-container">
                {" "}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  id="comment"
                  placeholder="Enter your Comment"
                  value={comment || ''}
                  onChange={(e) => setComment(e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="popup-button-container">
                <button className="login-button" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstTimePopup;
