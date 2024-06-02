import React from 'react'
import { useFetch } from '../utils/useFetch'
import { useNavigate } from 'react-router-dom'
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import { deleteRequest } from '../utils/apiRequest'



const Home = () => {
  const { data, error, loading } = useFetch('get', 'books')
  const navigate = useNavigate()


  const handleDelete = async (id) => {
    try {
      console.log(id)
      const res = await deleteRequest(`books/${id}`)
      console.log(res)
      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full p-14 h-auto'>
      <div className='flex w-full flex-col items-start'>
        <div className='flex w-full justify-between items-center'>
          <h1 className='text-black font-extrabold font-serif text-5xl'>Books</h1>

          <button onClick={() => navigate('create-book')} className='px-5 rounded-xl font-bold py-3 bg-blue-500 text-white'>
            Create Book
          </button>
        </div>

        {loading ? <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='loader'></div>
        </div> : (
          <div className='flex w-full justify-start flex-wrap mt-10'>
            {data?.books?.map((book, index) => (
              <div key={index} className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='bg-white rounded-lg shadow-lg p-7 flex flex-col justify-between h-full min-h-[350px]'>
                  <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold mb-5'>{book.title}</h2>

                    <div className='flex  gap-3'>
                      <RiEdit2Line cursor='pointer' size={25} color='green' />
                      <RiDeleteBinLine cursor='pointer' onClick={() => handleDelete(book._id)} size={25} color='red' />

                    </div>
                  </div>
                  <p className='text-gray-900 break-words text-lg font-bold mb-4'>{book.summery.trim()}{book.summery?.slice(-1) !== "." && "."}</p>
                  <div className='flex w-full justify-between'>
                    <p className='text-gray-600 font-medium mb-4'>{book.author}</p>
                    <p className='text-gray-600 font-medium mb-4'>{book.publishYear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Home