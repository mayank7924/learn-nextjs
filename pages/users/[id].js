import React from "react";
import { useRouter } from "next/router";

export default function User(props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      Details for userId {id}
      {Object.keys(props.user).map((key) => (
        <li key={key}>
          {key.toUpperCase()}: {props.user[key]}
        </li>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`https://reqres.in/api/users`);
  const result = await response.json();
  console.log("api call made successfully");

  // Get the paths we want to pre-render based on posts
  const paths = result.data.map((user) => ({
    params: { id: user.id.toString() },
  }))
  console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://reqres.in/api/users/${params.id}`);
  const result = await response.json();
  console.log("api call made successfully");
  return {
    props: {
      user: result.data,
    },
  };
}
