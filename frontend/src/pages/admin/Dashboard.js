/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "../../api/axiosGO";
import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { AdminCard } from "../../components/cards/AdminCard";

const API_URL = "/admin/user";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);

  const token = localStorage.getItem("token");

  const handleLoggedInUser = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess(true);
      setUser(response?.data);

      const email = response?.data?.data?.email;
      localStorage.setItem("email", email);
      //
    } catch (error) {
      alert("Unauthorized. Please login as admin!");
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoggedInUser();
  }, []);

  return (
    <BaseLayout bgColor="gray.300">
      <AdminCard title="Dashboard">
        <Heading as="h3" fontSize="2xl" pb={5}>
          Check User
        </Heading>

        {success ? (
          <UnorderedList display="table">
            <ListItem>Username: {user.data.username}</ListItem>
            <ListItem>Email: {user.data.email}</ListItem>
            <ListItem>Role: {user.data.role}</ListItem>
          </UnorderedList>
        ) : (
          <Text>No User Found</Text>
        )}
      </AdminCard>
    </BaseLayout>
  );
}