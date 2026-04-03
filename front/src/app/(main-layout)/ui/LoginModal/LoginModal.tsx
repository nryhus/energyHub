'use client'

import {FC} from "react";
import css from "./LoginModal.module.css"

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<IProps> = ({isOpen, onClose}) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className={css.Overlay} onClick={onClose}>
            <div className={css.Modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={css.Title}>УВІЙДІТЬ В СИСТЕМУ</h2>
                <p className={css.Subtitle}>
                    Доповнюйте свій бізнес з Energy hub
                </p>

                <input className={css.Input} placeholder="Email*" />
                <input className={css.Input} placeholder="Password*" type="password" />

                <div className={css.Row}>
                    <label className={css.Checkbox}>
                        <input type="checkbox" />
                        Запам’ятати мене
                    </label>

                    <button className={css.Forgot}>
                        Забули пароль?
                    </button>
                </div>

                <button className={css.Submit}>
                    Увійти
                </button>

                <p className={css.Footer}>
                    Не зареєстровані? <span>Стати дилером</span>
                </p>
            </div>
        </div>
    );
};

export {
    LoginModal
}