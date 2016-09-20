'use strict';

module.exports = function(app) {
	return function(req, res, next) {
    // Perform actions
    const body = req.body;

       // Get the user service and `create` a new user
       app.service('users').create({
       	fname: body.fname,
       	lname: body.lname,
       	username: body.username,
       	email: body.email,
       	password: body.password,
       	dob: body.dob,
       	gender: body.gender,
       	occupation: body.occupation
       })

     // Then redirect to the login page
     .then(user => res.redirect('/login.html'))

    // On errors, just call our error middleware
    .catch(next);

};
};
