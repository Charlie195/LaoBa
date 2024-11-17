import React from 'react'
import ExampleClient from '../components/ExampleClient/ExampleClient'

interface User {
  id: number;
  name: string
}

const example = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 10 } }    // caching and refreshing every 10 seconds
  ) 
  const users : User[] = await res.json()

  return (
    <div>
      <div>example</div>
      <ExampleClient />
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default example