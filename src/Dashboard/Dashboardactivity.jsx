import React, { useState } from 'react';
import { FaShareAlt, FaTimesCircle, FaTimes } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
function Dashboardactivity() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showForwardModal, setShowForwardModal] = useState(false);
    const [selectedDistricts, setSelectedDistricts] = useState({}); // Changed to object

    const cases = [
        {
            ProjectId: 1,
            Type: 'Shooting',
            Duration: 'Two Months',
            Registration: '5213',
            Representative: 'Mittal Kumar',
            Email: 'Mittal@gmail.com',
            Start: '2023-10-15',
            End: '2023-12-15',
            status: 'Pending',
        },
    ];

    const formData = {
        projectType: 'Feature Film',
        language: 'Hindi',
        genre: 'Drama',
        duration: '90 Days',
        title: 'Shadows of Bihar',
        directorCast: 'Ravi Singh, Priya Mehra, Anil Kapoor',
        producerHouse: 'Bihar Cine Works',
        synopsis: 'A powerful story about rural transformation and youth resilience.',
        productionContact: '9876543210',
        productionAddress: '123, Gandhi Path, Patna, Bihar',
        productionEmail: 'info@biharcineworks.com',
        constitution: 'LLP',
        registrationNo: 'BCW2025-007',
        repName: 'Ankit Verma',
        designation: 'Creative Head',
        applicantAddress: '45, Film Nagar, Patna',
        applicantContact: '8888555577',
        applicantEmail: 'ankit@biharcineworks.com',
        briefSynopsis: 'A young woman’s journey across Bihar to document lost stories.',
        mainArtists: 'Ananya Tripathi, Rajeev Yadav',
        shootingLocations: '5',
        drone: 'Yes',
        animalInvolved: 'No',
        fireScene: 'No',
        structure: 'Yes',
        otherDetails: 'Temporary traffic diversion in Begusarai town',
        lineProducer: 'Raj Sharma - 9999999999',
        securityDetails: 'Police escort required for public areas',
        siteContact: 'Manish Sinha - 7894561230',
        mibCertificate: 'uploaded-mib.pdf',
        meaCertificate: 'uploaded-mea.pdf',
        brandingDetails: 'Yes, placement of local handicraft branding in two scenes',
        otherParticulars: 'Drone pilot license attached',
        authApplicant: 'Ankit Verma',
        seal: 'BCW-Seal',
        date: '2025-06-02',
        signature: 'Digital Signature',
        location: 'Begusarai Fort',
        landmark: 'Near Ganga Bridge',
        locationType: 'Outdoor',
        startDateTime: '2025-06-15T09:00',
        endDateTime: '2025-06-20T18:00',
        crewInvolvement: 'Local crew and public audience',
        personCount: '75',
        permissionDetails: 'Local municipality and road-block approval',
        locationFee: '₹50,000',
        securityDeposit: '₹10,000',
        paymentRef: 'DD12345678',
        locationManager: 'Sonal Raj, 9876543211',
        sceneDetails: 'A dramatic chase sequence around the historic fort',
        forestType: 'Protected',
        forestDetails: 'Shooting near forest boundary – no entry into core zone',
    };

    const handleRowClick = () => {
        setSelectedRow(formData);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedRow(null);
    };

    const renderSection = (title, fields) => (
        <div className="mb-6">
            <h3 className="text-md font-semibold border-b pb-1 mb-2">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {fields.map(([label, key]) => (
                    <div key={key}>
                        <span className="font-semibold">{label}:</span> {selectedRow[key]}
                    </div>
                ))}
            </div>
        </div>
    );






    return (
        <div className="relative">
            <div className="overflow-x-auto rounded-2xl border border-gray-200 min-h-96">
                <table className="min-w-full table-auto border rounded-2xl">
                    <thead>
                        <tr className="bg-gray-200 text-xs text-gray-600">
                            <th className="px-4 py-2 text-left">Sr. No</th>
                            <th className="px-4 py-2 text-left">Type of Project</th>
                            <th className="px-4 py-2 text-left">Duration</th>
                            <th className="px-4 py-2 text-left">Registration No.</th>
                            <th className="px-4 py-2 text-left">Representative Name</th>
                            <th className="px-4 py-2 text-left">Email Id</th>
                            <th className="px-4 py-2 text-left">Start Date</th>
                            <th className="px-4 py-2 text-left">End Date</th>
                            <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases.map((caseDetail, index) => (
                            <tr
                                key={caseDetail.ProjectId}
                                className="border-t text-xs border-gray-200 cursor-pointer hover:bg-gray-50"
                                onClick={handleRowClick}
                            >
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{caseDetail.Type}</td>
                                <td className="px-4 py-2">{caseDetail.Duration}</td>
                                <td className="px-4 py-2">{caseDetail.Registration}</td>
                                <td className="px-4 py-2">{caseDetail.Representative}</td>
                                <td className="px-4 py-2">{caseDetail.Email}</td>
                                <td className="px-4 py-2">{caseDetail.Start}</td>
                                <td className="px-4 py-2">{caseDetail.End}</td>
                                <td className="px-4 py-2">
                                    <div className="mb-1">{caseDetail.status}</div>
                                    <div className="w-full bg-gray-200 h-2 rounded-full">
                                        <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && selectedRow && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full overflow-y-auto max-h-[90vh]">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">NOC Application Details</h2>
                            <div className="flex gap-4">
                                <button className="text-gray-500 hover:text-gray-700" onClick={() => alert("Download functionality not implemented")}>
                                    <IoMdDownload className="text-2xl" />
                                </button>
                                <button onClick={closeModal}><FaTimesCircle className="text-red-500 text-2xl" /></button>
                            </div>
                        </div>

                        {renderSection("Project Information", [["Type", "projectType"], ["Language", "language"], ["Genre", "genre"], ["Duration", "duration"], ["Title", "title"], ["Director & Cast", "directorCast"]])}
                        {renderSection("Production Details", [["Production House", "producerHouse"], ["Synopsis", "synopsis"], ["Contact", "productionContact"], ["Address", "productionAddress"], ["Email", "productionEmail"], ["Constitution", "constitution"]])}
                        {renderSection("Applicant Information", [["Registration No", "registrationNo"], ["Representative", "repName"], ["Designation", "designation"], ["Address", "applicantAddress"], ["Contact", "applicantContact"], ["Email", "applicantEmail"]])}
                        {renderSection("Creative Details", [["Brief Synopsis", "briefSynopsis"], ["Main Artists", "mainArtists"], ["No. of Locations", "shootingLocations"], ["Drone Used", "drone"], ["Animal Involved", "animalInvolved"]])}
                        {renderSection("Technical & Security", [["Fire Scene", "fireScene"], ["Structure", "structure"], ["Other Details", "otherDetails"], ["Line Producer", "lineProducer"], ["Security", "securityDetails"], ["Site Contact", "siteContact"]])}
                        {renderSection("Legal/Branding", [["MIB Certificate", "mibCertificate"], ["MEA Certificate", "meaCertificate"], ["Branding", "brandingDetails"], ["Other Particulars", "otherParticulars"]])}
                        {renderSection("Declaration", [["Authorized Applicant", "authApplicant"], ["Seal", "seal"], ["Date", "date"], ["Signature", "signature"]])}
                        {renderSection("Annexure A", [["Location", "location"], ["Landmark", "landmark"], ["Location Type", "locationType"], ["Start Time", "startDateTime"], ["End Time", "endDateTime"], ["Crew Involvement", "crewInvolvement"], ["Person Count", "personCount"], ["Permission", "permissionDetails"], ["Fee", "locationFee"], ["Security Deposit", "securityDeposit"], ["Payment Ref", "paymentRef"], ["Manager", "locationManager"], ["Scene Details", "sceneDetails"], ["Forest Type", "forestType"], ["Forest Info", "forestDetails"]])}

                        <div className="mt-6 flex justify-center gap-6">
                            <button onClick={() => setShowForwardModal(true)} className="relative group w-32 h-10 border-2 border-[#a92b43] text-black rounded-md overflow-hidden">
                                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                                    <FaShareAlt className="mr-2" /> Forward
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                                    <FaShareAlt className="text-[#a92b43]" />
                                </span>
                            </button>
                            <button className="relative group w-32 h-10 border-2 border-[#a92b43] text-black rounded-md overflow-hidden">
                                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                                    <FaTimes className="mr-2" /> Reject
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                                    <FaTimes className="text-[#a92b43]" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showForwardModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Forward NOC</h2>
                            <button onClick={() => setShowForwardModal(false)}><FaTimesCircle className="text-red-500 text-xl" /></button>
                        </div>

                        {/* District Checkboxes */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-b pb-4 mb-4">
                            {["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Begusarai", "Purnia", "Ara", "Chapra", "Hajipur", "Katihar", "Munger", "Sasaram", "Samastipur", "Motihari", "Siwan", "Dehri", "Bettiah", "Jamalpur", "Jehanabad", "Buxar", "Sitamarhi", "Saharsa", "Araria", "Kishanganj", "Madhepura", "Sheikhpura", "Lakhisarai"].map(district => (
                                <label key={district} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        value={district}
                                        checked={selectedDistricts.hasOwnProperty(district)}
                                        onChange={(e) => {
                                            const checked = e.target.checked;
                                            const district = e.target.value;
                                            if (checked) {
                                                setSelectedDistricts(prev => ({
                                                    ...prev,
                                                    [district]: []
                                                }));
                                            } else {
                                                const updated = { ...selectedDistricts };
                                                delete updated[district];
                                                setSelectedDistricts(updated);
                                            }
                                        }}
                                    />
                                    <span>{district}</span>
                                </label>
                            ))}
                        </div>

                        {/* Department Checkboxes for Each District */}
                        {Object.keys(selectedDistricts).length > 0 ? (
                            Object.entries(selectedDistricts).map(([district, depts]) => (
                                <div key={district} className="mb-4">
                                    <h4 className="text-sm font-semibold text-[#a92b43] mb-1">{district}</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {["DOP", "DTO", "SDPO", "DM", "SP"].map(dept => (
                                            <label key={dept} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox"
                                                    checked={depts.includes(dept)}
                                                    onChange={(e) => {
                                                        const newDepts = selectedDistricts[district] || [];
                                                        const updated = e.target.checked
                                                            ? [...newDepts, dept]
                                                            : newDepts.filter(d => d !== dept);

                                                        setSelectedDistricts(prev => ({
                                                            ...prev,
                                                            [district]: updated
                                                        }));
                                                    }}
                                                />
                                                <span>{dept}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">Select districts to view departments.</p>
                        )}

                        <div className="text-center mt-6">
                            <button onClick={() => { console.log(selectedDistricts); alert("Form forwarded"); setShowForwardModal(false); setShowModal(false); }} className="bg-[#a92b43] text-white px-6 py-2 rounded-lg">Forward</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboardactivity;
