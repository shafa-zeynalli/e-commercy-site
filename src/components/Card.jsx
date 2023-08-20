import React, { Fragment, useEffect, useMemo, useState } from 'react';
// import axios from 'axios';

// const initialCards = [
//   {
//     id: 1,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXxw0NgXAPY4V6WWymb3EmktAob34xpELhA&usqp=CAU',
//     description: 'Description 1',
//     price: '$10',
//   },
//   {
//     id: 2,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5NLSpKJlC1rqobGxt4a2EADtSsdj4xl3yw&usqp=CAU',
//     description: 'Description 2',
//     price: '$20',
//   },
//   {
//     id: 3,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGY0rfDawfy-esrfPKkdH9mZr-1Oe2f00DWQ&usqp=CAU',
//     description: 'Description 1',
//     price: '$10',
//   },
//   {
//     id: 4,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqviHk6n3OFGeg72hyH7Z40wJ6j06rZv-pw&usqp=CAU',
//     description: 'Description 2',
//     price: '$20',
//   },
//   {
//     id: 5,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8gxHhvJ8wgeBxDRkwcPTOmTWhGHIz6zYzA&usqp=CAU',
//     description: 'Description 1',
//     price: '$10',
//   },
//   {
//     id: 6,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtBpIcIHgjOCCY6ffsF7dfWCfNu1EIYgBpg&usqp=CAU',
//     description: 'Description 2',
//     price: '$20',
//   },
//   {
//     id: 7,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ3db2EdDw-2LdMwL0p-qatNz78N1p9T1T40-dkInB9bzzs36s36sDLgaswlkWHpF1Y0&usqp=CAU',
//     description: 'Description 1',
//     price: '$10',
//   },
//   {
//     id: 8,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11UrCUjVN5qL6dDF_4PfcRMEp9zuXvIALOQ&usqp=CAU',
//     description: 'Description 2',
//     price: '$20',
//   },

// ];
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button
} from "@material-tailwind/react";

const CardMaterial = () => {
  const loadedMeals = [];

  const [cards, setCards] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);


  useEffect(() => {

    const fetchMeals =  async () => {

      const response = await fetch("https://newreact-http-595e1-default-rtdb.firebaseio.com/products.json");

      // console.log(response);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      };

      const responseData = await response.json();

      // console.log(responseData)

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          description: responseData[key].description,
          image: responseData[key].image,
          price: responseData[key].price,
        })
      };

      console.log(loadedMeals);
      setCards(loadedMeals);
      // console.log(data);

    };

    console.log(loadedMeals)
    fetchMeals().catch((error) => console.log('console error', error))

  }, [showAllCards]);

  const handleReadMore = () => {
    setShowAllCards(true);
  };

  const handleShowLess = () => {
    setShowAllCards(false);
  };

  console.log(cards)

  return (
    <div className=' relative'>
    <div className='flex flex-wrap relative'>
      {cards.slice(0, showAllCards ? cards.length : 4).map((card) => (
        <Card key={card.id} className="m-10 w-96">
        <CardHeader color="blue-gray" className="relative w-full h-70">
          <img
            src={card.image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Abiye Elbise
          </Typography>
          <Typography>
           {card.description}
          </Typography>
          <Typography color="green">
           {card.price}$
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Sifariş et</Button>
        </CardFooter>
      </Card>))}

     
    </div>
    {!showAllCards ? (
         
        <button onClick={handleReadMore}
        className='absolute bottom-9 right-9 border border-1 bg-teal-600  px-6 py-3 outline outline-2 outline-teal-600 outline-offset-2 mx-2 rounded-2xl text-white bg-red-700 hover:bg-teal-400'>Read more</button> 
      ) : (
         <button className='absolute bottom-9 right-9 border border-1 bg-teal-600  px-6 py-3 outline outline-2 outline-teal-600 outline-offset-2 mx-2 rounded-2xl text-white bg-red-700 hover:bg-teal-400' onClick={handleShowLess}>Show less</button> 
      )}

    </div>
  );
};

export default CardMaterial;
