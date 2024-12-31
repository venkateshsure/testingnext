// page.tsx


//* API ROUTE HANDLERS *//

export default async function CommentsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
  
    return (
      <div>
        <h1>Comments</h1>
        <ul>
          {data.map((todo: { id: number; title: string }) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  