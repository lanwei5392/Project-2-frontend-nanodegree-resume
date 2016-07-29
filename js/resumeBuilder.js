/* Package all the bio info in a object literal */

var bio = {

    name: 'Lan Wei',
    role: 'Mobile Web Application Developer',
    contacts: {
        mobile: '510-304-1345',
        email: 'lanweius@gmail.com',
        github: 'lanweius',
        twitter: '@lanwei94582',
        location: 'San Ramon, CA'
    },

    welcomeMessage: 'Mobile internet is exciting. New technology is changing the world.',
    skills: [
        'Analyzing network traffic',
        'Optimizing network design & IP routing troubleshooting',
        'Programming',
        'JavaScript'
    ],

    biopic: 'images/me.jpg'
};

/* Display bio info in the header section defined by index.html*/
bio.display = function() {

    var names = [];
    var names = bio.name;
    var names = names.split(" ");
    names[1] = names[1].toUpperCase();
    var inName = names[0] + " " + names[1];

    var data = "%data%";
    var $header = $("#header");

    var formattedName = HTMLheaderName.replace(data, inName);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formattedRole).prepend(formattedName)

    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    $header.append(formattedPic);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedContacts = [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation];

    $("#topContacts").append(formattedContacts);
    $("#footerContacts").append(formattedContacts);


    if (bio.welcomeMessage != 0) {
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    };
    $header.append(formattedwelcomeMsg);


    if (bio.skills != 0) {

        $header.append(HTMLskillsStart);

        var formattedSkill1 = HTMLskills.replace(data, bio.skills[0]);
        var formattedSkill2 = HTMLskills.replace(data, bio.skills[1]);
        var formattedSkill3 = HTMLskills.replace(data, bio.skills[2]);
        var formattedSkill4 = HTMLskills.replace(data, bio.skills[3]);
        var formattedSkills = [formattedSkill1, formattedSkill2, formattedSkill3, formattedSkill4];

        $header.append(formattedSkills);
    };
};

bio.display();



/* Package all the work info in a object literal */

var work = {

    jobs: [{

            employer: 'AT&T',
            title: 'Network Engineer',
            location: 'San Ramon, CA',
            dates: '1996 - present',
            description: 'Joined designing AT&T wireless network in west region.' +
                'Deployed mobile switches in California.' +
                'Created and deployed Numbering Plan in the switches and billing system for AT&T west region.' +
                'Deployed E911 network for wireless network in Northern California. Deployed E911 netack up network nationwide.'

        },

        {
            employer: 'Allen Telecom',
            title: 'Product Specialist',
            location: 'Cleveland, OH',
            dates: '1994 - 1996',
            description: 'Provided technical support for high power repeaters and antenna systems for Asian Pacific region.' +
                'Joined planning SmartCell celluler system. Developed signalling and transport specification for E1 interface.'
        }
    ]
};

/* Display all the work info in the workExperience element defined by index.html*/

work.display = function() {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);

    };
};

work.display();

/* Package all the project info in a object literal */

var projects = {

    projects: [{

            title: 'E911 Network Design and Deployment',
            dates: '2007 - 2011',
            description: 'Designed and deployed E911 call routing and trunking for AT&T wireless network in Northern California.',
            images: ['images/at&t-e911-network.jpg', 'images/at&t-volte911-diagram.jpg']
        },

        {
            title: 'AT&T Mobility Network Deployment',
            dates: '1996 - 2007',
            description: 'Deployed mobile switches for AT&T Mobility network in west region and provided mobile services.',
            images: ['images/at&t-mobile-network1.jpg', 'images/at&t-mobile-network2.jpg']
        }
    ],

};

/* Display all project info in the projects element defined by index.html */

projects.display = function() {

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedImage1 = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
        var formattedImage2 = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
        var formattedImages = [formattedImage1, formattedImage2];

        $(".project-entry:last").append(formattedprojectTitle).append(formattedprojectDates).append(formattedprojectDescription);
        $(".project-entry:last").append(formattedImages);
    };
};

projects.display();


/* Pakace all eduction info in an object literal. */

var education = {

    schools: [{

            name: 'China Academy of Telecommunication Research of MIIT',
            location: 'Beijing, China',
            degree: 'MS of Telecom',
            majors: ['Telecom Engineering', 'Electronic Engineering'],
            dates: '1986 - 1989',
            url: 'http://english.catr.cn/'
        },

        {
            name: 'Nanjing Unversity of Posts and Telecommunications China',
            location: 'Nanjing, China',
            degree: 'BS of Telecom engineering',
            majors: ['Telecom Engineering', 'Electronic Engineering'],
            dates: '1979 - 1983',
            url: 'https://www.youtube.com/watch?v=ntRHoF7cVUA'
        }
    ],

    onlineCourses: {

        school: 'Udacity',
        dates: '2015 - 2016',
        title1: 'JaveScript Syntax',
        title2: 'Front-End Web Deveoper Nanodegree',
        url1: 'https://www.udacity.com/course/viewer#!/c-ud804/l',
        url2: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
};

/* Display all education info in the education element defined by index.html. */

education.display = function() {

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolUrl = HTMLschoolURL.replace("%data%", education.schools[school].url);

        $(".education-entry:last").append(formattedschoolNameDegree).append(formattedschoolDates).append(formattedschoolMajors).append(formattedschoolUrl);
    };

    var formattedonlineTitle1 = HTMLonlineTitle.replace("%data%", education.onlineCourses.title1);
    var formattedonlineTitle2 = HTMLonlineTitle.replace("%data%", education.onlineCourses.title2);
    var formattedonlineUrl1 = HTMLonlineURL.replace("%data%", education.onlineCourses.url1);
    var formattedonlineUrl2 = HTMLonlineURL.replace("%data%", education.onlineCourses.url2);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
    var formattedonlineClass1 = formattedonlineTitle1 + formattedonlineSchool;
    var formattedonlineClass2 = formattedonlineTitle2 + formattedonlineSchool;


    $(".education-entry:last").append(HTMLonlineClasses);
    $(".education-entry:last").append(formattedonlineClass1).append(formattedonlineDates).append(formattedonlineUrl1);
    $(".education-entry:last").append(formattedonlineClass2).append(formattedonlineDates).append(formattedonlineUrl2);
};

education.display();


// function locationizer(work_obj) {

// var locationArray = [];

// for ( job in work.jobs) {
// var newLocation = work_obj.jobs[job].location;
// locationArray.push(newLocation);
// }
// return locationArray;
// }

// Did locationizer() work? This line will tell you!
// console.log(locationizer(work));


$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#mapDiv").append(googleMap);