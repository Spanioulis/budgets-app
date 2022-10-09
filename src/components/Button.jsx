import '../styles/App.css';

export const Button = ({
    classNameAdd,
    classNameInput,
    classNameSub,
    handleNumber,
    idAdd,
    idInput,
    idSub,
    name,
    onclick,
    type,
    value
}) => {
    return (
        <>
            <button className={classNameAdd} id={idAdd} name={name} onClick={onclick} value={value}>
                {idAdd === 'add' && '+'}
            </button>
            <input
                className={classNameInput}
                type={type}
                id={idInput}
                value={value}
                onChange={handleNumber}
            />
            <button className={classNameSub} id={idSub} name={name} onClick={onclick} value={value}>
                {idSub === 'sub' && '-'}
            </button>
        </>
    );
};
