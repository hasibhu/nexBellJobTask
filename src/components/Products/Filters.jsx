
// this one works for reset realtime 


import { Form, useLoaderData, useSearchParams } from 'react-router-dom';
import FormInput from '../../InputFields/FormInput';
import FormSelect from '../../InputFields/FormSelect';
import { useRef, useState } from 'react';

const Filters = () => {
    const { categories, brands } = useLoaderData();
    
    // Initialize search params
    const [searchParams, setSearchParams] = useSearchParams();

    // Add "all" as the default option for category and brand selection
    const categoryOptions = ['all', ...categories];
    const brandOptions = ['all', ...brands];

    // Sorting options for price with "any" as the default option
    const sortOptions = ['any', 'low-high', 'high-low'];

    // Use a ref to access the form
    const formRef = useRef(null);

    // Local state for selected sort option
    const [sort, setSort] = useState(searchParams.get('sort') || 'any');

    // Reset form fields
    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        setSearchParams({ sort: 'any' });
    };

    // Handle sort change in real-time
    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);

        // Update search params without form submission
        setSearchParams(prev => {
            const newParams = { ...Object.fromEntries(prev.entries()), sort: newSort };
            return newParams;
        });
    };

    return (
        <Form 
            className="bg-gray-300 rounded-md px-8 py-4 gap-x-4 gap-y-8"
            ref={formRef} // Attach the ref to the form
        >
            <div className=''>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-around space-x-2 items-center'>
                    <FormInput type="Search" label="Search Products" name="search" size="input-sm" />

                    {/* Brand Selection */}
                    <FormSelect label="Select Brand" name="brand" list={brandOptions} size="select-sm" />

                    {/* Category Selection */}
                    <FormSelect label="Select Category" name="category" list={categoryOptions} size="select-sm" />

                    {/* Price Sorting */}
                    <FormSelect 
                        label="Sort by Price" 
                        name="sort" 
                        list={sortOptions} 
                        size="select-sm" 
                        value={sort} // Bind sort to state
                        onChange={handleSortChange} // Real-time sorting change
                    />
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

