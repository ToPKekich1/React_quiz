import React from 'react'
import classes from './AnswersList.module.css'
import Answeritem from './Answeritem/Answeritem'

const AnswersList = (props) => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answers, index) => {
            return (
                <Answeritem
                    key={index}
                    answer={answers}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answers.id] : null}
                />
            )
        })}
    </ul>
)

export default AnswersList
