import { useQueryClient } from "react-query";
import { useParams } from "react-router"
import { Repository } from "./Repos";

export function Repo(){

  const params = useParams()
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient()

  async function handleChangeRepositoryDescription() {
    const previusRepos = queryClient.getQueryData<Repository[]>('')

    if (previusRepos) {
      const nextRepos = previusRepos.map(repo => {
        if (repo.full_name === currentRepository) {
           return { ...repo, description: 'testando' }
        } else {
          return repo;
        }
      })
      queryClient.setQueryData('repos', nextRepos)
    }
   // await queryClient.invalidateQueries(['repos'])

   
  }

  return(
    <div>
     
      <h1>
        {currentRepository}
      </h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar Descrição</button>
    </div>
    
  )
}

function nextRepos(arg0: string, nextRepos: any) {
  throw new Error("Function not implemented.");
}
