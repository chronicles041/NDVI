import React from "react";

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
    console.log("Selected Date Detail", this.props.mapData[value]);
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
        <select
          hidden={this.props.loading}
          onChange={() => this.onChange(document.getElementById("dates").value)}
          name="dates"
          // placeholder={"Choose Date"}
          id="dates"
        >
          <option value="">Select your option</option>
          {/* <select  onChange={onChange(value)} name="dates" id="dates"> */}
          {this.props.mapData.map((d, i) => (
            <option disabled={d.cloud > 30} value={i}>
              {d.date}  {d.cloud < 30 ? '' : "☁️"}
            </option>
          ))}
        </select>
        <span hidden={!this.props.loading}> &nbsp; Loading...</span>
      </>
    );
  }
}

export default DateList;


