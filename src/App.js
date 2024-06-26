import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./Table";

function App() {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      username: "admin1",
      name: "Admin One",
      email: "admin1@example.com",
      phone: "123456789",
    },
    {
      id: 2,
      username: "admin2",
      name: "Admin Two",
      email: "admin2@example.com",
      phone: "987654321",
    },
    {
      id: 3,
      username: "admin3",
      name: "Admin Three",
      email: "admin3@example.com",
      phone: "555555555",
    },
    {
      id: 4,
      username: "admin4",
      name: "Admin Four",
      email: "admin4@example.com",
      phone: "777777777",
    },
    {
      id: 5,
      username: "admin5",
      name: "Admin Five",
      email: "admin5@example.com",
      phone: "999999999",
    },
    {
      id: 6,
      username: "admin6",
      name: "Admin Six",
      email: "admin6@example.com",
      phone: "111111111",
    },
    {
      id: 7,
      username: "admin7",
      name: "Admin Seven",
      email: "admin7@example.com",
      phone: "222222222",
    },
    {
      id: 8,
      username: "admin8",
      name: "Admin Eight",
      email: "admin8@example.com",
      phone: "333333333",
    },
    {
      id: 9,
      username: "admin9",
      name: "Admin Nine",
      email: "admin9@example.com",
      phone: "444444444",
    },
    {
      id: 10,
      username: "admin10",
      name: "Admin Ten",
      email: "admin10@example.com",
      phone: "666666666",
    },
    {
      id: 11,
      username: "admin11",
      name: "Admin Eleven",
      email: "admin11@example.com",
      phone: "888888888",
    },
    {
      id: 12,
      username: "admin12",
      name: "Admin Twelve",
      email: "admin12@example.com",
      phone: "000000000",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  // const getadmin = () => {
  // axios.get("http://abdeen_backend.test/api/all-admins").then((data) => {
  // setAdmins(data.data.data);
  // });
  // };

  useEffect(() => {
    // getadmin();

    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", "light");
  }, []);

  const hanleprintid = (id) => {
    console.log(id);
  };

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      maxWidth: "15%",
    },
    {
      name: "Full Name",
      selector: (row) => row.name,
      maxWidth: "15%",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      maxWidth: "15%",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      maxWidth: "15%",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-x-2 gap-y-1 items-center w-full flex-wrap">
          <button
            className="btn bg-redColor px-3 py-2"
            onClick={() => hanleprintid(row.id)}
          >
            test
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container m-auto py-10">
      <button
        className="btn bg-redColor px-3 py-2 my-3"
        onClick={() => {
          console.log(selectedItems);
        }}
      >
        print id
      </button>
      <Table
        Title={"this table"}
        direction={"ltr"}
        columns={columns}
        data={admins}
        checkbox={false}
        hasEditPermission={true} // Assuming you have a way to determine this
        editBtnFun={(row) => console.log("Edit", row)} // Replace with your edit function
        handleDelete={(id) => console.log("Delete", id)} // Replace with your delete function
        setSelectedItemsProp={setSelectedItems}
      />
    </div>
  );
}

export default App;
