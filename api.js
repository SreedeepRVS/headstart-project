var User = require('./Student_Schema');

module.exports= function(router){
	router.post('/a',function(req,res){
	var user = new User();
	user.StudentName = req.body.StudentName;
	user.College = req.body.College;
	user.EmailId = req.body.EmailId;
	user.Contact = req.body.Contact;
	console.log("jkgj");
	if (user.StudentName==""||user.StudentName==null||user.College==""||user.College==null||user.EmailId==""||user.EmailId==null||user.Contact==""||user.Contact==null)
	{
		res.send("UserName, College,Email-Id or Contact are missing and are required to proceed");
	}
	else{	
	user.save(function(err){
		if(err){
			res.send(err);
		}
		else{
			res.send("User created");
		}	
	});
}
});
	return router;
}
