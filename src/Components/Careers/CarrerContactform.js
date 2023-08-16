// import React, { useState } from "react";
// import axios from "axios";

// const ContactForm = () => {
//   const [formValues, setFormValues] = useState({
//     name: '',
//     phone: '',
//     totalExp: '',
//     careerGap: '',
//     currentLocation: '',
//     preferredLocation: '',
//     reasonForJobChange: '',
//     jobProfile: '',
//     email: '',
//     relevantExp: '',
//     currentCTC: '',
//     expectedCTC: '',
//     noticePeriod: '',
//     resume: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFormValues({
//       ...formValues,
//       resume: file,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Simple form validation (checking if required fields are not empty)
//     const requiredFields = ['name', 'phone', 'totalExp', 'reasonForJobChange', 'email', 'relevantExp', 'currentCTC', 'expectedCTC', 'noticePeriod', 'resume'];

//     const isFormValid = requiredFields.every(
//       (field) => formValues[field].trim() !== ""
//     );
//     if (!isFormValid) {
//       alert("Please fill in all the required fields.");
//       return;
//     }

//     // Call the API to send form data to the server and send the email
//     axios
//       .post("http://localhost:5000/send-email", formValues) // Change the URL to match your server's endpoint
//       .then((response) => {
//         console.log(response.data);
//         alert("Form submitted successfully. Email sent.");
//         setFormValues({
//           ...formValues,
//           name: '',
//           phone: '',
//           totalExp: '',
//           careerGap: '',
//           currentLocation: '',
//           preferredLocation: '',
//           reasonForJobChange: '',
//           jobProfile: '0',
//           email: '',
//           relevantExp: '',
//           currentCTC: '',
//           expectedCTC: '',
//           noticePeriod: '',
//           resume: null,
//         });
//       })
//       .catch((error) => {
//         console.error("Error submitting form:", error);
//         alert(
//           "An error occurred while submitting the form. Please try again later."
//         );
//       });
//   };

