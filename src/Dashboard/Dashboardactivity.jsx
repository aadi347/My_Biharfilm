import React, { useState } from 'react';
import { FaShareAlt, FaTimesCircle, FaTimes } from 'react-icons/fa';

function Dashboardactivity() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
        // Section 1
        projectType: 'Feature Film',
        language: 'Hindi',
        genre: 'Drama',
        duration: '90 Days',
        title: 'Shadows of Bihar',
        directorCast: 'Ravi Singh, Priya Mehra, Anil Kapoor',

        // Section 2
        producerHouse: 'Bihar Cine Works',
        synopsis: 'A powerful story about rural transformation and youth resilience.',
        productionContact: '9876543210',
        productionAddress: '123, Gandhi Path, Patna, Bihar',
        productionEmail: 'info@biharcineworks.com',
        constitution: 'LLP',

        // Section 3
        registrationNo: 'BCW2025-007',
        repName: 'Ankit Verma',
        designation: 'Creative Head',
        applicantAddress: '45, Film Nagar, Patna',
        applicantContact: '8888555577',
        applicantEmail: 'ankit@biharcineworks.com',

        // Section 4
        briefSynopsis: 'A young woman’s journey across Bihar to document lost stories.',
        mainArtists: 'Ananya Tripathi, Rajeev Yadav',
        shootingLocations: '5',
        drone: 'Yes',
        animalInvolved: 'No',

        // Section 5
        fireScene: 'No',
        structure: 'Yes',
        otherDetails: 'Temporary traffic diversion in Begusarai town',
        lineProducer: 'Raj Sharma - 9999999999',
        securityDetails: 'Police escort required for public areas',
        siteContact: 'Manish Sinha - 7894561230',

        // Section 6
        mibCertificate: 'uploaded-mib.pdf',
        meaCertificate: 'uploaded-mea.pdf',
        brandingDetails: 'Yes, placement of local handicraft branding in two scenes',
        otherParticulars: 'Drone pilot license attached',

        // Section 7
        authApplicant: 'Ankit Verma',
        seal: 'BCW-Seal',
        date: '2025-06-02',
        signature: 'Digital Signature',

        // Annexure A
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
                                        <div
                                            className="h-2 bg-yellow-500 rounded-full"
                                            style={{ width: '40%' }}
                                        ></div>
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
                            <button onClick={closeModal}>
                                <FaTimesCircle className="text-red-500 text-2xl" />
                            </button>
                        </div>

                        {/* Grouped Sections */}
                        {renderSection("Project Information", [
                            ["Type", "projectType"],
                            ["Language", "language"],
                            ["Genre", "genre"],
                            ["Duration", "duration"],
                            ["Title", "title"],
                            ["Director & Cast", "directorCast"],
                        ])}

                        {renderSection("Production Details", [
                            ["Production House", "producerHouse"],
                            ["Synopsis", "synopsis"],
                            ["Contact", "productionContact"],
                            ["Address", "productionAddress"],
                            ["Email", "productionEmail"],
                            ["Constitution", "constitution"],
                        ])}

                        {renderSection("Applicant Information", [
                            ["Registration No", "registrationNo"],
                            ["Representative", "repName"],
                            ["Designation", "designation"],
                            ["Address", "applicantAddress"],
                            ["Contact", "applicantContact"],
                            ["Email", "applicantEmail"],
                        ])}

                        {renderSection("Creative Details", [
                            ["Brief Synopsis", "briefSynopsis"],
                            ["Main Artists", "mainArtists"],
                            ["No. of Locations", "shootingLocations"],
                            ["Drone Used", "drone"],
                            ["Animal Involved", "animalInvolved"],
                        ])}

                        {renderSection("Technical & Security", [
                            ["Fire Scene", "fireScene"],
                            ["Structure", "structure"],
                            ["Other Details", "otherDetails"],
                            ["Line Producer", "lineProducer"],
                            ["Security", "securityDetails"],
                            ["Site Contact", "siteContact"],
                        ])}

                        {renderSection("Legal/Branding", [
                            ["MIB Certificate", "mibCertificate"],
                            ["MEA Certificate", "meaCertificate"],
                            ["Branding", "brandingDetails"],
                            ["Other Particulars", "otherParticulars"],
                        ])}

                        {renderSection("Declaration", [
                            ["Authorized Applicant", "authApplicant"],
                            ["Seal", "seal"],
                            ["Date", "date"],
                            ["Signature", "signature"],
                        ])}

                        {renderSection("Annexure A", [
                            ["Location", "location"],
                            ["Landmark", "landmark"],
                            ["Location Type", "locationType"],
                            ["Start Time", "startDateTime"],
                            ["End Time", "endDateTime"],
                            ["Crew Involvement", "crewInvolvement"],
                            ["Person Count", "personCount"],
                            ["Permission", "permissionDetails"],
                            ["Fee", "locationFee"],
                            ["Security Deposit", "securityDeposit"],
                            ["Payment Ref", "paymentRef"],
                            ["Manager", "locationManager"],
                            ["Scene Details", "sceneDetails"],
                            ["Forest Type", "forestType"],
                            ["Forest Info", "forestDetails"],
                        ])}

                        <div className="mt-6 flex justify-center gap-6">
                            {/* Forward Button */}
                            <button className="relative group w-32 h-10 border-2 border-[#a92b43] text-black rounded-md overflow-hidden">
                                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                                    <FaShareAlt className="mr-2" /> Forward
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                                    <FaShareAlt className="text-[#a92b43]" />
                                </span>
                            </button>

                            {/* Reject Button */}
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
        </div>
    );
}

export default Dashboardactivity;
