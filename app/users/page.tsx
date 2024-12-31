import React from 'react'

export const metadata = {
  title:"Users page"  
}

interface User{
  id: number,
  name:string
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data : User[] = await response.json();
  return (
    <div>
        <h1>user</h1>
        <ul>
          {
            data.map(each=>(
              <li key={each.id}>{each.name}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default UsersPage
