
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const ProductListTable = () => {
    const { products } = useLoaderData()
    // console.log(products);
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-center border'>
       
        <th className='border'>Image and Brand</th>
        <th className='border'>Title</th>
        <th className='border' >Actions</th>
        
      </tr>
    </thead>
                    {
                       
                        products.map(product => <TableRow key={product.id} data={product}></TableRow>)
                    }
    
  </table>
</div>
        </div>
    );
};

export default ProductListTable;