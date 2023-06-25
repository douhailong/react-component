import React from 'react';
import classNames from 'classnames';
import { FcAbout, FcInfo, FcApproval, FcCancel } from 'react-icons/fc';
import { tuple } from '../_util/type';

const AlertTypes = tuple('success', 'info', 'error', 'warning');
type AlertType = (typeof AlertTypes)[number];

export type AlertProps = {
    type?: AlertType;
    closable?: boolean;
    message?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    afterClose?: () => void;
    style?: React.CSSProperties;
    className?: string;
    showIcon?: boolean;
};

const Alert: React.FC<AlertProps> = props => {
    React.Children.forEach(props.children, chil => {
        console.log(chil, 'jjj');
    });

    const { onClick, onClose, showIcon, action } = props;

    return (
        <div onClick={onClick}>
            {showIcon ? <div>Icon</div> : null}
            <div>11</div>
            {action ? <div>action</div> : null}
        </div>
    );
};

export default Alert;
