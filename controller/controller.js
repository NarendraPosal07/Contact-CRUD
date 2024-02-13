const todo = require("../model/todo");
const fs = require('fs')

let data = []

const defaultpath = async (req, res) => {

    try {
        let toDos = await todo.find();
        console.log('toDos', toDos);
        res.render('index', { toDos });

    } catch (error) {
        console.log('err', error);
    }

}

const appDoc = (req, res) => {

    console.log(req.body, req.file);

    const newTodo = new todo({
        user: req.body.user,
        number: req.body.number,
        email: req.body.email,
        fileupload: req.file.path
    });

    newTodo.save();

    res.redirect('/');
}

const deleteDoc = async (req, res) => {
    try {
        const deleteTodo = await todo.findByIdAndDelete(req.params.id);
        fs.unlink(deleteTodo.fileupload, () => {
            res.redirect('/');
        })
    } catch (err) {
        console.log("delete", err);
    }
}

const EditDoc = async (req, res) => {
    try {
        const EditData = await todo.findById(req.params.id)
        console.log("EditData", EditData);
        res.render('edit', { EditData })

    } catch (err) {
        console.log("edited", err);
    }
}

const updateDoc = async (req, res) => {

    const { id, user, number, email } = req.body;
    const { path } = req.file;
    try {
        const oldData = await todo.findById(id)
        fs.unlink(oldData.fileupload, () => {
            console.log("Updata Done");
        })
        const UpdateTodo = await todo.findByIdAndUpdate(id, { user: user, number: number, email: email, fileupload: path });
        res.redirect('/');
    } catch (err) {
        console.log("update", err);
    }
}

module.exports = { defaultpath, appDoc, deleteDoc, EditDoc, updateDoc }