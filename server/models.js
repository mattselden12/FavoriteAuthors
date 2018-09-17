const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
	aname: {
		type: String,
		required: [true, "The author must have a name."],
		minlength: [3, "The author's name should be at least three characters long"]
	}
}, {timestamps:true})

mongoose.connect("mongodb://localhost:27017/authordb", {useNewUrlParser:true}, (errs)=>console.log(errs?errs:"db is lookin good"));

module.exports = mongoose.model("Author", AuthorSchema)