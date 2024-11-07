import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const CreateDemo = () => {

  return (
      <main className="w-screen h-screen flex flex-col bg-slate-600">

        <Header/>

      <section className="w-full h-full flex-1 bg-green-300">
        <h1 className="text-center text-white">Main Content</h1>
      </section>

       <Footer/>
      </main>
  )
}

export default CreateDemo