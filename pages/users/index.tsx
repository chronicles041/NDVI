import { useState } from "react";
import Pagination from "../../components/Pagination";
import PageLayout from "../../components/Pagelayout";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons from react-icons

type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

const Users = () => {
  // Example user data
  const [users] = useState<User[]>([
    { id: 1, name: "Admin User", email: "admin@gmail.com", role: "admin" },
    { id: 2, name: "Suman Malla", email: "sumanmalla041@outlook.com", role: "admin" },
    { id: 3, name: "Bishesh Upadhaya", email: "bishesh011.smith@gmail.com", role: "admin" },
    { id: 4, name: "Sarthak Porkhrel", email: "Sarthak.pokhrel32@gmail.com", role: "admin" },
    { id: 5, name: "Mary Brown", email: "mary.brown@gmail.com", role: "user" },
    { id: 6, name: "Sara Black", email: "sara.black@gmail.com", role: "user" },
    { id: 7, name: "Lily Green", email: "lily.green@gmail.com", role: "user" },
    { id: 8, name: "Tom Blue", email: "tom.blue@gmail.com", role: "user" },
    { id: 9, name: "Chris Red", email: "chris.red@gmail.com", role: "user" },
    { id: 10, name: "Paul Yellow", email: "paul.yellow@gmail.com", role: "user" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Number of users to display per page

  // Calculate the number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Get the users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Edit and Delete handler functions (can be customized)
  const handleEdit = (id: number) => {
    console.log("Editing user with ID:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Deleting user with ID:", id);
  };

  return (
    <PageLayout>
      <div className="p-8 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-green-700">Web Application User List</h1>

        <table className="min-w-full bg-white border-2 border-green-300 shadow-md">
          <thead>
            <tr className="bg-gray-300/80 hover:bg-blue-300/40 border-b-2 border-green-300">
              <th className="p-5 text-left text-md font-bold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="p-5 text-left text-md font-bold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="p-5 text-left text-md font-bold text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th className="p-5 text-left text-md font-bold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr 
                key={user.id}
                className={`${
                  user.role === "admin" ? "bg-blue-50" : ""
                } hover:bg-gray-200 hover:cursor-pointer`} // Add hover effect on row
              >
                <td className="px-6 py-3 whitespace-nowrap">
                  <div className="text-md font-normal text-gray-700">{user.name}</div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div className="text-md font-normal text-gray-700">{user.email}</div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span
                    className={
                      user.role === "admin"
                        ? "px-3 py-2 inline-flex text-md leading-5 font-normal rounded-full bg-red-300 text-green-800"
                        : "px-3 py-2 inline-flex text-md leading-5 font-normal rounded-full bg-gray-300 text-gray-800"
                    }
                  >
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {user.role === "user" && (
                    <div className="flex space-x-4">
                      {/* Edit Icon */}
                      <button onClick={() => handleEdit(user.id)} className=" text-2xl p-2 text-blue-600 hover:text-blue-900">
                        <FaEdit />
                      </button>
                      {/* Delete Icon */}
                      <button onClick={() => handleDelete(user.id)} className="text-2xl p-2 text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </div>
                  )}
                  {
                    user.role === "admin" &&(
                      <div><span className="bg-green-600 px-3 py-2 rounded-full text-white cursor-not-allowed">No action avilable</span></div>
                    )
                  }
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
      </div>
    </PageLayout>
  );
};

export default Users;
