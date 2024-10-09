import banner from '../../public/banner.png'

const Landing = () => {
    return (
        <div className='h-screen lg:flex justify-around items-center'>
            <div>
                <div className=''>
                <h1 className='text-5xl font-bold'>
                    <span className='text-black'>Welcome to</span>
                    <span className='text-green-500'> Our Shop</span></h1>
                </div>
                <button className='btn bg-green-500 pt-6 pb-8 pl-5 pr-5 text-white mt-6'>Our Products</button>
            </div>

            <div>
                <img src={banner} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Landing;