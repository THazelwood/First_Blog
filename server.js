Meteor.methods({
	'submitPost':function(title, body){
		console.log(title);
		console.log(body);
		Blogs.insert({title:title, body:body});
	}
	
	'sendEmail': function(to, from, subject, text){
		//check([to,from,subject,text],[String]);
		this.unblock();

		Email.send({to: to, from: from, subject: title, text: body});
	}
})
