import '../styles/App.css';

export const Button = ({
    classNameAdd,
    classNameInput,
    classNameSub,
    handleClick,
    idAdd,
    idInput,
    idSub,
    name,
    handleNumber,
    type,
    value
}) => {
    return (
        <>
            <button className={classNameAdd} id={idAdd} name={name} onClick={handleClick}>
                {idAdd === 'add' && '+'}
            </button>
            <input
                className={classNameInput}
                type={type}
                id={idInput}
                value={value}
                onChange={handleNumber}
            />
            <button className={classNameSub} id={idSub} name={name} onClick={handleClick}>
                {idSub === 'sub' && '-'}
            </button>
        </>
    );
};
