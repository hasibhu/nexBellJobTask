import React from 'react';
import FormInput from '../InputFields/FormInput';
import { Form } from 'react-router-dom';
import Descriptioninput from '../InputFields/Descriptioninput';
import Swal from 'sweetalert2';


const AddProduct = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Your Product has been added successfully!!",
            timer: 2000, // Close after 2 seconds (2000 ms)
            showConfirmButton: false,
            icon: "success"
        });
    };
    return (
        <div className='mb-10 border-4 border-blue-500 p-6 rounded-xl'>
            <h1 className='border-b-4 text-center text-4xl'>       Add New Product Here </h1>
            
            <Form >
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-6 gap-4'>
                    <FormInput label='Product title'></FormInput>
                    <FormInput label='Category'></FormInput>
                    <FormInput label='Brand'></FormInput>
                    <FormInput label='Price'></FormInput>
                    <FormInput label='Discount Percentage:'></FormInput>
                    <FormInput label='Stock'></FormInput>
                    <FormInput label='Tags'></FormInput>
                    <FormInput label='SKU'></FormInput>
                    <FormInput label='Weight'></FormInput>
                    <FormInput label='Return Policy'></FormInput>
                    <FormInput label='Minimum Order Quantity'></FormInput>
                    <FormInput label='Images URL'></FormInput>
                    <FormInput label='Thumbnail URL'></FormInput>
                    <FormInput label='Product title'></FormInput>
                </div>
                <div className='flex flow-row mt-6 gap-16'>
                    <h1 className=' font-bold'> Product Dimensions</h1>
                    <div>
                        <FormInput label='Width'></FormInput>
                        <FormInput label='Height'></FormInput>
                        <FormInput label='Depth'></FormInput>
                    </div>
                </div>
                <div>
                     <Descriptioninput label='Product Description'></Descriptioninput>
                </div>

                <div onClick={handleClick} className='flex items-center justify-center mt-8'>
                    <button className='btn btn-accent'>Add Product</button>
                </div>
            </Form>
        </div>
    );
};

export default AddProduct;