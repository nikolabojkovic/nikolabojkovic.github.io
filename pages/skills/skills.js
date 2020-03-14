$(document).ready(function () {
    var sections = [
        { 
            name: 'Languages',
            skills: [
                { name: 'C#', percentage: '95', backgroundColor: 'success' },
                { name: 'Javascript', percentage: '95', backgroundColor: 'default' },
                { name: 'HTML', percentage: '85', backgroundColor: 'default' },
                { name: 'CSS', percentage: '85', backgroundColor: 'default' },
                { name: 'C++', percentage: '75', backgroundColor: 'default' },
                { name: 'Swift (IOS)', percentage: '60', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'} }
            ]
        },
        {
            name: 'Databases',
            skills: [
                { name: 'SQL', percentage: '95', backgroundColor: 'default'},
                { name: 'Relational databeses', percentage: '95', backgroundColor: 'default'},
                { name: 'MSSql', percentage: '85', backgroundColor: 'default'},
                { name: 'MySql', percentage: '85', backgroundColor: 'default'}
            ]
        },
        {
            name: 'Frameworks',
            skills: [
                { name: '.Net Core', percentage: '90', backgroundColor: 'default'},
                { name: 'Entity Framework Core', percentage: '90', backgroundColor: 'default'},
                { name: 'Bootstrap', percentage: '90', backgroundColor: 'default'},
                { name: 'Angular 2+', percentage: '85', backgroundColor: 'default'},
                { name: 'SignalR Core', percentage: '80', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}},
                { name: 'AKKA .Net', percentage: '80', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}},
                { name: 'JQuery', percentage: '75', backgroundColor: 'default'},
                { name: 'VueJs', percentage: '85', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}}
            ]
        },
        {
            name: 'Subversion systems',
            skills: [
                { name: 'GIT', percentage: '90', backgroundColor: 'default'},
                { name: 'SVN', percentage: '70', backgroundColor: 'default'},
                { name: 'TFS', percentage: '40', backgroundColor: 'default'}
            ]
        },
        {
            name: 'Project management approaches',
            skills: [
                { name: 'Agile development (Kanban)', percentage: '75', backgroundColor: 'default'},
                { name: 'Agile development (SCRUM)', percentage: '60', backgroundColor: 'default'}
            ]
        },
        {
            name: 'Software Design',
            skills: [
                { name: 'Object oriented programming', percentage: '90', backgroundColor: 'default'},
                { name: 'Design patters', percentage: '50', backgroundColor: 'default'},
                { name: 'Domain Driven Design', percentage: '70', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}},
                { name: 'Test Driven Development', percentage: '80', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}},
                { name: 'Clean (Onion) Architecture', percentage: '90', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}}
            ]
        },
        {
            name: 'Development Environments',
            skills: [
                { name: 'Visual Studio', percentage: '95', backgroundColor: 'default'},
                { name: 'Visual Studio Code', percentage: '85', backgroundColor: 'default'},
                { name: 'Team City', percentage: '75', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}},
                { name: 'Jenkins', percentage: '65', backgroundColor: 'default', badge: { text: 'New', color: 'secondary'}}
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
                        <div class="progress-bar bg-${skill.backgroundColor} proggress-bar-inner-shadow" role="progressbar" style="width: ${skill.percentage}%;" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100">${skill.name}</div>
                        ` + RednerBadge(skill.badge) + `
                    </div>
                </div>
            </div>
        `);
    });
}

function RednerBadge(badge) {
    if (badge) {
        return `<h6><span class="badge badge-${badge.color}">${badge.text}</span></h6>`;
    }
    
    return '';
}