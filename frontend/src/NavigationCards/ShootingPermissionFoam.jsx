import React, { useState, useEffect } from "react";
import axios from "axios";

const Response = () => {

  const [formData, setFormData] = useState({
  projectInformation: {
    typeOfProject: "",
    language: "",
    genre: "",
    duration: "",
    title: "",
    directorAndMainCast: "",
  },
  productionHouseDetails: {
    producerHouse: "",
    synopsis: "",
    contactOfProductionHouse: "",
    productionHouseAddress: "",
    emailOfProductionHouse: "",
    productionHouseConstitution: "",
  },
  applicantDetails: {
    registrationNumber: "",
    representativeName: "",
    designationOfApplicant: "",
    addressOfApplicant: "",
    contactOfApplicant : "",
    emailOfApplicant: "",
  },
  creativeandcast: {
    briefSynopsis: "",
    mainArtistsAtLocation: "",
    numberOfShootingLocations: "",
    dronePermissionRequired: "",
    animalPartOfShooting: "",
  },
  technicalRequirements: {
    fireOrBlastingScene: "",
    temporaryStructureCreation: "",
    otherDetails: "",
    lineProducerDetails: "",
    policeOrSecurityRequirements: "",
    siteContactPersonalDetails: "",
  },
  legalAndBranding: {
    mibCertificate: "",
    meaCertificate: "",
    inFilmBrandingOrAssetUse: "",
    otherParticulars: "",
  },
  declaration: {
    authorizedApplicantName: "",
    seal: "",
    date: "",
    signature: "",
  },
  annexureA: {
    location: "",
    landmark: "",
    locationType: "",
    startDateTime: "",
    endDateTime: "",
    crewInvolvement: "",
    personCount: "",
    permissionDetails: "",
    locationFee: "",
    securityDeposit: "",
    paymentRef: "",
    locationManager: "",
    sceneDetails: "",
    forestType: "",
    forestDetails: "",
  },
  });

  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("projectinformation");
  const [notification, setNotification] = useState({
  show: false,
  message: "",
  type: "",
  });
  const [saveStatus, setSaveStatus] = useState("idle");

  const handleInputChange = (section, field, value) => {
  setFormData((prevData) => ({
    ...prevData,
    [section]: {
    ...prevData[section],
    [field]: value,
    },
  }));
  };

  const handleFileChange = (section, field, file) => {
  if (file) {
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
    setNotification({
      show: true,
      message: "File size must be less than 5MB",
      type: "warning",
    });
    setTimeout(
      () => setNotification({ show: false, message: "", type: "" }),
      3000
    );
    return;
    }

    // 🟢 Declare this above the return inside your component
const onSubmit = async () => {
  try {
    const formToSubmit = new FormData();

    Object.entries(formData).forEach(([sectionKey, sectionData]) => {
      Object.entries(sectionData).forEach(([fieldKey, fieldValue]) => {
        if (fieldValue instanceof File) {
          formToSubmit.append(fieldKey, fieldValue);
        } else {
          formToSubmit.append(fieldKey, fieldValue);
        }
      });
    });

    const response = await axios.post(
      "http://localhost:3000/api/addNocForm",
      formToSubmit,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("✅ Form submitted:", response.data);
    setNotification({
      show: true,
      message: "Form submitted successfully!",
      type: "success",
    });
  } catch (err) {
    console.error("❌ Error:", err);
    setNotification({
      show: true,
      message: "Something went wrong!",
      type: "error",
    });
  }
};


    // Check file type
    const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
    setNotification({
      show: true,
      message:
      "Please upload a valid file format (PDF, DOC, DOCX, JPG, PNG)",
      type: "warning",
    });
    setTimeout(
      () => setNotification({ show: false, message: "", type: "" }),
      3000
    );
    return;
    }

    setFormData((prevData) => ({
    ...prevData,
    [section]: {
      ...prevData[section],
      [field]: file,
    },
    }));

    setNotification({
    show: true,
    message: `File uploaded successfully: ${file.name}`,
    type: "success",
    });
    setTimeout(
    () => setNotification({ show: false, message: "", type: "" }),
    2000
    );
  }
  };

  useEffect(() => {
  const keys = [
    "projectInformation",
    "productionHouseDetails",
    "applicantDetails",
    "creativeandcast",
    "technicalRequirements",
    "legalAndBranding",
    "declaration",
    "annexureA",
  ];
  keys.forEach((key) => {
    const stored = localStorage.getItem(key);
    if (stored) {
    const parsedData = JSON.parse(stored);

    // Handle file objects that were stored as metadata
    Object.keys(parsedData).forEach((fieldKey) => {
      if (
      parsedData[fieldKey] &&
      typeof parsedData[fieldKey] === "object" &&
      parsedData[fieldKey].isFile
      ) {
      // Convert back to a file-like object for display purposes
      parsedData[fieldKey] = {
        name: parsedData[fieldKey].name,
        size: parsedData[fieldKey].size,
        type: parsedData[fieldKey].type,
        lastModified: parsedData[fieldKey].lastModified,
        isStoredFile: true,
      };
      }
    });

    setFormData((prev) => ({ ...prev, [key]: parsedData }));
    }
  });
  setLoading(false);
  }, []);

  const renderInputField = (key, value, sectionName, sectionTitle) => {
  const formattedKey = key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  // Custom label mapping for specific fields
  let displayLabel = formattedKey;
  if (key === "language") {
    displayLabel = "Language Of The Film/Project";
  }
  // Production House Details
  if (key === "synopsis") {
    displayLabel = "Synopsis Of Project(250 words)";
  }
  if (key === "emailOfProductionHouse") {
    displayLabel = "Email ID of Production House";
  }
  // Applicant Details
  if (key === "emailOfApplicant") {
    displayLabel = "Email ID of Applicant";
  }
  // Creative and Cast
  if (key === "briefSynopsis") {
    displayLabel = "Brief Synopsis(500 Words)";
  }
  if (key === "mainArtistsAtlocation") {
    displayLabel = "Main Artist(s) at location";
  }
  if (key === "numberOfShootingLocations") {
    displayLabel = "No. of Shooting Locations (Annexure A)";
  }
  // Technical Requirements
  if (key === "fireOrBlastingScene") {
    displayLabel = "Fire/Blasting Scene";
  }
  if (key === "otherDetails") {
    displayLabel = "Other Details(Road Blocks etc.)";
  }
  if (key === "policeOrSecurityRequirements") {
    displayLabel = "Police/Security Requirements";
  }
  // Legal and Branding
  if (key === "mibCertificate") {
    displayLabel = "MIB Certificate (for International Film)";
  }
  if (key === "meaCertificate") {
    displayLabel = "MEA Certificate (for Documentary, AV, Music)";
  }
  if (key === "inFilmBrandingOrAssetUse") {
    displayLabel = "In-Film Branding or Assets Use";
  }
  // Declaration
  if (key === "authorizedApplicantName") {
    displayLabel = "Authorized Applicant Name";
  }
  // Annexure A
  if (key === "startDateTime") {
    displayLabel = "Start Date & Time";
  }
  if (key === "endDateTime") {
    displayLabel = "Expected End Date & Time";
  }
  if (key === "crewInvolvement") {
    displayLabel = "Crew/Public Involvement";
  }
  if (key === "personCount") {
    displayLabel = "Tentative count of persons at site";
  }
  if (key === "permissionDetails") {
    displayLabel = "Details of Permission Required";
  }
  if (key === "locationFee") {
    displayLabel = "Location Fee";
  }
  if (key === "securityDeposit") {
    displayLabel = "Security Deposit";
  }
  if (key === "paymentRef") {
    displayLabel = "Payment Ref/DD Number";
  }
  if (key === "locationManager") {
    displayLabel = "Location Manager Details";
  }
  if (key === "sceneDetails") {
    displayLabel = "Scene Details (100 words)";
  }
  if (key === "forestType") {
    displayLabel = "Forest Area Type (if applicable)";
  }
  if (key === "forestDetails") {
    displayLabel = "Forest Area Details";
  }

  let inputType = "text";
  if (
    key.toLowerCase().includes("datetime") ||
    (key.toLowerCase().includes("date") && key.toLowerCase().includes("time"))
  ) {
    inputType = "datetime-local";
  } else if (key.toLowerCase().includes("date")) {
    inputType = "date";
  }
  if (key.toLowerCase().includes("email")) inputType = "email";
  if (key.toLowerCase().includes("contact")) inputType = "tel";
  if (
    key === "personCount" ||
    key === "locationFee" ||
    key === "securityDeposit"
  ) {
    inputType = "number";
  }

  // Yes/No dropdown fields
  const yesNoFields = [
    "dronePermissionRequired",
    "animalPartOfShooting",
    "fireOrBlastingScene",
    "policeOrSecurityRequirements",
    "temporaryStructureCreation",
  ];

  // File upload fields
  const fileUploadFields = [
    "mibCertificate",
    "meaCertificate",
    "seal",
    "signature",
  ];

  // Textarea fields for longer content
  const textareaFields = [
    "synopsis",
    "briefSynopsis",
    "sceneDetails",
    "permissionDetails",
    "locationManager",
    "forestDetails",
    "otherDetails",
    "otherParticulars",
  ];

  // Dropdown fields
  const dropdownFields = {
    locationType: ["Indoor", "Outdoor", "Both"],
    forestType: [
    "",
    "Reserved Forest",
    "Protected Forest",
    "National Park",
    "Wildlife Sanctuary",
    "Not Applicable",
    ],
  };

  let inputElement;

  if (yesNoFields.includes(key)) {
    inputElement = (
    <select
      id={`${sectionName}-${key}`}
      value={value}
      onChange={(e) => handleInputChange(sectionName, key, e.target.value)}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ad133c] focus:ring-[#ad133c]"
    >
      <option value="">Select an option</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    );
  } else if (dropdownFields[key]) {
    inputElement = (
    <select
      id={`${sectionName}-${key}`}
      value={value}
      onChange={(e) => handleInputChange(sectionName, key, e.target.value)}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ad133c] focus:ring-[#ad133c]"
    >
      <option value="">Select an option</option>
      {dropdownFields[key].map((option) => (
      <option key={option} value={option}>
        {option || "Not Applicable"}
      </option>
      ))}
    </select>
    );
  } else if (textareaFields.includes(key)) {
    inputElement = (
    <textarea
      id={`${sectionName}-${key}`}
      value={value}
      onChange={(e) => handleInputChange(sectionName, key, e.target.value)}
      rows={key === "briefSynopsis" || key === "synopsis" ? 4 : 3}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ad133c] focus:ring-[#ad133c]"
      placeholder={
      key === "briefSynopsis"
        ? "Max 500 words"
        : key === "synopsis"
        ? "Max 250 words"
        : key === "sceneDetails"
        ? "Max 100 words"
        : ""
      }
    />
    );
  } else if (fileUploadFields.includes(key)) {
    inputElement = (
    <div>
      <input
      type="file"
      id={`${sectionName}-${key}`}
      accept="image/*,application/pdf,.doc,.docx"
      onChange={(e) =>
        handleFileChange(sectionName, key, e.target.files[0])
      }
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-[#ad133c] hover:file:bg-purple-100"
      />
      <small className="text-gray-500 mt-1 block">
      Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
      </small>
      {value && (
      <div className="mt-2 text-sm text-[#ad133c]">
        <i className="mdi mdi-file-check mr-1"></i>
        File uploaded: {value.name || value}
        {value.isStoredFile && (
        <span className="text-gray-500 ml-2">
          (Previously uploaded)
        </span>
        )}
      </div>
      )}
    </div>
    );
  } else {
    inputElement = (
    <input
      type={inputType}
      id={`${sectionName}-${key}`}
      value={value}
      onChange={(e) => handleInputChange(sectionName, key, e.target.value)}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ad133c] focus:ring-[#ad133c]"
    />
    );
  }

  return (
    <div key={key} className="p-3 bg-gray-50 rounded-md">
    <label
      htmlFor={`${sectionName}-${key}`}
      className="block text-gray-600 font-medium mb-2"
    >
      {displayLabel}
    </label>
    <div className="text-gray-800">{inputElement}</div>
    </div>
  );
  };

  const renderSection = (title, data, icon, sectionName) => {
  // Map the section names to match the tab IDs
  const sectionMapping = {
    projectInformation: "projectinformation",
    productionHouseDetails: "productionhousedetails",
    applicantDetails: "applicantdetails",
    creativeandcast: "creativeandcast",
    technicalRequirements: "technicalrequirements",
    legalAndBranding: "legalandbranding",
    declaration: "declaration",
    annexureA: "annexurea",
  };

  const mappedSectionName = sectionMapping[sectionName] || sectionName;

  if (activeSection !== "all" && activeSection !== mappedSectionName)
    return null;

  const isLastSection = mappedSectionName === "annexurea";
  const isFirstSection = mappedSectionName === "projectinformation";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center mb-6 pb-2 border-b border-gray-100">
      <i className={`${icon} text-purple-600 text-2xl mr-3`} />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(data).map(([key, value]) =>
      renderInputField(key, value, sectionName, title)
      )}
    </div>

    {/* Navigation buttons for each section */}
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
      <div>
      {!isFirstSection && (
        <button
        type="button"
        onClick={handleGoBack}
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ad133c] transition-all"
        >
        <i className="mdi mdi-arrow-left mr-2"></i>
        Go Back
        </button>
      )}
      </div>

      <div>
      {isLastSection ? (
        <button
        type="submit"
        className={`inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#ad133c] hover:bg-[#a92b4e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ad133c] transition-all ${
          saveStatus === "saving" ? "opacity-70 cursor-wait" : ""
        }`}
        disabled={saveStatus === "saving"}
        >
        <i className="mdi mdi-check mr-2"></i>
        {saveStatus === "saving"
          ? "Submitting..."
          : saveStatus === "success"
          ? "Submitted!"
          : "Submit Application"}
        </button>
      ) : (
        <button
        type="button"
        onClick={handleSaveAndContinue}
        className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#ad133c] hover:bg-[#a92b4e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ad133c] transition-all"
        >
        Save & Continue
        <i className="mdi mdi-arrow-right ml-2"></i>
        </button>
      )}
      </div>
    </div>
    </div>
  );
  };

  const renderTabs = () => {
  const tabs = [
    {
    id: "projectinformation",
    label: "Project Information",
    
    },
    {
    id: "productionhousedetails",
    label: "Production House Details",
    },
    {
    id: "applicantdetails",
    label: "Applicant Details",
    },
    {
    id: "creativeandcast",
    label: "Creative And Cast",
    },
    {
    id: "technicalrequirements",
    label: "Technical Requirements",
    },
    {
    id: "legalandbranding",
    label: "Legal And Branding",
    },
    {
    id: "declaration",
    label: "Declaration",
    },
    {
    id: "annexurea",
    label: "Annexure A",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
    {tabs.map((tab) => (
      <button
      key={tab.id}
      type="button"
      onClick={() => setActiveSection(tab.id)}
      className={`px-4 py-2 rounded-full text-sm font-medium flex items-center transition-colors relative ${
        activeSection === tab.id
        ? "bg-[#a92b4e] text-white shadow-md"
        : isSectionCompleted(tab.id)
        ? "bg-[#f27d9c] text-[#a92b4e]"
        : "bg-white text-gray-700 hover:bg-purple-100"
      }`}
      >
      <i className={`mdi ${tab.icon} mr-2`} />
      <span>{tab.label}</span>
      {isSectionCompleted(tab.id) && (
        <i className="mdi mdi-check-circle ml-2 text-[#ad133c]" />
      )}
      </button>
    ))}
    </div>
  );
  };

  // Function to check if a section is completed
  const isSectionCompleted = (sectionId) => {
  const errors = [];

  switch (sectionId) {
    case "projectinformation":
    const projectInfo = formData.projectInformation;
    return (
      projectInfo.typeOfProject &&
      projectInfo.language &&
      projectInfo.genre &&
      projectInfo.duration &&
      projectInfo.title &&
      projectInfo.directorAndMainCast
    );

    case "productionhousedetails":
    const productionDetails = formData.productionHouseDetails;
    return (
      productionDetails.producerHouse &&
      productionDetails.synopsis &&
      productionDetails.contactOfProductionHouse &&
      productionDetails.productionHouseAddress &&
      productionDetails.emailOfProductionHouse &&
      productionDetails.productionHouseConstitution
    );

    case "applicantdetails":
    const applicantDetails = formData.applicantDetails;
    return (
      applicantDetails.registrationNumber &&
      applicantDetails.representativeName &&
      applicantDetails.designationOfApplicant &&
      applicantDetails.addressOfApplicant &&
      applicantDetails.contactOfApplicant &&
      applicantDetails.emailOfApplicant
    );

    case "creativeandcast":
    const creativeDetails = formData.creativeandcast;
    return (
      creativeDetails.briefSynopsis &&
      creativeDetails.mainArtistsAtlocation &&
      creativeDetails.numberOfShootingLocations &&
      creativeDetails.dronePermissionRequired &&
      creativeDetails.animalPartOfShooting
    );

    case "technicalrequirements":
    const technicalDetails = formData.technicalRequirements;
    return (
      technicalDetails.fireOrBlastingScene &&
      technicalDetails.temporaryStructureCreation &&
      technicalDetails.lineProducerDetails &&
      technicalDetails.siteContactPersonalDetails
    );

    case "legalandbranding":
    const legalDetails = formData.legalAndBranding;
    return (
      legalDetails.mibCertificate &&
      legalDetails.meaCertificate &&
      legalDetails.inFilmBrandingOrAssetUse &&
      legalDetails.otherParticulars
    );

    case "declaration":
    const declarationDetails = formData.declaration;
    return (
      declarationDetails.authorizedApplicantName &&
      declarationDetails.date &&
      declarationDetails.seal &&
      declarationDetails.signature
    );

    default:
    return false;
  }
  };

  // Function to get the next section
  const getNextSection = (currentSection) => {
  const sections = [
    "projectinformation",
    "productionhousedetails",
    "applicantdetails",
    "creativeandcast",
    "technicalrequirements",
    "legalandbranding",
    "declaration",
    "annexurea",
  ];
  const currentIndex = sections.indexOf(currentSection);
  return currentIndex < sections.length - 1
    ? sections[currentIndex + 1]
    : null;
  };

  // Function to get the previous section
  const getPreviousSection = (currentSection) => {
  const sections = [
    "projectinformation",
    "productionhousedetails",
    "applicantdetails",
    "creativeandcast",
    "technicalrequirements",
    "legalandbranding",
    "declaration",
    "annexurea",
  ];
  const currentIndex = sections.indexOf(currentSection);
  return currentIndex > 0 ? sections[currentIndex - 1] : null;
  };

  // Function to save current section data
  const saveCurrentSection = () => {
  const sectionKey = Object.keys(formData).find((key) => {
    const mapping = {
    projectInformation: "projectinformation",
    productionHouseDetails: "productionhousedetails",
    applicantDetails: "applicantdetails",
    creativeandcast: "creativeandcast",
    technicalRequirements: "technicalrequirements",
    legalAndBranding: "legalandbranding",
    declaration: "declaration",
    annexureA: "annexurea",
    };
    return mapping[key] === activeSection;
  });

  if (sectionKey) {
    // For sections with file uploads, we need to handle them differently
    const sectionData = { ...formData[sectionKey] };

    // Convert File objects to a storable format
    Object.keys(sectionData).forEach((key) => {
    if (sectionData[key] instanceof File) {
      sectionData[key] = {
      name: sectionData[key].name,
      size: sectionData[key].size,
      type: sectionData[key].type,
      lastModified: sectionData[key].lastModified,
      isFile: true,
      };
    }
    });

    localStorage.setItem(sectionKey, JSON.stringify(sectionData));
    setNotification({
    show: true,
    message: "Section saved successfully!",
    type: "success",
    });
    setTimeout(
    () => setNotification({ show: false, message: "", type: "" }),
    2000
    );
  }
  };

  // Function to handle going back
  const handleGoBack = () => {
  const previousSection = getPreviousSection(activeSection);
  if (previousSection) {
    setActiveSection(previousSection);
  }
  };

  // Function to validate current section
  const validateCurrentSection = () => {
  const errors = [];

  switch (activeSection) {
    case "projectinformation":
    const projectInfo = formData.projectInformation;
    if (!projectInfo.typeOfProject)
      errors.push("Type of Project is required");
    if (!projectInfo.language)
      errors.push("Language of the Film/Project is required");
    if (!projectInfo.genre) errors.push("Genre is required");
    if (!projectInfo.duration)
      errors.push("Duration of Project is required");
    if (!projectInfo.title)
      errors.push("Title of Project is required");
    if (!projectInfo.directorAndMainCast)
      errors.push("Director and Main Cast Names are required");
    break;

    case "productionhousedetails":
    const productionDetails = formData.productionHouseDetails;
    if (!productionDetails.producerHouse)
      errors.push("Producer House is required");
    if (!productionDetails.synopsis)
      errors.push("Synopsis of Project is required");
    if (!productionDetails.contactOfProductionHouse)
      errors.push("Contact of Production House is required");
    if (!productionDetails.productionHouseAddress)
      errors.push("Production House Address is required");
    if (!productionDetails.emailOfProductionHouse)
      errors.push("Email ID of Production House is required");
    if (!productionDetails.productionHouseConstitution)
      errors.push("Production House Constitution is required");

    // Email validation
    if (
      productionDetails.emailOfProductionHouse &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      productionDetails.emailOfProductionHouse
      )
    ) {
      errors.push(
      "Please enter a valid email address for Production House"
      );
    }
    break;

    case "applicantdetails":
    const applicantDetails = formData.applicantDetails;
    if (!applicantDetails.registrationNumber)
      errors.push("Registration Number is required");
    if (!applicantDetails.representativeName)
      errors.push("Representative Name is required");
    if (!applicantDetails.designationOfApplicant)
      errors.push("Designation of Applicant is required");
    if (!applicantDetails.addressOfApplicant)
      errors.push("Address of Applicant is required");
    if (!applicantDetails.contactOfApplicant)
      errors.push("Contact of Applicant is required");
    if (!applicantDetails.emailOfApplicant)
      errors.push("Email ID of Applicant is required");

    // Email validation
    if (
      applicantDetails.emailOfApplicant &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantDetails.emailOfApplicant)
    ) {
      errors.push("Please enter a valid email address for Applicant");
    }

    // Phone validation
    if (
      applicantDetails.contactOfApplication &&
      !/^[\d\s\+\-\(\)]+$/.test(applicantDetails.contactOfApplication)
    ) {
      errors.push("Please enter a valid phone number");
    }
    break;

    case "creativeandcast":
    const creativeDetails = formData.creativeandcast;
    if (!creativeDetails.briefSynopsis)
      errors.push("Brief Synopsis is required");
    if (!creativeDetails.mainArtistsAtlocation)
      errors.push("Main Artist(s) at location is required");
    if (!creativeDetails.numberOfShootingLocations)
      errors.push("Number of Shooting Locations is required");
    if (!creativeDetails.dronePermissionRequired)
      errors.push("Drone Permission Required field is required");
    if (!creativeDetails.animalPartOfShooting)
      errors.push("Animal Part of Shooting field is required");

    // Number validation
    if (
      creativeDetails.numberOfShootingLocations &&
      (isNaN(creativeDetails.numberOfShootingLocations) ||
      creativeDetails.numberOfShootingLocations < 1)
    ) {
      errors.push(
      "Number of Shooting Locations must be a valid number greater than 0"
      );
    }
    break;

    case "technicalrequirements":
    const technicalDetails = formData.technicalRequirements;
    if (!technicalDetails.fireOrBlastingScene)
      errors.push("Fire/Blasting Scene field is required");
    if (!technicalDetails.temporaryStructureCreation)
      errors.push("Temporary Structure Creation field is required");
    if (!technicalDetails.lineProducerDetails)
      errors.push("Line Producer Details are required");
    if (!technicalDetails.siteContactPersonalDetails)
      errors.push("Site Contact Person Details are required");
    break;

    case "legalandbranding":
    const legalDetails = formData.legalAndBranding;
    if (!legalDetails.mibCertificate)
      errors.push("MIB Certificate file is required");
    if (!legalDetails.meaCertificate)
      errors.push("MEA Certificate file is required");
    if (!legalDetails.inFilmBrandingOrAssetUse)
      errors.push("In-Film Branding or Assets Use field is required");
    if (!legalDetails.otherParticulars)
      errors.push("Other Particulars field is required");
    break;

    case "declaration":
    const declarationDetails = formData.declaration;
    if (!declarationDetails.authorizedApplicantName)
      errors.push("Authorized Applicant Name is required");
    if (!declarationDetails.date) errors.push("Date is required");
    if (!declarationDetails.seal) errors.push("Seal file is required");
    if (!declarationDetails.signature)
      errors.push("Signature file is required");
    break;

    default:
    break;
  }

  return errors;
  };

  // Function to handle save and continue with validation
  const handleSaveAndContinue = () => {
  const errors = validateCurrentSection();

  if (errors.length > 0) {
    setNotification({
    show: true,
    message: `Please fix the following errors: ${errors.join(", ")}`,
    type: "warning",
    });
    setTimeout(
    () => setNotification({ show: false, message: "", type: "" }),
    5000
    );
    return;
  }

  saveCurrentSection();
  const nextSection = getNextSection(activeSection);
  if (nextSection) {
    setTimeout(() => {
    setActiveSection(nextSection);
    }, 500);
  }
  };

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
    Loading form...
    </div>
  );
  }
