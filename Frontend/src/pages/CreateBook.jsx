import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Back from '../assets/back.png'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../utils/apiRequest'

const CreateBook = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()


  const submit = async (formData) => {

    console.log(formData)
    const data = await postRequest('/books', formData)

    console.log(data)

    reset()
    navigate('/')
  }



  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='absolute top-6 left-6'>
        <img src={Back} onClick={() => navigate(-1)} className='w-10 cursor-pointer' alt='' />
      </div>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit(submit)}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input required name='title' id='title' type='text' {...register('title')} />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author Name</label>
            <input required name='author' id='author' type='text' {...register('author')} />
          </div>
          <div className='form-group'>
            <label htmlFor='publishYear'>Published Year</label>
            <input required name='publishYear' id='publishYear' type='number' {...register('publishYear')} />
          </div>
          <div className='form-group'>
            <label htmlFor='textarea'>Summary</label>
            <textarea required cols='50' rows='10' id='textarea' name='textarea' {...register('summery')}></textarea>
          </div>
          <button type='submit' className='form-submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBook
