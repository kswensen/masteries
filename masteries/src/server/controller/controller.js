module.exports = {
    create: (db, req, res) => {
        db.add_chore(req.params.chore).then(added => {
            res.status(200).send('Chore has been added');
        });
    },
    
    read: (db, req, res) => {
        db.get_chores().then(chores => {
            res.status(200).send(chores);
        });
    },

    update: (db, req, res) => {
        let { newChore, chore_id } = req.params;
        db.update_chore([newChore, chore_id]).then(updated => {
            res.status(200).send('Chore has been updated');
        });
    },

    delete: (db, req, res) => {
        db.delete_chore(req.params.chore_id).then(deleted => {
            res.status(200).send('Chore has been deleted');
        });
    }
}