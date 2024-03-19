const controller = {
    getFavicon: function(req, res){
        res.status(204);
    },

    getIndex: function(req, res){
        res.send("Welcome to miscake API!");
    }
}

module.exports = controller;