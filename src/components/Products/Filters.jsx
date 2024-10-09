


import { Form, useLoaderData } from 'react-router-dom';
import FormInput from '../../InputFields/FormInput';
import FormSelect from '../../InputFields/FormSelect';
import { useRef } from 'react';

const Filters = () => {
    const { products, params, categories, brands } = useLoaderData();

    // Add "all" as the default option for category and brand selection
    const categoryOptions = ['all', ...categories];
    const brandOptions = ['all', ...brands];

    // Use a ref to access the form
    const formRef = useRef(null);

    // Reset form fields
    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <Form 
            className="bg-gray-300 rounded-md px-8 py-4 gap-x-4 gap-y-8  mt-1"
            ref={formRef} // Attach the ref to the form
        >
            <div className=''>
                <div className='flex flex-row justify-around items-center'>
                    <FormInput type="Search" label="Search Products" name="search" size="input-sm" />

                    {/* Brand Selection */}
                    <FormSelect label="Select Brand" name="brand" list={brandOptions} size="select-sm" />

                    {/* Category Selection */}
                    <FormSelect label="Select Category" name="category" list={categoryOptions} size="select-sm" />
                </div>
                <div className='flex justify-center mt-10 gap-10'>
                    <button type="submit" className="btn btn-primary btn-sm">Search</button>
                    <button type="button" onClick={handleReset} className="btn btn-secondary btn-sm">Reset</button>
                </div>
            </div>

            
        </Form>
    );
};

export default Filters;
