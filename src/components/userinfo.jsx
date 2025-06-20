import { NavLink, Outlet } from "react-router-dom";
const users = [
  { id: 1, name: "Raju" },
  { id: 2, name: "Harish" },
  { id: 3, name: "Ishan" },
  { id: 4, name: "Rajesh" },
  { id: 5, name: "Ishan" },
];

export default function UserInfo() {
  return (
    <>
      <div className="userslist">
        {users.map((user) => (
          <div key={user.id} id={user.id}>
            <NavLink id={user.id} to={"/users/" + user.id}>
              {user.name}
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}
