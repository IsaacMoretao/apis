import '../globals.css'
import { useFatch } from "./useFatch";

type Repository = {
  full_name: string;
  description: string;
}

export function Hook() {
  const { data: repositories, isFetching } =
  useFatch<Repository[]>('https://api.github.com/users/IsaacMoretao/repos')

  return (
    <body>
      <div className='div'>
        <h1>Hello Word</h1>
      </div>
      <ul>
        { isFetching && <p>Carregando</p> }
        {repositories?.map(repo => {
          
          
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
    </body>
  )
}
