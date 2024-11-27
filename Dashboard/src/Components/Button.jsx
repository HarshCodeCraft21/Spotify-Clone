import Styles from '../../Public/Styles/Button.module.css';
export const Button = ({ value, click,className }) => {
    return (
        <>
            <button
                className={Styles.button}
                onClick={click}
                id={className}
            >
                {value}

            </button>
        </>
    )
}