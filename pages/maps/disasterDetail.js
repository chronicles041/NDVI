// import { Card } from "antd";
// import './map.css';
function DisasterDetail({ detail }) {
  return (
    <>
      <Card className="disaster_detail"   title="Disaster Detail" bordered={false}>
        {/* {JSON.stringify(detail)} */}
        
        <h1>Warrenty ID : {detail.warranty_id}</h1>
        <h1> Plantation Date : {detail.plantation_date}</h1>
        <h1>Disaster Date : {detail.disaster_date}</h1>
        <h1>Harvest  Date : {detail.harvest_date}</h1>
        <h1>Area : {detail.area}&nbsp; sq</h1>
      </Card>
    </>
  );
}

export default DisasterDetail;
