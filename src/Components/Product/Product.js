import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';
import StarRateIcon from '@mui/icons-material/StarRate';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log(basket);

    const addToBasket=()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return ( 
        <div className='product'>
             <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><StarRateIcon/></p>       
                    ))}
                    
                </div>
             </div>

             <img 
                src={image}
                alt={title}/>
             
             <button type="button" onClick={addToBasket}>ADD TO CART</button>       
        </div>
     );
}

export default Product;