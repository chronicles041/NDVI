import React from "react";
import { Slider, Row, Col } from "antd";
import { LeftOutlined, RightOutlined, ReloadOutlined } from "@ant-design/icons";

const initialState = {
  selectedDate: "",
  marks: {},
  visibleMarks: {
    currentIndex: 0,
    totalDates: null,
    marks: {},
  },
  markerIndex: 0,
};

class DateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.mapData !== this.props.mapData) {
      console.log("Did Update Slider", prevProps, this.props.mapData);
      this.setState({ initialState }, () => {
        this.createMarkers();
      });
    }
  }

  createMarkers = () => {
    let tempMarks = {};
    this.props.mapData.map((d, i) => {
      tempMarks = {
        ...tempMarks,
        [i]: {
          style: {
            color: "#374151",
            fontSize: "7px",
          },
          label: <strong>{d.date}</strong>,
        },
      };
      return null;
    });

    this.setState(
      {
        marks: tempMarks,
        visibleMarks: {
          ...this.state.visibleMarks,
          totalDates: Object.keys(tempMarks).length,
        },
      },
      () => {
        this.makeVisibleMarker(false, false);
      }
    );
  };

  makeVisibleMarker = (pre, next) => {
    let allMarks = this.state.marks;
    let currentIndex = this.state.visibleMarks.currentIndex;
    let newIndex =
      pre === next ? currentIndex : next ? currentIndex + 8 : currentIndex - 8;
    let totalDates = Object.keys(allMarks).length;
    let tempMarks = {};
    if (totalDates < 8) {
      this.setState({
        visibleMarks: {
          currentIndex: 0,
          marks: allMarks,
          totalDates: Object.keys(allMarks).length,
          loading: false,
        },
      });
      return;
    }
    if (totalDates > 7) {
      var temp = 0;
      for (var i = newIndex; i < newIndex + 8; i++) {
        console.log("**Marks / Seprated", i, allMarks[i]);
        if (allMarks[i]) {
          tempMarks = { ...tempMarks, [temp]: allMarks[i] };
          temp++;
        }
      }

      this.setState({
        visibleMarks: {
          ...this.state.visibleMarks,
          currentIndex: newIndex,
          marks: tempMarks,
        },
        loading: false,
      });
    }
  };

  onChange = (value) => {
    this.props.selectedIndex(this.props.mapData[value]);
    this.setState({
      selectedDate: this.props.mapData[value].date,
      markerIndex: value,
    });
  };

  render() {
    const { visibleMarks, marks } = this.state;

    return (
      <>
        <label for="dates">Choose Date:</label>
        <select  onChange={()=>this.onChange(document.getElementById("dates").value)} name="dates" id="dates">
        {/* <select  onChange={onChange(value)} name="dates" id="dates"> */}
          {this.props.mapData.map((d, i) => (
            <option  value={i}>{d.date}</option>
          ))}
        </select>
        {/* <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select> */}
      </>
    );
  }
}

export default DateList;

/* <div classNameName="flex flex-row">
<div classNameName="basis-1/12">
  <LeftOutlined
    hidden={visibleMarks.currentIndex === 0}
    onClick={() => {
      this.makeVisibleMarker(true, false);
    }}
  />
  <LeftOutlined
    hidden={visibleMarks.marks[0] !== marks[0]}
    onClick={() => {
      this.props.getNewDates(true, false);
    }}
    color="red"
  />
</div>
<div classNameName="basis-10/12">
  <Slider
    // disabled={Object.keys(visibleMarks.marks).length === 0}
    disabled={this.props.loading}
    min={0}
    reverse
    tipFormatter={null}
    max={Object.keys(visibleMarks.marks).length - 1}
    marks={visibleMarks.marks}
    defaultValue={this.state.markerIndex}
    value={this.state.markerIndex}
    onChange={this.onChange}
  />
  
  {this.props.loading ? <ReloadOutlined spin={true} /> : <></>} &nbsp;
  {Object.keys(visibleMarks.marks).length} of total{" "}
  {Object.keys(marks).length} records .
</div>

<div classNameName="basis-1/12">
  <RightOutlined
    hidden={
      visibleMarks.marks[Object.keys(visibleMarks.marks).length - 1] ===
      marks[visibleMarks.totalDates - 1]
    }

    onClick={() => {
      this.makeVisibleMarker(false, true);
    }}

  />

  <RightOutlined
    hidden={
      visibleMarks.marks[Object.keys(visibleMarks.marks).length - 1] !==
      marks[visibleMarks.totalDates - 1]
    }
    onClick={() => { this.props.getNewDates(false,true);}}
    color="red"
  />

</div>
</div> */
