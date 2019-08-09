import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './Comment';
//import * as serviceWorker from './serviceWorker';

//for Comment Component
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
//for Comment Component

ReactDOM.render(
    <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author}/>, 
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
