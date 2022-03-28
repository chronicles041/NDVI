import { Row, Col } from "antd";
import "./map.css";
function ColorPalette({ ndvi, ndwi }) {
  return (
    <>
      <Row hidden={!ndwi}>

        <Col className="p-1" span={2}>
          Drought
        </Col>

        <Col
          style={{ backgroundColor: "#d7191c" }}
          className="p-1 text-white strong"
          span={2}
        >
          NDWI
        </Col>
        <Col style={{ backgroundColor: "#ef3b2c" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#fb6a4a" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#d7efa9" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#9ecae1" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#4292c6" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#2171b5" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#08519c" }} className="p-1" span={2} />
        <Col style={{ backgroundColor: "#08306b" }} className="p-1" span={2} />

        <Col className="p-1" span={2}>
          Flood
        </Col>
      </Row>

      <Row hidden={!ndvi}>
        <Col className="p-1" span={2}>
          Poor 
        </Col>
        <Col
          style={{ backgroundColor: "red" }}
          className="p-1 text-white"
          span={2}
        >
          NDVI
        </Col>
        <Col style={{ backgroundColor: "#CE7E45" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#DF923D" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#F1B555" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#FCD163" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#99B718" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#74A901" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#66A000" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#529400" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#3E8601" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#207401" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#056201" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#004C00" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#023B01" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#012E01" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#011D01" }} className="p-1" span={1} />
        <Col style={{ backgroundColor: "#011301" }} className="p-1" span={1} />
        {/* <Col style={{ backgroundColor: "#08519c" }} className="p-1" span={1} /> */}
        <Col className="p-1" span={2}>
          Good 
        </Col>
      </Row>
    </>
  );
}

export default ColorPalette;
