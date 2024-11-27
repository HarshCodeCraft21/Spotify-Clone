import Styles from '../../Public/Styles/Navbar.module.css';
import { Button } from './Button'
import { Img } from '../Images/Img'
import { useState } from 'react';
export const Navbar = () => {
    const [showButton, setShowButton] = useState(true);
    function searchBtn(event) {
        const inputValue = event.target.value;
        setShowButton(inputValue === "");
    }
    return (
        <>
            <nav className={Styles.nav}>
                <Img
                    src={0}
                    className={Styles.Img}
                />

                <div className={Styles['input-wrapper']}>
                    <Button value={<i className="bi bi-house-door"></i>} className={Styles['home-btn']} />
                    <input
                        type="text"
                        className={Styles.input}
                        placeholder='Search Your Songs here...'
                        onInput={searchBtn}
                    />
                    {
                        showButton && (
                            <Button
                                value={<i className="bi bi-search"></i>}
                                className={Styles.btn}
                            />
                        )
                    }
                </div>
                <div className={Styles['Auth-Container']}>
                    <Button
                        className={Styles['sign-in']}
                        value="Sign-in"
                    />
                    <Button
                        className={Styles['login']}
                        value="Login"
                    />
                </div>
            </nav>
        </>
    )
}