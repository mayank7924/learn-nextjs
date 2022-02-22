import React from "react";

export default function Static(props) {
  return (
    <div>
      User Details:
      {Object.keys(props.user).map((key) => (
        <li key={key}>{key.toUpperCase()}: {props.user[key]}</li>
      ))}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://reqres.in/api/users/${params.id}`);
  const result = await response.json();
  console.log("api call made successfully");
  return {
    props: {
      user: result.data,
    },
  };
}
