$(document).ready(function () {
    var sections = [
        { 
            name: 'Languages',
            skills: [
                { name: 'C#', percentage: '95', progressBarColor: 'bg-success' },
                { name: 'HTML', percentage: '85', progressBarColor: 'bg-default' },
                { name: 'Javascript', percentage: '95', progressBarColor: 'bg-default' },
                { name: 'CSS', percentage: '85', progressBarColor: 'bg-default' },
                { name: 'C++', percentage: '75', progressBarColor: 'bg-default' },
                { name: 'Swift (IOS)', percentage: '60', progressBarColor: 'bg-default' },
                { name: 'Java', percentage: '50', progressBarColor: 'bg-default' },
                { name: 'PHP', percentage: '50', progressBarColor: 'bg-default' }
            ]
        },
        {
            name: 'Databases',
            skills: [
                { name: 'SQL', percentage: '95', progressBarColor: 'bg-default'},
                { name: 'Relational databeses', percentage: '95', progressBarColor: 'bg-default'},
                { name: 'MSSql', percentage: '85', progressBarColor: 'bg-default'},
                { name: 'MySql', percentage: '85', progressBarColor: 'bg-default'}
            ]
        },
        {
            name: 'Frameworks',
            skills: [
                { name: '.Net Core', percentage: '90', progressBarColor: 'bg-default'},
                { name: 'Entity Framework Core', percentage: '90', progressBarColor: 'bg-default'},
                { name: 'Bootstrap', percentage: '90', progressBarColor: 'bg-default'},
                { name: 'Angular 2+', percentage: '85', progressBarColor: 'bg-default'},
                { name: 'SignalR', percentage: '80', progressBarColor: 'bg-default'},
                { name: 'AKKA .Net', percentage: '80', progressBarColor: 'bg-default'},
                { name: 'JQuery', percentage: '75', progressBarColor: 'bg-default'},
                { name: 'VueJs', percentage: '85', progressBarColor: 'bg-default'},
                { name: 'Laravel', percentage: '40', progressBarColor: 'bg-default'}
            ]
        },
        {
            name: 'Subversion systems',
            skills: [
                { name: 'GIT', percentage: '90', progressBarColor: 'bg-default'},
                { name: 'SVN', percentage: '70', progressBarColor: 'bg-default'},
                { name: 'TFS', percentage: '40', progressBarColor: 'bg-default'}
            ]
        },
        {
            name: 'Project management approaches',
            skills: [
                { name: 'Agile development (Kanban)', percentage: '75', progressBarColor: 'bg-default'},
                { name: 'Agile development (SCRUM)', percentage: '60', progressBarColor: 'bg-default'}
            ]
        },
        {
            name: 'Software Design',
            skills: [
                { name: 'Object oriented programming', percentage: '90', progressBarColor: 'bg-default'},
                { name: 'Design patters', percentage: '50', progressBarColor: 'bg-default'},
                { name: 'SDomain Driven Design<QL', percentage: '70', progressBarColor: 'bg-default'},
                { name: 'Test Driven Development', percentage: '60', progressBarColor: 'bg-default'},
                { name: 'Onion Architecture', percentage: '80', progressBarColor: 'bg-default'}
            ]
        },
        {
            name: 'Development Environments',
            skills: [
                { name: 'Visual Studio', percentage: '95', progressBarColor: 'bg-default'},
                { name: 'Visual Studio Code', percentage: '85', progressBarColor: 'bg-default'},
                { name: 'Team City', percentage: '75', progressBarColor: 'bg-default'},
                { name: 'Jenkins', percentage: '65', progressBarColor: 'bg-default'}
            ]
        }
    ];

    RenderSections(sections);
});

function RenderSections(sections) {
    $.each(sections, function(index, section) {
        var sectionId = section.name.toLowerCase().replace(/ /g, '-');
        $('#skills-content').append(`
        <section id='skill-${sectionId}'>
            <hr>
            <h3 class="font-weight-light text-center mb-0">${section.name}</h3>
        </section>`);
        RenderSkillsFor(sectionId, section.skills);
    }); 
}

function RenderSkillsFor(section, skills) {
    $.each(skills, function(index, skill) {
        $(`#skill-${section}`).append(`  
            <div class="row">
                <div class="col-sm-12 ml-auto">
                    <div class="progress progress-bar-shadow bg-progress-bar border border border-light">
                        <div class="progress-bar ${skill.progressBarColor} proggress-bar-inner-shadow" role="progressbar" style="width: ${skill.percentage}%;" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100">${skill.name}</div>
                    </div>
                </div>
            </div>
        `);
    });
}