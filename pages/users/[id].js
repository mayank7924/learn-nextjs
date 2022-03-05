import React from "react";
import { useRouter } from "next/router";
import { fetchUsers, fetchUserById } from "../../src/db";

export default function User(props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      Details page for userId {id}
      {Object.keys(props.user).map((key) => (
        <li key={key}>
          {key.toUpperCase()}: {props.user[key]}
        </li>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetchUsers();
  // Get the paths we want to pre-render based on posts
  console.log("users fetched, total users:", response.length);
  const paths = response.map((user) => ({
    params: { id: user.id.toString() },
  }))

  return { paths, fallback: "blocking" }
}

export async function getStaticProps({ params }) {
  const user = await fetchUserById(params.id);
  return {
    props: {
      user,
    },
    revalidate: 20, // In seconds
  };
}
