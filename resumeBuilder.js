var DATA = '%data%';

var bio = {
  name: 'Marquita Tosen',
  role: 'Senior-Technical Consulting Engineer',
  contacts: {
    mobile: '407-294-4047',
    email: 'marquita.mondy@gmail.com',
    github: 'mj2521'
    location: 'Orlando, Florida'
  },
  welcomeMessage: 'Senior-Technical Consulting Engineer located in Orlando, Florida' +
                  'Subject Matter Expert AT&T Technology products ' +
                  'Seeking a challenging position in which I can maximize my skills , ' +
                  'to form a mutually beneficial relationship with a telecommunications provider .',
  skills: ['HTML', 'CSS', 'JavaScript', 'Web Applications', 'Git', 'Python', 'Microsoft Office,' +
          'Project Management' , 'Network Operations', 'Technology/IT Consulting', +
          'Process Management', 'IP Services' , 'Network Operations']

  biopic: 'images/Me.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'AT&T',
      title: 'Senior Technical Consulting Engineer',
      location: 'Orlando, Florida',
      dates: 'May 2001 - Current',
      description: 'Design, configure and implement customer network infrastructure ' +
                   'I have technical network knowledge as well as the ability to work with sales to' +
                   'resolve problems or respond to special customer requests. Responsible for' +
                   'change proposals based on specialized applications.'

    },
    {
      employer: 'NorthPoint Communications',
      title: 'Transport Supervisor',
      location: 'San Francisco, CA',
      dates: 'December 1996 - May 2001',
      description: 'Design, configure and implement DSL network infrastructure to serve  ' +
                   'ISP providers. Ordered, engineered, provisioned and tested transport services .' +



    }
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

var projects = {
  projects: [
    {
      'title': 'Code Your Own Quiz',
      'dates': 'August 2017',
      'description': 'Use Phython to code a quiz with proper use of variables, functions  ' +
                     'and coding techiques. '
      'images': ['images/notifier-udacity-1.png', 'images/notifier-udacity-2.png']
    },
    {
      'title': 'Creat a Movie Website',
      'dates': 'August 2017',
      'description': 'Use Python to Create a Movie Website with the correct Python data structure ' +
                     ' with proper usage of variables, functions, classes and coding usage.',
      'images': ['images/css-flexbox-snippets.gif']
    },

    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': ' University of Phoenix',
      'location': 'Phoenix, Arizona, United States',
      'degree': 'Bachelor of Science in Business Management'
      'dates': '2007 - 2009',

      'name': ' Lone Star College - North Harris',
      'location': 'Houston, Texas, United States'
      'dates': '1993 - 1995',

      'name': ' Valencia College',
      'location': 'Orlando, Florida, United States'
      'dates': '1991 - 1992',
    }

  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
