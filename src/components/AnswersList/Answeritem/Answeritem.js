import React from 'react'
import classes from './Answeritem.module.css'

const Answeritem = (props) => {
    const cls = [classes.Answeritem]
    if (props.state) {
        cls.push(classes[props.state])
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default Answeritem
