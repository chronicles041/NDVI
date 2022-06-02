import moment from "moment";
import DetailModal from "../FieldDetail";

const UserColumns = [
  {
    width: 30,
    Header: <label>ID</label>,
    Filter: () => null,
    accessor: "id",
  },

  {
    Header: "Username",
    accessor: "username",
    // Filter: () => null,
    // width: 250,
  },
  {
    Header: "Full Name",
    accessor: (row: any) => row,
    Cell: ({ value }) => (
      <span className="">
        {value.first_name} {value.last_name}
      </span>
    ),
    // Filter: () => null,
    // width: 250,
  },

  {
    // width: 100,
    Header: <label>Email</label>,
    accessor: "email",
  },
  {
    // width: 100,
    Header: <label>Contact Number</label>,
    accessor: "mobile_number",
  },
  {
    // width: 100,
    Header: <label>Last Login</label>,
    accessor: "last_login",
    Cell: ({ value }) =>   moment(value).format("Do MMM, yy | h : mm A ")
  },
];

export default UserColumns;
