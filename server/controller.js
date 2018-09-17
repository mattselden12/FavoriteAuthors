const Author = require("./models.js");
module.exports = {
	allAuthors: (req,res)=> Author
						.find({})
						.then(data=>res.json(
						{status: "good", content: data}
						))
						.catch(errs=>res.json(
						{status: "bad", content: errs}
						)),
	thisAuthor: (req,res)=> Author
						.findById(req.params.id)
						.then(data=>res.json(
						{status: "good", content: data}
						))
						.catch(errs=>res.json(
						{status: "bad", content: errs}
						)),
	createAuthor: (req,res)=> Author
						.create(req.body)
						.then(data=>console.log("createAuthor route worked")||res.json(
						{status: "good", content: data}
						))
						.catch(errs=>console.log("createAuthor route error")||res.json(
						{status: "bad", content: errs}
						)),
	updateAuthor: (req,res)=> Author
						.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
						.then(data=>res.json(
						{status: "good", content: data}
						))
						.catch(errs=>res.json(
						{status: "bad", content: errs}
						)),
	deleteAuthor: (req,res)=> Author
						.findByIdAndRemove(req.params.id)
						.then(data=>res.json(
						{status: "good", content: data}
						))
						.catch(errs=>res.json(
						{status: "bad", content: errs}
						))
}
