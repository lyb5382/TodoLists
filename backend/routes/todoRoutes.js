const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Todo = require('../models/todo')

router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body)
        const saveTodo = await newTodo.save()
        res.status(201).json(saveTodo)
    } catch (error) {
        res.status(400).json({ error: "실패..." })
    }
})

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createAt: -1 })
        res.status(201).json(todos)
    } catch (error) {
        res.status(400).json({ error: "실패..." })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "ID가 잘못됨" })
        }
        const todo = await Todo.findById(id)
        if (!todo) {
            return res.status(404).json({ message: "없음" })
        }
        res.status(201).json({ message: "하나 불러오기", todo })
    } catch (error) {
        res.status(400).json({ error: "실패..." })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updateTodo = req.body
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "ID가 잘못됨" })
        }
        const updated = await Todo.findByIdAndUpdate(id, updateTodo, {
            new: true,
            runValidators: true
        })
        if (!updated) {
            return res.status(404).json({ message: "없음" })
        }
        res.status(201).json({ message: "수정 완료", updated })
    } catch (error) {
        res.status(400).json({ error: "실패..." })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "ID가 잘못됨" })
        }
        const deleted = await Todo.findByIdAndDelete(id)
        if (!deleted) {
            return res.status(404).json({ message: "없음" })
        }
        const todos = await Todo.find().sort({ createAt: -1 })
        res.status(201).json({ message: "삭제 완료", todos })
    } catch (error) {
        res.status(400).json({ error: "실패..." })
    }
})

module.exports = router