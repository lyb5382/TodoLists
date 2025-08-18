const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Todo = require('../models/todo')

router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body)
        const saveTodo = await newTodo.save
        res.status(201).json(saveTodo)
    } catch (error) {
        res.status(400).json({ error: "실패..." })
    }
})

module.exports = router