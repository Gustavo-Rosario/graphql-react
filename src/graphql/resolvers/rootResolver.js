module.exports = {
    users: () => {
        return [{
            _id:"dsfgsdgsdfg",
            username:"GMaster",
            password: "teste"
        }, {
            _id:"dsfsadfasg",
            username:"Supreme",
            password: "teste"
        }]
    },
    createUser: (name) => {
        return name
    }
}