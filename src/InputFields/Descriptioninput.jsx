

const Descriptioninput = ({label, name, type, defaultValue, size = "w-full", height = "h-20"}) => {
    return (
        <label className={`form-control ${size}`}>
            <div className="label">
                <span className="label-text font-bold">{label}</span>
            </div>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                placeholder="Write Here"
                className={`input input-bordered ${height}`} />
        </label>
    );
};

export default Descriptioninput;