// 🟢 Declare this above the return inside your component
const onSubmit = async () => {
  try {
    const formToSubmit = new FormData();

    Object.entries(formData).forEach(([sectionKey, sectionData]) => {
      Object.entries(sectionData).forEach(([fieldKey, fieldValue]) => {
        if (fieldValue instanceof File) {
          formToSubmit.append(fieldKey, fieldValue);
        } else {
          formToSubmit.append(fieldKey, fieldValue);
        }
      });
    });

    const response = await axios.post(
      "http://localhost:3000/api/addNocForm",
      formToSubmit,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    window.alert("✅ Form submitted:", response.data);
  console.log("✅ Form submitted:", response.data);
    setNotification({
      show: true,
      message: "Form submitted successfully!",
      type: "success",
    });
  } catch (err) {
    window.alert("❌ Error:", err);
  console.log("❌ Error:", err);
    setNotification({
      show: true,
      message: "Something went wrong!",
      type: "error",
    });
  }
};

  return (
  <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
    />
    {notification.show && (
    <div
      className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-md flex items-center ${
      notification.type === "success"
        ? "bg-green-500"
        : notification.type === "warning"
        ? "bg-yellow-500"
        : "bg-red-500"
      } text-white`}
    >
      <i
      className={`mdi mr-2 ${
        notification.type === "success"
        ? "mdi-check-circle"
        : notification.type === "warning"
        ? "mdi-alert"
        : "mdi-alert-circle"
      }`}
      />
      <span>{notification.message}</span>
    </div>
    )}
    <div className="max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
      BIHAR STATE FILM DEVELOPMENT & FINANCE CORPORATION LTD
      </h1>
      <p className="text-xl text-gray-600">
      APPLICATION FORM FOR SEEKING PERMISSION TO SHOOT IN BIHAR
      </p>
    </div>
    {renderTabs()}
    <form
      onSubmit={(e) => {
  e.preventDefault(); // ❗ prevent default form refresh
  onSubmit();
}}
    >
      {renderSection(
      "Project Information",
      formData.projectInformation,
      "",
      "projectInformation"
      )}
      {renderSection(
      "Production House Details",
      formData.productionHouseDetails,
      "",
      "productionHouseDetails"
      )}
      {renderSection(
      "Applicant Details",
      formData.applicantDetails,
      "",
      "applicantDetails"
      )}
      {renderSection(
      "Creative And Cast",
      formData.creativeandcast,
      "",
      "creativeandcast"
      )}
      {renderSection(
      "Technical Requirements",
      formData.technicalRequirements,
      "",
      "technicalRequirements"
      )}
      {renderSection(
      "Legal And Branding",
      formData.legalAndBranding,
      "",
      "legalAndBranding"
      )}
      {renderSection(
      "Declaration",
      formData.declaration,
      "",
      "declaration"
      )}
      {renderSection(
      "Annexure A - Location Details",
      formData.annexureA,
      "",
      "annexureA"
      )}
    </form>
    </div>
  </div>
  );
};

export default Response;
