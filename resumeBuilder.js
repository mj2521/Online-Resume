 var bio = {
	"name": "Marquita Tosen",
	"role": "Front-End Developer",
	"contacts": {
		"email": "marquita.mondy@gmail.com",
		"github": "mj2521",
		"location": "Orlando, Florida, United States"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "I am a Senior-Technical Consulting Engineer located in Orlando, Florida. Seeking a challenging position in which I can maximize my skills "+
			  "to form a mutually beneficial relationship with a telecommunications provider .",
	"skills": ["HTML", "CSS", "JavaScript","Git", "Python", "Microsoft Office", +
          "Project Management" , "Network Operations", "Technology/IT Consulting", +
          "Process Management", "IP Services" , "Network Operations"]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Technical Consulting Engineer",
			"location": "Orlando, Florida, United States",
			"datesWorked": "May 2001 - Current",
			"description": "I design, configure and implement customer network infrastructure "+
				"I have technical network knowledge as well as the ability to work with sales to "+
				"resolve problems or respond to special customer requests. Responsible for "+
				"change proposals based on specialized applications. "

		},
		{
			"employer": "NorthPoint Communications",
			"title": "Transport Supervisor",
			"location": "San Francisco, California, United States",
			"datesWorked": "December 1996 - May 2001",
			"description": "I designed, configured and implemented DSL network infrastructure to serve ISP providers. "+
				"I have ordered, engineered, provisioned and tested transport services along with managing eight provisioners. "

		}
	]
};

var education = {
	"schools": [
		{ "name": "University of Phoenix Online",
			"datesAttended": "2004 - 2008",
			"location": "Orlando, Florida, United States",
			"degree": "BSBM",
			"major": "Business Management",
	    "url": "www.phoenix.edu"
		},


	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intro to Programming Nanodegree",
			"completed": "December 2017",
			"url": "https://www.udacity.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Create a Movie Website",
			"datesWorked": "August 2017",
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
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(var i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}

	for(var i = 0; i < formattedContactInfo.length; i++) {
		$("#topContacts").append(formattedContactInfo[i]);
		$("#footerContacts").append(formattedContactInfo[i]);
	}

};

function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(var i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

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


		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var i = 0; i < education.onlineCourses.length; i++) {
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

	}
};

education.display();
bio.display();
displayWork();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
