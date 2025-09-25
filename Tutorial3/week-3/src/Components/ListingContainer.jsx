import Listing from "./Listing"; //Import single listing comp
export default function ListingContainer({ item }) {
    // let listings = []
    // item.forEach(item => {
    //     listings.push(
    //     <Listing 
    //         country = {item.country}
    //         pic = {item.pic}
    //         location = {item.location}
    //         rating = {item.rating}
    //         price = {item.price}
    //     />)
    // });
    // return <div className="listings-container">
    //     {listings}
    // </div>; //Return all new listings

    //MAP!
    return<div className='listings-container'>
        {item.map((item) =>(
            <Listing
            key={item.id} {...item}
            />
        ))}
    </div>
}