import React from 'react'

export default function Static(props) {
  return (
    <div>
      This will be generated as a static page
      {props.users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://reqres.in/api/users?page=1')
  const result = await response.json()
  console.log("api call made successfully")
  return {
    props: {
      users: result.data,
    },
  }

}