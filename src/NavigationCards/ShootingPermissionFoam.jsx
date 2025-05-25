import React, { useState } from "react";
import Bg from "../assets/Bg.jpg";
const ShootingPermissionForm = () => {
  const [formData, setFormData] = useState({});
  const [showAnnexureA, setShowAnnexureA] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setShowAnnexureA(true);
    // Add submission logic here
  };

  const renderInput = (label, name, type = "text", isTextarea = false) => {
  return (
    <div className="mb-4">
     
      <label className="block text-m font-medium text-gray-700 mb-1">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          rows={4}
          value={formData[name] || ""}
          onChange={handleChange}
          required
          className="mt-1 block w-full sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#a92b4e] border-gray-300 rounded-lg px-2 py-3"
        />
      ) : type === "file" ? (
         <div className="w-full py-9 bg-gray-50 rounded-2xl border border-[#a92b4e] gap-3 grid border-dashed">
      <div className="grid gap-1">
       <svg class="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="File">
  <path id="icon" d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z" fill="#a92b4e" />
</g>
</svg>
        <h2 className="text-center text-gray-400 text-xs leading-4">
          PNG, JPG or PDF, smaller than 15MB
        </h2>
      </div>

      <div className="grid gap-2">
        <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
          Drag and Drop your file here or
        </h4>

        <div className="flex items-center justify-center">
          <label>
            <input type="file" hidden onChange={handleFileChange} name={name} />
            <div className="flex w-28 h-9 px-2 flex-col bg-[#a92b4e] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
              Choose File
            </div>
          </label>
        </div>

        {fileName && (
          <p className="text-center text-sm text-indigo-600 font-medium">
            Selected: {fileName}
          </p>
        )}
      </div>
    </div>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name] || ""}
          onChange={handleChange}
          required
          className="mt-1 block w-full text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#a92b4e] border-gray-300 rounded-lg px-2 py-3"
        />
      )}
    </div>
  );
};



  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
      />
      <div className="max-w-6xl mx-auto border border-gray-200  p-10 rounded-lg  ">
        <h1 className="text-3xl font-bold  text-gray-700 mb-2 text-center">
          BIHAR STATE FILM DEVELOPMENT & FINANCE CORPORATION LTD
        </h1>
       
        <h1 className="text-lg text-center text-gray-700 border-b border-gray-200 mb-10">
          APPLICATION FORM FOR SEEKING PERMISSION TO SHOOT IN BIHAR
        </h1>
        {!showAnnexureA && (
         <form onSubmit={handleSubmit}>
  <div className="bg-white px-5 py-5 space-y-10">

    {/* Section 1: Basic Project Details */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Project Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("Type of Project", "projectType")}
        {renderInput("Language of the Film/Project", "language")}
        {renderInput("Genre", "genre")}
        {renderInput("Duration of Project", "duration")}
        {renderInput("Title of Project", "title")}
        {renderInput("Director and Main Cast Names", "directorCast")}
      </div>
    </div>

    {/* Section 2: Production Details */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Production House Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("Producer House", "producerHouse")}
        {renderInput("Synopsis of Project (250 words)", "synopsis", "text", true)}
        {renderInput("Contact of Production House", "productionContact")}
        {renderInput("Production House Address", "productionAddress", "text", true)}
        {renderInput("Email ID of Production House", "productionEmail", "email")}
        {renderInput("Production House Constitution", "constitution")}
      </div>
    </div>

    {/* Section 3: Applicant Info */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Applicant Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("Registration Number", "registrationNo")}
        {renderInput("Representative Name", "repName")}
        {renderInput("Designation of Applicant", "designation")}
        {renderInput("Address of Applicant", "applicantAddress", "text", true)}
        {renderInput("Contact of Applicant", "applicantContact")}
        {renderInput("Email ID of Applicant", "applicantEmail", "email")}
      </div>
    </div>

    {/* Section 4: Creative Overview */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Creative and Cast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("Brief Synopsis (500 words)", "briefSynopsis", "text", true)}
        {renderInput("Main Artist(s) at Location", "mainArtists")}
        {renderInput("No. of Shooting Locations (Annexure A)", "shootingLocations")}
        {renderInput("Drone Permission Required (Yes/No)", "drone", "text")}
        {renderInput("Animal Part of Shooting (Yes/No)", "animalInvolved", "text")}
      </div>
    </div>

    {/* Section 5: Technical and Security */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Technical Requirements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("Fire/Blasting Scene (Yes/No)", "fireScene", "text")}
        {renderInput("Temporary Structure Creation (Yes/No)", "structure", "text")}
        {renderInput("Other Details (Road Blocks etc.)", "otherDetails", "text", true)}
        {renderInput("Line Producer Details", "lineProducer", "text", true)}
        {renderInput("Police/Security Requirement", "securityDetails", "text", true)}
        {renderInput("Site Contact Person Details", "siteContact", "text", true)}
      </div>
    </div>

    {/* Section 6: Legal/Branding */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Legal and Branding</h2>

  {/* Grid for file uploads first */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    {renderInput("MIB Certificate (for International Film)", "mibCertificate", "file")}
    {renderInput("MEA Certificate (for Documentary, AV, Music)", "meaCertificate", "file")}
  </div>

  {/* Grid for other inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {renderInput("In-Film Branding or Asset Use", "brandingDetails", "text", true)}
    {renderInput("Other Particulars", "otherParticulars", "text", true)}
  </div>
</div>


    {/* Section 7: Final Declaration */}
    <div className="border border-[#a92b4e]/40 p-5 rounded-md ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Declaration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput("Authorized Applicant Name", "authApplicant")}
        {renderInput("Seal", "seal")}
        {renderInput("Date", "date", "date")}
        {renderInput("Signature", "signature")}
      </div>
    </div>

    {/* Submit Button */}
    <div className="mt-6 flex justify-center">
  <button
    type="submit"
    className="group inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#a92b4e] hover:bg-[#891737] transition-all duration-300"
  >
    Submit Form
    <span className="transition-transform duration-300 group-hover:rotate-45">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4223 9.15539C9.9834 6.0332 10.7639 4.47211 12 4.47211C13.2361 4.47211 14.0166 6.0332 15.5777 9.15539L18.0292 14.0584C19.7382 17.4763 20.5927 19.1853 19.776 20.1872C18.9594 21.1891 17.1132 20.6968 13.4209 19.7122L13.0307 19.6081C12.5183 19.4715 12.2621 19.4032 12 19.4032C11.7379 19.4032 11.4817 19.4715 10.9694 19.6081L10.5792 19.7122C6.88682 20.6968 5.04065 21.1891 4.224 20.1872C3.40735 19.1853 4.26183 17.4763 5.9708 14.0584L8.4223 9.15539Z" stroke="white" strokeWidth="1.4"></path>
        <path d="M12 14.0975L12 19.3975" stroke="white" strokeWidth="1.4" strokeLinecap="round"></path>
      </svg>
    </span>
  </button>
</div>

  </div>
</form>

        )}
        {showAnnexureA && (
          <form>
  <div className="border border-gray-200 p-5 rounded-md ">
    <h2 className="text-2xl font-semibold mb-4">Annexure A – Shooting Location Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* Location Info */}
      <div className="border border-gray-200 p-5 rounded-md ">Location Information</div>
      {renderInput("Location", "location")}
      {renderInput("Landmark", "landmark")}
      {renderInput("Indoor / Outdoor / Both", "locationType")}

      {/* Scheduling */}
      <div className="border border-gray-200 p-5 rounded-md ">Scheduling</div>
      {renderInput("Start Date & Time", "startDateTime", "datetime-local")}
      {renderInput("Expected End Date & Time", "endDateTime", "datetime-local")}

      {/* People & Permissions */}
      <div className="border border-gray-200 p-5 rounded-md ">People & Permissions</div>
      {renderInput("Crew/Public Involvement", "crewInvolvement")}
      {renderInput("Tentative count of persons at site", "personCount")}
      {renderInput("Details of Permission Required", "permissionDetails")}

      {/* Financial Details */}
      <div className="border border-gray-200 p-5 rounded-md ">Financial Details</div>
      {renderInput("Location Fee", "locationFee")}
      {renderInput("Security Deposit", "securityDeposit")}
      {renderInput("Payment Ref/DD Number", "paymentRef")}

      {/* Management & Scene Details */}
      <div className="border border-gray-200 p-5 rounded-md ">Management & Scene Details</div>
      {renderInput("Location Manager Details", "locationManager", "text", true)}
      {renderInput("Scene Details (100 words)", "sceneDetails", "text", true)}

      {/* Forest Area (If Applicable) */}
      <div className="border border-gray-200 p-5 rounded-md ">Forest Area (If Applicable)</div>
      {renderInput("Forest Area Type (if applicable)", "forestType")}
      {renderInput("Forest Area Details", "forestDetails", "text", true)}
    </div>
  </div>
   <div className="mt-6 flex justify-center">
  <button
    type="submit"
    className="group inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#a92b4e] hover:bg-[#891737] transition-all duration-300"
  >
    Submit Form
    <span className="transition-transform duration-300 group-hover:rotate-45">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4223 9.15539C9.9834 6.0332 10.7639 4.47211 12 4.47211C13.2361 4.47211 14.0166 6.0332 15.5777 9.15539L18.0292 14.0584C19.7382 17.4763 20.5927 19.1853 19.776 20.1872C18.9594 21.1891 17.1132 20.6968 13.4209 19.7122L13.0307 19.6081C12.5183 19.4715 12.2621 19.4032 12 19.4032C11.7379 19.4032 11.4817 19.4715 10.9694 19.6081L10.5792 19.7122C6.88682 20.6968 5.04065 21.1891 4.224 20.1872C3.40735 19.1853 4.26183 17.4763 5.9708 14.0584L8.4223 9.15539Z" stroke="white" strokeWidth="1.4"></path>
        <path d="M12 14.0975L12 19.3975" stroke="white" strokeWidth="1.4" strokeLinecap="round"></path>
      </svg>
    </span>
  </button>
</div>

  </form>
)}


      </div>
    </div>
  );
};

export default ShootingPermissionForm;
