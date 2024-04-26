import { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "./Button.constants";
import styles from './Button.module.css';
import * as icons from "react-icons/tfi";
import * as iconsPi from "react-icons/pi";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    icon?: boolean;
    iconName?: keyof typeof icons | keyof typeof iconsPi;
    iconSize?: number;
}

export function Button({ variant = ButtonVariant.Default, icon = false, iconName = 'TfiHeart', iconSize = 14, children, ...rest }: Readonly<IButton>) {
    let buttonClass = styles.buttonBase;
    const IconComponent = (iconName in icons ? icons[iconName as keyof typeof icons] : iconsPi[iconName as keyof typeof iconsPi]) as React.ComponentType<{ size: number; style: React.CSSProperties }>;

    switch (variant) {
        case ButtonVariant.Default:
            buttonClass += ` ${styles.buttonDefault}`;
            break;
        case ButtonVariant.Disabled:
            buttonClass += ` ${styles.buttonDisabled}`;
            break;
        case ButtonVariant.Outlined:
            buttonClass += ` ${styles.buttonOutlined}`;
            break;
        case ButtonVariant.Text:
            buttonClass += ` ${styles.buttonText}`;
            break;
    }

    return (
        <button {...rest} className={buttonClass}>
            {icon && IconComponent && <IconComponent size={iconSize} style={{ marginRight: 5 }} />}
            {children}
        </button>
    );
}
