  var bio = {
	"name": "Marquita Tosen",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "999-999-9999",
		"email": "marquita.mondy@gmail.com",
		"github": "mj2521",
		"location": "Orlando, Florida, United States"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "I am a Senior-Technical Consulting Engineer located in Orlando, Florida. Seeking a challenging position in which I can maximize my skills "+
			  "to form a mutually beneficial relationship with a telecommunications provider .",
	"skills": ["HTML", "CSS", "JavaScript","Git", "Python", "Microsoft Office",
          "Project Management" , "Network Operations", "Technology/IT Consulting",
          "Process Management", "IP Services" , "Network Operations"]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Technical Consulting Engineer",
			"location": "Orlando, Florida, United States",
			"dates": "May 2001 - Current",
			"description": "I design, configure and implement customer network infrastructure "+
				"I have technical network knowledge as well as the ability to work with sales to "+
				"resolve problems or respond to special customer requests. Responsible for "+
				"change proposals based on specialized applications. "

		},
		{
			"employer": "NorthPoint Communications",
			"title": "Transport Supervisor",
			"location": "San Francisco, California, United States",
			"dates": "December 1996 - May 2001",
			"description": "I designed, configured and implemented DSL network infrastructure to serve ISP providers. "+
				"I have ordered, engineered, provisioned and tested transport services along with managing eight provisioners. "

		}
	]
};

var education = {
	"schools": [
		{ "name": "University of Phoenix Online",
			"dates": "2004 - 2008",
			"location": "Orlando, Florida, United States",
			"degree": "BSBM",
			"majors": ["Business Management"],
	    "url": "www.phoenix.edu"
		},


	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intro to Programming Nanodegree",
			"dates": "December 2017",
			"url": "https://www.udacity.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Create a Movie Website",
			"dates": "August 2017",
			"description": "Use code create static webpage " +
			"Nanodegree.",
			"images": ["images/movie.png"],
			"url": "file:///Users/shontricejohnson/Desktop/Udacity/fresh_tomatoes.html"
		}
	]
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%",skill));
	});


	for(var j = 0; j < formattedContactInfo.length; j++) {
		$("#topContacts").append(formattedContactInfo[j]);
		$("#footerContacts").append(formattedContactInfo[j]);
	}
};

work.display = function() {

	if(work.jobs.length > 0) {

		for (var i = 0, len = work.jobs.length; i < len; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployerWorkTitle, formattedWorkLocation, formattedDatesWorked, formattedWorkDescription);
		}
	}
};


projects.display = function() {

projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart.replace("%data%",project));
			}
)}


			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);

		}


projects.display();

education.display = function() {
	education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart.replace("%data%",school));

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

		});

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var n = 0; n < education.onlineCourses.length; n++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
};

education.display();
bio.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
