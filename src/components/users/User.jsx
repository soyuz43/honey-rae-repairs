// src/components/users/User.jsx
import "./Users.css"
export const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <div className="user-info"></div>
        <div>Name: {user.fullName}</div>
      </div>
      <div>
        <div className="user-info"></div>
        <div>Email: {user.email}</div>
      </div>
    </div>
  );
};
