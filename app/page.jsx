

const HomePage = () => {

  //Testing MongoDB connection
  // await connectDB();
  // console.log(process.env.MONGODB_URI);
  return (
    <div className="flex flex-col my-16 px-4 items-center mx-auto gap-2">
    <h1 className='text-2xl'>Welcome to the Google-Auth Login Application.</h1>
    <p>This application built with Nextjs, Next-Auth, MongoDB and Moongose.</p>
    <p>Lets login with Google after you logged in, you will see pink success message and your profile picture in the Navbar.</p>
    </div>
  )
}

export default HomePage