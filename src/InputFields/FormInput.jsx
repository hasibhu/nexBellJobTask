

const FormInput = ({ label, name, type, value, onChange }) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text font-bold ">{label}</span>
            </div>
            <input
                type={type}
                name={name}
                value={value}  
                onChange={onChange}  
                placeholder="Write Here"
                className={`input h-8 input-bordered`}
            />
        </label>
    );
};

export default FormInput;
