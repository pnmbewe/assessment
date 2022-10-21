const staffMembers = [
    { 
        "_id" :0, 
        "name" : "David", 
        "surname" : "Smith", 
        "slug": "david-smith",
        "category" : "operations",
        "title": "Head of Development",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :1, 
        "name" : "John", 
        "surname" : "Jones", 
        "slug": "john-jones",
        "category" : "operations",
        "title": "Head of Marketing",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :2, 
        "name" : "Jane", 
        "surname" : "Sampson", 
        "slug": "jane-sampson",
        "category" : "operations",
        "title": "Head of Content",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :3, 
        "name" : "Nick", 
        "surname" : "Thompson", 
        "slug": "nick-thompson",
        "category" : "operations",
        "title": "Head of Design",
        "reportsTo": "terry-cats"
    },
    { 
        "_id" :4, 
        "name" : "Nick", 
        "surname" : "Jenson", 
        "slug": "nick-jenson",
        "category" : "interns",
        "title": "Intern designer",
        "reportsTo": "nick-thompson" 
    },
    { 
        "_id" :5, 
        "name" : "Simon", 
        "surname" : "Says",
        "slug": "simon-says", 
        "category" : "operations",
        "title": "Head of Strategy",
        "reportsTo": "bruce-davids" 
    },
    { 
        "_id" :6, 
        "name" : "Terry", 
        "surname" : "Cats", 
        "slug": "terry-cats",
        "category" : "c-suite",
        "title": "Chief Creative Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :7, 
        "name" : "Bruce", 
        "surname" : "Davids", 
        "slug": "bruce-davids",
        "category" : "c-suite",
        "title": "Chief Strategy Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :8, 
        "name" : "Bill", 
        "surname" : "Bass", 
        "slug": "bill-bass",
        "category" : "c-suite",
        "title": "Chief Executive Officer",
        "reportsTo": "" 
    }
]

const categories = [
    { 
        "_id" :0, 
        "name" : "Executive", 
        "parent" : "", 
        "slug" : "c-suite" 
    },
    { 
        "_id" :1, 
        "name" : "Operations", 
        "parent" : "c-suite", 
        "slug" : "operations" 
    },
    { 
        "_id" :2, 
        "name" : "Interns", 
        "parent" : "operations", 
        "slug" : "interns" 
    },
];

// Review the instructions to complete this assessment
console.info('Your application must have the following output:\n');
console.info('* Terry Cats - Chief Creative Officer: Executive\n\t* Nick Thompson - Head of Design: Operations\n\t\t * Nick Jenson - Intern designer: Interns\n* Bruce Davids - Chief Strategy Officer: Executive\n\t* David Smith - Head of Development: Operations\n\t* John Jones - Head of Marketing: Operations\n\t* Jane Sampson - Head of Content: Operations\n\t* Simon Says - Head of Strategy: Operations\n* Bill Bass - Chief Executive Officer: Executive');

// Start your code here but please comment out the above logs
const createHeirarchy = (staffMembers, categories) => {
    // get head of staff members
    const staffHead = [];
    for (let i = 0; i < staffMembers.length; i++) {
        // if the staff member reports to no one
        if (staffMembers[i].reportsTo === '') {
            staffHead.push(staffMembers[i]);
        }
        // if the staff member reports to someone do nothing
    }


    // create an empty string to store the result
    let result = ``;
    // loop through the head members
    staffHead.map(e => {
        // find the category of the head member
        const category = categories.find(c => c.slug === e.category);
        // if the result string is empty
        if (result.length === 0) {
            // add the head member to the result string
            result += `* ${e.name} ${e.surname} - ${e.title}: ${category.name}`;
        } else {
            // else add the head member to the result string
            result += `\n* ${e.name} ${e.surname} - ${e.title}: ${category.name}`;
        }
        // loop through the staff members
        staffMembers.map(a => {
            // if the staff member reports to the head member
            if (a.reportsTo === e.slug) {
                // find the category of the staff member
                const category2 = categories.find(c => c.slug === a.category);
                // add the staff member to the result string
                result += `\n\t* ${a.name} ${a.surname} - ${a.title}: ${category2.name}`;
                // loop through the staff members
                staffMembers.map(d => {
                    // if the staff member reports to the staff member
                    if (d.reportsTo === a.slug) {
                        // find the category of the staff member
                        const category3 = categories.find(c => c.slug === d.category);
                        // add the staff member to the result string

                        result += `\n\t\t* ${d.name} ${d.surname} - ${d.title}: ${category3.name}`;
                    }
                });
            }
        });
    })
    // return the result string
    return result;
}


console.log(createHeirarchy(staffMembers, categories));
