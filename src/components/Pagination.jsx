import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button
} from "@material-tailwind/react";
import Page from './Page';

const Pagination = () => {
  const loadedMeals = [];

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cards?.slice(firstPostIndex, lastPostIndex)

  const API_URL = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {

    const fetchMeals = async () => {

      // const response = await fetch("https://newreact-http-595e1-default-rtdb.firebaseio.com/items.json");

      const response = await fetch(API_URL)
      // console.log(response);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      };

      const responseData = await response.json();

      console.log(responseData)


      // for (const key in responseData) {
      //   loadedMeals.push({
      //     id: key,
      //     description: responseData[key].description,
      //     image: responseData[key].image,
      //     price: responseData[key].price,
      //   })
      // };

      // console.log(loadedMeals);
      setCards(responseData);
      // console.log(data);

    };
    // console.log(loadedMeals)
    fetchMeals().catch((error) => console.log('console error', error))

  }, []);


  console.log(currentPage)

  return (
    <div className='relative'>
      <div className="flex flex-wrap mb-48">
        {currentPosts?.map((card) => (
          <Card className="m-10 w-96">
            <CardHeader color="blue-gray" className="relative w-full h-70">
              {/* <img
                src={card.image}
                alt="card-image"
              /> */}

              <h1>{card.title}</h1>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Abiye Elbise
              </Typography>
              <Typography>
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Sifariş et</Button>
            </CardFooter>
          </Card>))}
      </div>  

      <div className='absolute bottom-[-100px] right-[40%]' >
        <Page
          totalPosts={cards.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  );
};

export default Pagination;
