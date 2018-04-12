//通过id查找
Mind.getById = function(id, callback) {
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('minds', function(err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            collection.findOne({
                _id : new  ObjectID(id)
            }, function(err, mind) {
                db.close();
                if (err) {
                    return callback(err);
                }
                callback(null, mind);
            });
        });
    });
};