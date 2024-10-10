
// import FormInput from '../InputFields/FormInput';
// import { Form } from 'react-router-dom';
// import Descriptioninput from '../InputFields/Descriptioninput';
// import Swal from 'sweetalert2';


// const AddProduct = () => {
//     const handleClick = () => {
//         Swal.fire({
//             title: "Your Product has been added successfully!!",
//             timer: 2000, // Close after 2 seconds (2000 ms)
//             showConfirmButton: false,
//             icon: "success"
//         });
//     };
//     return (
//         <div className='mb-10 border-4 border-blue-500 p-6 rounded-xl'>
//             <h1 className='border-b-4 text-center text-4xl'>       Add New Product Here </h1>
            
//             <Form >
//                 <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-6 gap-4'>
//                     <FormInput label='Product title'></FormInput>
//                     <FormInput label='Category'></FormInput>
//                     <FormInput label='Brand'></FormInput>
//                     <FormInput label='Price'></FormInput>
//                     <FormInput label='Discount Percentage:'></FormInput>
//                     <FormInput label='Stock'></FormInput>
//                     <FormInput label='Tags'></FormInput>
//                     <FormInput label='SKU'></FormInput>
//                     <FormInput label='Weight'></FormInput>
//                     <FormInput label='Return Policy'></FormInput>
//                     <FormInput label='Minimum Order Quantity'></FormInput>
//                     <FormInput label='Images URL'></FormInput>
//                     <FormInput label='Thumbnail URL'></FormInput>
//                     <FormInput label='Product title'></FormInput>
//                 </div>
//                 <div className='flex flow-row mt-6 gap-16'>
//                     <h1 className=' font-bold'> Product Dimensions</h1>
//                     <div>
//                         <FormInput label='Width'></FormInput>
//                         <FormInput label='Height'></FormInput>
//                         <FormInput label='Depth'></FormInput>
//                     </div>
//                 </div>
//                 <div>
//                      <Descriptioninput label='Product Description'></Descriptioninput>
//                 </div>

//                 <div onClick={handleClick} className='flex items-center justify-center mt-8'>
//                     <button className='btn btn-accent'>Add Product</button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default AddProduct;


import React, { useState } from 'react';
import FormInput from '../InputFields/FormInput';
import { Form } from 'react-router-dom';
import Descriptioninput from '../InputFields/Descriptioninput';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const initialFormState = {
        title: '',
        category: '',
        brand: '',
        price: '',
        discount: '',
        stock: '',
        tags: '',
        sku: '',
        weight: '',
        returnPolicy: '',
        minOrder: '',
        imagesUrl: '',
        thumbnailUrl: '',
        width: '',
        height: '',
        depth: '',
        description: ''
    };

    const [formValues, setFormValues] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleClick = () => {
        Swal.fire({
            title: "Your Product has been added successfully!!",
            timer: 2000, // Close after 2 seconds (2000 ms)
            showConfirmButton: false,
            icon: "success"
        });

        // Reset the form
        setFormValues(initialFormState);
    };

    return (
        <div className='mb-10 border-4 border-blue-500 p-6 rounded-xl'>
            <h1 className='border-b-4 text-center text-4xl'>Add New Product Here</h1>

            <Form>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-6 gap-4'>
                    <FormInput label='Product title' name='title' type='text' value={formValues.title} onChange={handleInputChange} />
                    <FormInput label='Category' name='category' type='text' value={formValues.category} onChange={handleInputChange} />
                    <FormInput label='Brand' name='brand' type='text' value={formValues.brand} onChange={handleInputChange} />
                    <FormInput label='Price' name='price' type='text' value={formValues.price} onChange={handleInputChange} />
                    <FormInput label='Discount Percentage:' name='discount' type='text' value={formValues.discount} onChange={handleInputChange} />
                    <FormInput label='Stock' name='stock' type='text' value={formValues.stock} onChange={handleInputChange} />
                    <FormInput label='Tags' name='tags' type='text' value={formValues.tags} onChange={handleInputChange} />
                    <FormInput label='SKU' name='sku' type='text' value={formValues.sku} onChange={handleInputChange} />
                    <FormInput label='Weight' name='weight' type='text' value={formValues.weight} onChange={handleInputChange} />
                    <FormInput label='Return Policy' name='returnPolicy' type='text' value={formValues.returnPolicy} onChange={handleInputChange} />
                    <FormInput label='Minimum Order Quantity' name='minOrder' type='text' value={formValues.minOrder} onChange={handleInputChange} />
                    <FormInput label='Images URL' name='imagesUrl' type='text' value={formValues.imagesUrl} onChange={handleInputChange} />
                    <FormInput label='Thumbnail URL' name='thumbnailUrl' type='text' value={formValues.thumbnailUrl} onChange={handleInputChange} />
                </div>
                <div className='flex flow-row mt-6 gap-16'>
                    <h1 className='font-bold'>Product Dimensions</h1>
                    <div>
                        <FormInput label='Width' name='width' type='text' value={formValues.width} onChange={handleInputChange} />
                        <FormInput label='Height' name='height' type='text' value={formValues.height} onChange={handleInputChange} />
                        <FormInput label='Depth' name='depth' type='text' value={formValues.depth} onChange={handleInputChange} />
                    </div>
                </div>
                <div>
                    <Descriptioninput label='Product Description' name='description' value={formValues.description} onChange={handleInputChange} />
                </div>

                <div onClick={handleClick} className='flex items-center justify-center mt-8'>
                    <button type='button' className='btn btn-accent'>Add Product</button>
                </div>
            </Form>
        </div>
    );
};

export default AddProduct;
