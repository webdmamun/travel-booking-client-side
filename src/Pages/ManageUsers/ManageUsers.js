import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "./../../Hooks/useAuth";

const ManageUsers = () => {
  const { user } = useAuth();
  return (
    <div>
      <Container>
        <img src={user.photoURL} alt="" />
        <p>User Name: {user.displayName}</p>
        <p>User Name: {user.email}</p>
      </Container>
    </div>
  );
};

export default ManageUsers;
