import React from "react";
import { Slider } from "antd";
import { LeftOutlined, RightOutlined, ReloadOutlined } from "@ant-design/icons";
import moment from "moment";

const initialState = {
  selectedDate: "",
  marks: {},
  visibleMarks: {
    currentIndex: 0,
    totalDates: null,
    marks: {},
  },
  markerIndex: null,
};

class DateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.mapData !== this.props.mapData) {
      // console.log("Did Update Slider", prevProps, this.props.mapData);
      this.setState(
        {
          initaialState: initialState,
          markerIndex: null,
        },
        () => {
          this.createMarkers();
        }
      );
    }
  }

  createMarkers = () => {
    let tempMarks = {};
    let activeMarker = this.state.markerIndex;
    this.props.mapData.map((d, i) => {
      tempMarks = {
        ...tempMarks,
        [i]: {
          style: {
            backgroundColor:
              this.state.markerIndex === i ? "#59433E" : "#161626",
            color: "#374151",
            fontSize: "7px",
          },
          label:
            this.state.markerIndex === i ? (
              <strong>{moment(d.date).format("Do MMM, yy")} </strong>
            ) : (
              <strong>{moment(d.date).format("Do MMM, yy")} </strong>
            ),
          // label: this.state.markerIndexactiveMarker ?  'Active': <strong>{moment(d.date).format("Do MMM, yy")}</strong>,
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
        // console.log("**Marks / Seprated", i, allMarks[i]);
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
    this.setState(
      {
        selectedDate: this.props.mapData[value].date,
        markerIndex: value,
      },
      () => this.createMarkers()
    );
  };

  createDateMarks = () => {
    const { visibleMarks, marks } = this.state;
    // console.log("Marks",visibleMarks)
    return visibleMarks.marks;
  };

  render() {
    const { visibleMarks, marks } = this.state;

    return (
      <div className="flex flex-row w-full justify-center items-center p-5">
        {this.props.loading ? (
          <ReloadOutlined spin={true} />
        ) : (
          <>
            <div className="basis-[2%]">
              <LeftOutlined
                hidden={visibleMarks.currentIndex === 0}
                onClick={() => {
                  this.makeVisibleMarker(true, false);
                }}
              />

            </div>

            <div className="basis-[96%] w-full flex flex-col justify-center items-center">
              <Slider
                // disabled={Object.keys(visibleMarks.marks).length === 0}
                disabled={this.props.loading}
                min={0}
                tipFormatter={null}
                max={Object.keys(visibleMarks.marks).length - 1}
                marks={this.createDateMarks()}
                // defaultValue={this.state.markerIndex}
                value={this.state.markerIndex}
                onChange={this.onChange}
              />

              <div className={"mt-3"}>
                <span className="text-white text-base font-semibold">
                  {Object.keys(visibleMarks.marks).length} of total
                </span>{" "}
                <span className="text-white text-base font-semibold">
                  {Object.keys(marks).length} records .
                </span>
              </div>
            </div>
            <div className="basis-[2%]">
              <RightOutlined
                hidden={
                  visibleMarks.marks[
                    Object.keys(visibleMarks.marks).length - 1
                  ] === marks[visibleMarks.totalDates - 1]
                }
                onClick={() => {
                  this.makeVisibleMarker(false, true);
                }}
              />
              <RightOutlined
                hidden={
                  visibleMarks.marks[
                    Object.keys(visibleMarks.marks).length - 1
                  ] !== marks[visibleMarks.totalDates - 1]
                }
                onClick={() => {
                  this.props.getNewDates(true, false);
                }}
                color="red"
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default DateList;
