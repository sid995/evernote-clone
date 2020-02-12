import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
	apiKey: 'AIzaSyC2Piv5GlHvmXLucodjcfpBeR5POdcZDMo',
	authDomain: 'evernote-67986.firebaseapp.com',
	databaseURL: 'https://evernote-67986.firebaseio.com',
	projectId: 'evernote-67986',
	storageBucket: 'evernote-67986.appspot.com',
	messagingSenderId: '519377749683',
	appId: '1:519377749683:web:b5390e3892eaa346a552c6',
	measurementId: 'G-2MW9ZCQT63'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
