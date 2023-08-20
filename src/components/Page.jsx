import React from 'react'

const Page = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div >
            {pages.map((page, index) => {
                return (
                    <button key={index} onClick={() => setCurrentPage(page)} 
                    className='border border-1 bg-teal-600  px-3 py-1 mx-2 rounded-2xl text-white bg-red-700 hover:bg-teal-400'>
                        {page}
                    </button>
                )
            })
            }
        </div>
    )
}

export default Page

