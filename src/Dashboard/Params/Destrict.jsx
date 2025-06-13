const DistrictDashboardWrapper = () => {
  const { districtName } = useParams();
  return (
    <DistrictDashboard
      districtName={districtName}
      activityOne="Forwarded NOCs"
      activityTwo="Under Review"
    />
  );
};

export default DistrictDashboardWrapper;