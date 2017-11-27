var bio = {
	"name": "Marquita Tosen",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "999-999-9999",
		"email": "marquita.mondy@gmail.com",
		"github": "mj2521",
		"location": "Orlando, Florida, United States"
	},

	"welcomeMessage": "I am a Senior-Technical Consulting Engineer located in Orlando, Florida. Seeking a challenging position in which I can maximize my skills "+
			  "to form a mutually beneficial relationship with a telecommunications provider .",
	"skills": ["HTML", "CSS", "JavaScript","Git", "Python", "Microsoft Office",
          "Project Management" , "Network Operations", "Technology/IT Consulting",
          "Process Management", "IP Services" , "Network Operations"],
	"biopic": "images/me.jpg",
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%",skill));
	});


	for(var j = 0; j < formattedContactInfo.length; j++) {
		$("#topContacts").append(formattedContactInfo[j]);
		$("#footerContacts").append(formattedContactInfo[j]);
	}
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Technical Consulting Engineer",
			"location": "Orlando, Florida, United States",
			"dates": "May 2001 - Current",
			"description": "I design, configure and implement customer network infrastructure ."+
				"I have technical network knowledge as well as the ability to work with sales to "+
				"resolve problems and respond to special customer requests. I am also responsible for "+
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
			"major": ["Business Management"],
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


work.display = function() {

	if(work.jobs.length > 0) {

		for (var i = 0, len = work.jobs.length; i < len; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployerWorkTitle, formattedWorkLocation, formattedDatesWorked, formattedWorkDescription);
		}
	}
};


projects.display = function() {

		$("#projects").append(HTMLprojectStart.replace("%data%",projects));
		projects.projects.forEach(function(project) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

			project.images.forEach(function(image){
					var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
					$(".project-entry:last").append(formattedProjectImage);
			});
		});
};


education.display = function() {
		$("#education").append(HTMLschoolStart.replace("%data%",education));
		education.schools.forEach(function(school) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);

		});

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var n = 0; n < education.onlineCourses.length; n++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[n].title).replace("#", education.onlineCourses[n].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[n].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[n].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[n].url).replace("#", education.onlineCourses[n].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
				
			}
		}
};

education.display();
bio.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);