//   return (
//     <div className="container career-form rounded pb-5 px-4">
//       <h4 className="col-12 semi_heading-career text-center text-uppercase pt-5 font-weight-bold careers-heading">
//         Come Work With Us
//       </h4>
//       <div className="text-uppercase text-center pb-5">
//         Don't be shY! Drop us a line and our team will get to you asap.
//       </div>
//       <form id="career_form" onSubmit={handleSubmit}>
//         {/* <input
//           hidden
//           type="text"
//           // value={formValues.name}
//           className="form-control"
//           name="name"
//           required
//         /> */}
//         <div className="row career-contact rounded span-4">
//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <label htmlFor="career_name">
//                 Name <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 type="text"
//                 className="form-control career-fields"
//                 id="career_name"
//                 name="career_name"
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_phone">
//                 Phone No <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 type="tel"
//                 className="form-control career-fields"
//                 id="career_phone"
//                 name="career_phone"
//                 minLength="10"
//                 maxLength="16"
//                 onKeyPress={(event) =>
//                   event.charCode >= 48 && event.charCode <= 57
//                 }
//                 required
//                // value={formValues.phone}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_total_exp">
//                 Total Exp <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 className="form-control career-fields"
//                 id="career_total_exp"
//                 type="text"
//                 name="career_total_exp"
//                 required
//                 value={formValues.totalExp}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_gap">Career Gap(Reason)</label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_gap"
//                 name="career_gap"
//                 //value={formValues.careerGap}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_current_loc">Current Location</label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_current_loc"
//                 name="career_current_loc"
//                 //value={formValues.currentLocation}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_preferred_loc">Preferred Location</label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_preferred_loc"
//                 name="career_preferred_loc"
//                 //value={formValues.preferredLocation}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_job_change">
//                 Reason for job change <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_job_change"
//                 name="career_job_change"
//                 required
//                 //value={formValues.reasonForJobChange}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="position">Job Profile</label>
//               <select
//                 name="job_profile"
//                 className="custom-select mb-3 career-fields"
//                 id="position"
//                 //value={formValues.jobProfile}
//                 onChange={handleInputChange}
//               >
//                 <option value="0">Select Job Profile</option>
//                 <option value="1">Android developer</option>
//                 <option value="2">Web developer</option>
//                 <option value="3">Sales & DigitalMarketing</option>
//                 <option value="4">Java</option>
//                 <option value="5">SEO</option>
//                 <option value="6">Others</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <label htmlFor="career_email">
//                 Email <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 type="email"
//                 className="form-control career-fields"
//                 id="career_email"
//                 name="career_email"
//                 required
//                // value={formValues.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_relevant_exp">
//                 Relevant Exp <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_relevant_exp"
//                 name="career_relevant_exp"
//                 required
//                // value={formValues.relevantExp}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_current_ctc">
//                 Current CTC <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_current_ctc"
//                 name="career_current_ctc"
//                 required
//                // value={formValues.currentCTC}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_exp_ctc">
//                 Expected CTC(Offer if any) <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_exp_ctc"
//                 name="career_exp_ctc"
//                 required
//                 //value={formValues.expectedCTC}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="career_notice_period">
//                 Notice Period(LWD if serving) <a style={{ color: "red" }}>*</a>
//               </label>
//               <input
//                 className="form-control career-fields"
//                 type="text"
//                 id="career_notice_period"
//                 name="career_notice_period"
//                 required
//                // value={formValues.noticePeriod}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="attach_document">
//                 Attach your resume <a style={{ color: "red" }}>*</a>
//               </label>
//               <div
//                 className="custom-file cursor-pointer z-1"
//                 id="attach_document"
//               >
//                 <input
//                   type="file"
//                   className="custom-file-input cursor-pointer"
//                   id="customFile"
//                   name="attach_document"
//                   required
//                   onChange={handleFileChange} // If you want to handle file selection
//                 />
//                 <label
//                   className="custom-file-label rounded-0 career-fields file-choose cursor-pointer"
//                   htmlFor="customFile"
//                 >
//                   Choose file
//                 </label>
//               </div>
//             </div>
//             <div className="text-end mt-4">
//               <button
//                 className="btn text-uppercase text-white ml-auto add_career_pop_up_button"
//                 type="submit"
//                 style={{ background: "rgb(2, 80, 169)" }}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//       <div className="hide-form"></div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    totalExp: "",
    careerGap: "",
    currentLocation: "",
    preferredLocation: "",
    reasonForJobChange: "",
    jobProfile: "0",
    email: "",
    relevantExp: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Create a new FormData object to send the form data
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("totalExp", formData.totalExp);
      formDataToSend.append("careerGap", formData.careerGap);
      formDataToSend.append("currentLocation", formData.currentLocation);
      formDataToSend.append("preferredLocation", formData.preferredLocation);
      formDataToSend.append("reasonForJobChange", formData.reasonForJobChange);
      formDataToSend.append("jobProfile", formData.jobProfile);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("relevantExp", formData.relevantExp);
      formDataToSend.append("currentCTC", formData.currentCTC);
      formDataToSend.append("expectedCTC", formData.expectedCTC);
      formDataToSend.append("noticePeriod", formData.noticePeriod);
      formDataToSend.append("resume", formData.resume);

      // Send the form data to the server using axios
      const response = await axios.post('https://api.labyrinthglobalsolutions.com/career-form', formDataToSend, {
        headers: {
          'Content-Type':'multipart/form-data',
        },
      });

      console.log("Form submitted successfully:", response.data);
      alert("form has been submitted thank you");
      // Clear the form fields after successful submission
      setFormData({
        name: "",
        phone: "",
        totalExp: "",
        careerGap: "",
        currentLocation: "",
        preferredLocation: "",
        reasonForJobChange: "",
        jobProfile: "",
        email: "",
        relevantExp: "",
        currentCTC: "",
        expectedCTC: "",
        noticePeriod: "",
        resume: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container career-form rounded pb-5 px-4">
      <h4 className="col-12 semi_heading-career text-center text-uppercase pt-5 font-weight-bold careers-heading">
        Come Work With Us
      </h4>
      <div className="text-uppercase text-center pb-5">
        Don't be shY! Drop us a line and our team will get to you asap.
      </div>
      <form id="career_form" onSubmit={handleSubmit}>
        <input
          hidden
          type="text"
          value={formData.name}
          className="form-control"
          name="lead_url"
          required
        />
        <div className="row career-contact rounded p-4">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="career_name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control career-fields"
                id="career_name"
                name="name"
                required
                value={formData.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_phone">
                Phone No <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                className="form-control career-fields"
                id="career_phone"
                name="phone"
                minLength="10"
                maxLength="16"
                onKeyPress={(event) =>
                  event.charCode >= 48 && event.charCode <= 57
                }
                required
                value={formData.phone || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_total_exp">
                Total Exp <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields"
                id="career_total_exp"
                type="text"
                name="totalExp"
                required
                value={formData.totalExp || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_gap">Career Gap(Reason)</label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_gap"
                name="careerGap"
                value={formData.careerGap || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_current_loc">Current Location</label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_current_loc"
                name="currentLocation"
                value={formData.currentLocation || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_preferred_loc">Preferred Location</label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_preferred_loc"
                name="preferredLocation"
                value={formData.preferredLocation || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_job_change">
                Reason for job change <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_job_change"
                name="reasonForJobChange"
                required
                value={formData.reasonForJobChange || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Job Profile</label>
              <select
                name="jobProfile"
                className="custom-select mb-3 career-fields"
                id="position"
                value={formData.jobProfile || ""}
                onChange={handleInputChange}
              >
                <option value="0">Select Job Profile</option>
                <option value="1">Android developer</option>
                <option value="2">Web developer</option>
                <option value="3">Sales & DigitalMarketing</option>
                <option value="4">Java</option>
                <option value="5">SEO</option>
                <option value="6">Others</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="career_email">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control career-fields"
                id="career_email"
                name="email"
                required
                value={formData.email || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_relevant_exp">
                Relevant Exp <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_relevant_exp"
                name="relevantExp"
                required
                value={formData.relevantExp || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_current_ctc">
                Current CTC <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_current_ctc"
                name="currentCTC"
                required
                value={formData.currentCTC || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_exp_ctc">
                Expected CTC(Offer if any){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_exp_ctc"
                name="expectedCTC"
                required
                value={formData.expectedCTC || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="career_notice_period">
                Notice Period(LWD if serving){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control career-fields"
                type="text"
                id="career_notice_period"
                name="noticePeriod"
                required
                value={formData.noticePeriod || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="attach_document">
                Attach your resume <span style={{ color: "red" }}>*</span>
              </label>
              <div
                className="custom-file cursor-pointer z-1"
                id="attach_document"
              >
                <input
                  type="file"
                  className="custom-file-input cursor-pointer"
                  id="customFile"
                  name="resume"
                  required
                  onChange={handleFileChange}
                />
                <label
                  className="custom-file-label rounded-0 career-fields file-choose cursor-pointer"
                  htmlFor="customFile"
                >
                  Choose file
                </label>
              </div>
            </div>
            <div className="text-end mt-4">
              <button
                className="btn text-uppercase text-white ml-auto add_career_pop_up_button"
                type="submit"
                style={{ background: "rgb(2, 80, 169)" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="hide-form"></div>
    </div>
  );
};

export default ContactForm;
