import React, { Component } from 'react'
import classes from './Quiz.module.css'

export default class QuizList extends Component {
    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                </div>
            </div>
        )
    }
}