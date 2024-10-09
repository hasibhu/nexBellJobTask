


import { Form, useLoaderData } from 'react-router-dom';
import FormInput from '../../InputFields/FormInput';
import FormSelect from '../../InputFields/FormSelect';

const Filters = () => {
    const { products, params, categories, brands } = useLoaderData();

    // Add "all" as the default option for category and brand selection
    const categoryOptions = ['all', ...categories];
    const brandOptions = ['all', ...brands];

    return (
        <Form>
            <FormInput type="Search" label="Search Products" name="search" size="input-sm" />

            {/* Brand Selection */}
            <FormSelect label="Select Brand" name="brand" list={brandOptions} size="select-sm" />

            {/* Category Selection */}
            <FormSelect label="Select Category" name="category" list={categoryOptions} size="select-sm" />

            <button type="submit" className="btn btn-primary btn-sm">Search</button>
        </Form>
    );
};

export default Filters;
