import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import { customFetch } from '../utils';
import FeaturedProducts from '../components/FeaturedProducts';






const url =  '/products'

 export const loader = async () => {
    const response = await customFetch(url);
    const products = response?.data?.data;
    // console.log(products);
    return {products};
}

const Landing = () => {
   
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Landing;