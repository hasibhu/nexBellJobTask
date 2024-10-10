

const FormInput = ({label, name, type, defaultValue, size, height}) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text font-bold">{label}</span>
            
            </div>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                placeholder="Write Here"
                className={`input input-bordered h-${height}  ${size}`} />
           
        </label>
    );
};



export default FormInput;