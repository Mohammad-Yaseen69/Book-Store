import { useFetch } from "./utils/useFetch"

function App() {
  const { data, error, loading } = useFetch('get', 'books')

  console.log(
    data,error, loading
  )

  return (
    <div>

    </div>
  )
}

export default App
