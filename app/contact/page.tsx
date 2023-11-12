import React from 'react'

export default function Contact() {
    const bannerStyle = {
        backgroundImage: "url('/img/contact/Banner.png",
        backgroundSize: 'cover',
    }
  return (
    <div>
        <div className='w-full h-[700px] flex justify-center items-center flex-col text-white '  style={bannerStyle}>
            <h1 className='text-white text-[55px] font-bold'>Contact Us</h1>
        </div>
        <div className="container mx-auto pt-16">
            <div className="lg:flex">
                {/* INFO */}
                <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none bg-yellow">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                        <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                        <div className='h-full flex items-center justify-between flex-col'>
                            <div className='w-[340px] h-[220px] bg-white rounded-[50px] border-2 border-black flex justify-center items-center flex-col'>
                            {/* <p className='absolute text-center text-zinc-300 text-[100px] font-bold'>01</p> */}
                                <h3 className='text-center text-black text-[34px] font-bold'>Call Now</h3>
                                <div className='w-full flex items-center justify-around'>
                                    <img src='img/contact/phone.jpg' alt='phone'></img>
                                    <div className='flex flex-col items-center'>
                                        <a className='text-center text-black text-xl font-normal' href='tel: (877) 870-1883'>(877) 870-1883</a>
                                        <a className='text-center text-black text-xl font-normal' href='tel: (877) 870-1883'>(877) 870-1883</a>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='w-[340px] h-[220px] bg-white rounded-[50px] border-2 border-black flex justify-center items-center flex-col'>
                            {/* <p className='absolute text-center text-zinc-300 text-[100px] font-bold'>01</p> */}
                                <h3 className='text-center text-black text-[34px] font-bold'>Location</h3>
                                <div className='w-[90%] flex items-center justify-around'>
                                    <img src='img/contact/location.jpg' alt='phone'></img>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-center text-black text-xl font-normal'>7901 4th St N St. Petersburg, FL 33702</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[340px] h-[220px] bg-white rounded-[50px] border-2 border-black flex justify-center items-center flex-col'>
                            {/* <p className='absolute text-center text-zinc-300 text-[100px] font-bold'>01</p> */}
                                <h3 className='text-center text-black text-[34px] font-bold'>Email Now</h3>
                                <div className='w-full flex items-center justify-around'>
                                    <img src='img/contact/email.jpg' alt='phone'></img>
                                    <div className='flex flex-col items-center'>
                                        <a className='text-center text-black text-xl font-normal' href='mailto:email.info@gmail.com'>email.info@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            </div>
                    </div>
                </div>
                {/* Form */}
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br border-black border">
                    <form id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea  name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

       
    </div>
  )
}




