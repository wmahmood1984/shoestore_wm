import React from 'react'
import { useParams } from 'react-router-dom';
export const Products = () => {
    const {productid} = useParams;
    return (
        <div>
            Hello from {productid}
        </div>
    )
}
