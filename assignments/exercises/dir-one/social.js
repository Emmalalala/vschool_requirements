// Create a model to represent the database of a new social media platform you're 
// creating. It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method

var typeWritten = {
    media: {
        type: 'Social Media',
    },
    content: {
        you:{
            yourPosts:{
                personalContent: 'images',
                yourBlog: 'personal blog posts',
                yourSelfies: 'selfies of you',
            },
        },
        names: {
             'blogart': ['Blog content', ],
             'artfullio': 'centralization of blog-image posts',
            },
        images: {
            selfies: 'selfie-string',
            timeLine: 'image-timeline',
            visualization: 'string detail',
        },
    safeguard: {
        doubleEntendres(str) {
            console.log(str + " is a word in Urban Dictionary... Would you like be informed on its current definition?")
        },
        noRegrets(img1, names) {
            console.log("To encourage a professional environment, we strongly suggest you to reconsider posting this image as" + names + " is following you.");
        },
        manageAccount: 'manage account here',
        securityPreferences: 'manage security here',
      },
    events: {
        area: ['local', 'within 25mi', 'out of town, but may interest you!'],
            typeOfEvent:{
                concert: ['classical', 'hip-hop', 'R&B', 'rap'],
                sports: ['football', 'soccer', 'tennis', 'basketball', 'cicket'],
                kickIt(names1, date, names2){
                    console.log(names1 + " has invited you to kickIt with them on " + date + " along with " + names2);
                },
            },
        },
    general:{
        drafts: {
             mockup: 'design your page, no post',
            'work-in-progress (WIP)': 'blog WIPs storage',
            'help/depth-design': 'talk to a coder $$',
            advertisment: ['talk to a UX designer', 'speak with a sales expert'],
            analytics: 'view your business analytics for typeWritter here:',
            archive: 'Timeout a post for a while? Archive it!',
            'Account Security': 'Preview the security updates here.',
        },
    },
    deleteProfile: 'Delete your profile here',
  },
};
//Add 2 properties to one of the objects (doesn't matter what level of nested data you do this to)
typeWritten.product = {'creative advertisment': 'Advertise you business here.'};
typeWritten.names = connect ={'Company Compile': 'Here are our company affiliations'};
//Add 2 items to at least one of the arrays in your data
typeWritten.content.names['blogart'].push('blog short videos', 'apsects');
