import React from 'react';
import Card from './Card';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='bg-teal-600 flex justify-around items-center'>
            <img className="h-28" src={logo} alt="store"></img>

            <div className="flex w-40 justify-between items-center text-lg text-white ">
                <Link to='/' className='hover:border-b-white-700  hover:border-b-2 active:border-b-2'>Home</Link>
                <Link to='/blogs' className='hover:border-b-white-700  hover:border-b-2 active:border-b-2'>Blogs</Link>
            </div>
        </div>
    )
}

export default Products
