import React, {ReactNode} from 'react';
import './Credit.css';

type CreditProps = {
    name: string
    description: string
    children?: ReactNode
}

function Credit(props: CreditProps) {
    return (
        <div className="creditCtr">

            {
                props.children
            }
            <p className="creditName">
                {props.name}
            </p>
            <p className="creditDesc">
                {props.description}
            </p>
        </div>
    )
}

export default Credit;