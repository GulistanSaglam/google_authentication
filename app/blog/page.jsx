import Link from 'next/link'
// import { fetchBlog } from '@/utils/request'

// MOVE TO THE UTILS FOLDER
// async function fetchBlog() {
//    try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blog`);
//     if(!res.ok){
//       throw new Error('Failde to fetch data')
//     }
//     return res.json();
//    } catch (error) {
//     console.log(error);
//    }
// }

const BlogPage = async() => {
  // const blog = await fetchBlog();
  return (
    <div>
    <h1 className='text-3xl'>Blogs</h1>
    <Link href="/">Go Home</Link>
    </div> 
  )
}

export default BlogPage