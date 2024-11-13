'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'

const GetAQuote = () => {

  type QuoteFormData = {
    fullName: string;
    email: string;
    phone_number: string;
    company: string;
    web_url: string;
    services: string[];
    msg: string;
    project: string;
    budget: string;
  }

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>()

  const onSubmit = async (FormData: QuoteFormData) => {
    try {
      setLoading(true)
      setError(null)

      // Convert budget to number
      const budget = parseInt(FormData.budget, 10)

      // Combine services array into a string
      const services = Object.keys(FormData.services).filter(service => FormData.services[service])

      const formData = { ...FormData, budget, services }

      const response = await fetch(`/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        router.push('/')
      } else {
        const responseData = await response.json() 
        setError(responseData.error || 'Failed to send quote form')
      }
    } catch (error) {
      console.log('Error sending quote form to database', error)
      setError('An error occurred while sending the quote form')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-100 rounded-xl py-6 px-6">
      <form onSubmit={handleSubmit(onSubmit)} method='POST' className='space-y-8'>
        <h1 className="text-3xl ">Contact Information</h1>
        {error && <div className="text-red-500">{error}</div>}
        <div className='grid w-full  items-center gap-1.5'>
          <label className='text-sm' htmlFor="name">Name</label>
          <input
            {...register('fullName', { required: true })}
            type="text" id='name' placeholder='Your Name / Surname'
            className='py-2 border rounded-md md:w-[567px] w-full form_name' />
        </div>
        <div className='flex md:space-x-4 space-x-2 '>
          <div className='flex flex-col space-y-2 w-[50%]'>
            <label className='text-sm' htmlFor="email">Email</label>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i, })}
              type="email" id='email' placeholder='Your Email' className='py-2 border rounded-md  form_name' />
          </div>
          <div className='flex flex-col space-y-2 w-[50%]'>
            <label className='text-sm' htmlFor="phone_number">Phone Number</label>
            <input
              {...register('phone_number', { required: true })}
              type="text" id='phone_number' placeholder='Your Mobile Number' className='py-2 border rounded-md  form_name' />
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-sm' htmlFor="company">Company/Organization</label>
          <input {...register('company')}
            type="text" id='company' placeholder='Your Company / Organization' className='py-2 border rounded-md md:w-[567px] w-full form_name' />
        </div>
        <h1 className='text-2xl py-3'>Project Information</h1>
        <div className='flex flex-col space-y-2'>
          <label className='text-sm' htmlFor="web">Website (if applicable)</label>
          <input
            {...register('web_url')}
            type="text"
            id='web' placeholder='https://example.com' className='py-2 border rounded-md md:w-[567px] w-full form_name' />
        </div>
        <div className=''>
          <label className='text-sm font-bold'>Services You Require</label>
          <div className='flex flex-col'>
            <span>
              <input className='mr-3' {...register('services')} type="checkbox" name="custom" id="custom" />
              <label htmlFor="custom">
                Custom Development
              </label>
            </span>
            <span>
              <input className='mr-3' {...register('services')} type="checkbox" name="digital" id="digital" />
              <label htmlFor="digital">
                Digital Marketing
              </label>
            </span>
            <span>
              <input className='mr-3'  {...register('services')} type="checkbox" name="it" id="it" />
              <label htmlFor="it">
                IT Consultancy
              </label>
            </span>
            <span>
              <input className='mr-3'  {...register('services')} type="checkbox" name="design" id="design" />
              <label htmlFor="design">
                Web Design & Development
              </label>
            </span>
            <span>
              <input className='mr-3'  {...register('services')} type="checkbox" name="devel" id="devel" />
              <label htmlFor="devel">
                WordPress Development
              </label>
            </span>
            <span>
              <input className='mr-3'  {...register('services')} type="checkbox" name="ecom" id="ecom" />
              <label htmlFor="ecom">
                Shopify & Ecommerce
              </label>
            </span>
            <span>
              <input className='mr-3'  {...register('services')} type="checkbox" name="ui" id="ui" />
              <label htmlFor="ui">
                UI/UX Design
              </label>
            </span>
            <span>
              <input className='mr-3'  {...register('services')} type="checkbox" name="platforms" id="platforms" />
              <label htmlFor="platforms">
                Ecommerce Platforms (AMZN,DRZ,EBAY,etc)
              </label>
            </span>
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-sm font-bold' htmlFor="overview">Quick overview of your project</label>
          <textarea aria-label='msg' {...register('msg')} id='overview' className='min-h-[80px] form_name1 md:w-[567px] border rounded-md w-full' placeholder='Write your message here' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-sm font-bold' htmlFor="budget">Do you have any budget in mind?</label>
          <input {...register('budget')} type='text' id='budget' placeholder='example: 100$' className='py-2 border rounded-md md:w-[567px] w-full form_name' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-sm font-bold' htmlFor="project">How soon are you ready to start?</label>
          <select {...register('project')} typeof='project' name="project" id="project" className='w-[180px] border duration-100 py-2 rounded-md '>
            <optgroup label='Choose'>Choose</optgroup>
            <option value="select" selected disabled hidden>Please Select</option>
            <option value="immediately">Immediately</option>
            <option value="1week">1 - 2 Weeks</option>
            <option value="3week">3 - 4 Weeks</option>
            <option value="month">1 Month - 3 Months</option>
            <option value="6month">Within 6 Months</option>
          </select>
        </div>
        <div className=''>
          {loading ? (
            <div className='flex items-center justify-center rounded-md text-white md:w-[567px] py-2 w-full bg-fuchsia-700 hover:bg-gray-800 duration-300 text-xl'>
              <FaSpinner className='animate-spin mr-2' />{" "}
              Submitting...
            </div>
          ) : (
            <>
              <button className='rounded-md text-white md:w-[567px] py-2 w-full bg-fuchsia-700 hover:bg-gray-800 duration-300 text-xl' type='submit' disabled={loading}>Submit</button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default GetAQuote
