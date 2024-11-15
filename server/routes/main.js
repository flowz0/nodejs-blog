const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/* 
    GET / HOME
*/
router.get('', async (req, res) => {
    try {
        const locals = {
            title: "NodeJS Blog",
            description: "Simple blog created with NodeJS, Express, and MongoDB."
        }

        let perPage = 6;
        let page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Post.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        res.render('index', {
            locals,
            data,
            currentPage: page,
            nextPage: hasNextPage ? nextPage : null,
            currentRoute: '/'
        });
    } catch (error) {
        console.log(error);
    }

});

/* 
    GET / Post :id
 */

router.get('/post/:id', async (req, res) => {
    try {
        let slug = req.params.id;

        const data = await Post.findById({ _id: slug });

        const locals = {
            title: data.title,
            description: "Simple blog created with NodeJS, Express, and MongoDB."
        }
        
        res.render('post', {
            locals,
            data,
            currentRoute: `/post/${slug}`
        });
    } catch (error) {
        console.log(error);
    }

});

/* 
    POST / Post - searchTerm
*/
router.post('/search', async (req, res) => {

    try {
        const locals = {
            title: "Search",
            description: "Simple blog created with NodeJS, Express, and MongoDB."
        }

        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");

        const data = await Post.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { body: { $regex: new RegExp(searchNoSpecialChar, 'i') } }
            ]
        });

        res.render('search', {
            data,
            locals
        });
    } catch (error) {
        console.log(error);
    }

});

router.get('/about', (req, res) => {
    res.render('about', {
        currentRoute: '/about'
    });
});

module.exports = router;

/* router.get('', async (req, res) => {
    const locals = {
        title: "NodeJS Blog",
        description: "Simple blog created with NodeJS, Express, and MongoDB."
    }

    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    } catch (error) {
        console.log(error);
    }

}); */

/* function insertPostData() {
    Post.insertMany([
        {
            title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta nisi justo nec diam hac; vulputate erat. Luctus fringilla felis diam tristique posuere ridiculus arcu. Pulvinar inceptos odio lacus potenti luctus; pharetra aenean phasellus. Posuere natoque dis commodo porttitor et turpis mauris. Justo aenean feugiat fames aliquam augue elit rhoncus enim. Tincidunt feugiat leo nullam lacus pharetra ridiculus vestibulum."
        },
        {
            title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta nisi justo nec diam hac; vulputate erat. Luctus fringilla felis diam tristique posuere ridiculus arcu. Pulvinar inceptos odio lacus potenti luctus; pharetra aenean phasellus. Posuere natoque dis commodo porttitor et turpis mauris. Justo aenean feugiat fames aliquam augue elit rhoncus enim. Tincidunt feugiat leo nullam lacus pharetra ridiculus vestibulum."
        },
        {
            title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta nisi justo nec diam hac; vulputate erat. Luctus fringilla felis diam tristique posuere ridiculus arcu. Pulvinar inceptos odio lacus potenti luctus; pharetra aenean phasellus. Posuere natoque dis commodo porttitor et turpis mauris. Justo aenean feugiat fames aliquam augue elit rhoncus enim. Tincidunt feugiat leo nullam lacus pharetra ridiculus vestibulum."
        },
        {
            title: "Quisque fusce pulvinar curabitur potenti amet amet tempor.",
            body: "Semper adipiscing cras sit fusce lacus magna. Hac penatibus vulputate fringilla nulla elit dictum. Sollicitudin curae ridiculus eget donec vestibulum netus augue. Conubia tempor proin convallis netus vitae a. Tempus auctor eget metus nostra, cras sagittis sollicitudin."
        },
        {
            title: "Quisque fusce pulvinar curabitur potenti amet amet tempor.",
            body: "Semper adipiscing cras sit fusce lacus magna. Hac penatibus vulputate fringilla nulla elit dictum. Sollicitudin curae ridiculus eget donec vestibulum netus augue. Conubia tempor proin convallis netus vitae a. Tempus auctor eget metus nostra, cras sagittis sollicitudin."
        },
        {
            title: "Quisque fusce pulvinar curabitur potenti amet amet tempor.",
            body: "Semper adipiscing cras sit fusce lacus magna. Hac penatibus vulputate fringilla nulla elit dictum. Sollicitudin curae ridiculus eget donec vestibulum netus augue. Conubia tempor proin convallis netus vitae a. Tempus auctor eget metus nostra, cras sagittis sollicitudin."
        },
        {
            title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta nisi justo nec diam hac; vulputate erat. Luctus fringilla felis diam tristique posuere ridiculus arcu. Pulvinar inceptos odio lacus potenti luctus; pharetra aenean phasellus. Posuere natoque dis commodo porttitor et turpis mauris. Justo aenean feugiat fames aliquam augue elit rhoncus enim. Tincidunt feugiat leo nullam lacus pharetra ridiculus vestibulum."
        },
        {
            title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta nisi justo nec diam hac; vulputate erat. Luctus fringilla felis diam tristique posuere ridiculus arcu. Pulvinar inceptos odio lacus potenti luctus; pharetra aenean phasellus. Posuere natoque dis commodo porttitor et turpis mauris. Justo aenean feugiat fames aliquam augue elit rhoncus enim. Tincidunt feugiat leo nullam lacus pharetra ridiculus vestibulum."
        },
        {
            title: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Porta nisi justo nec diam hac; vulputate erat. Luctus fringilla felis diam tristique posuere ridiculus arcu. Pulvinar inceptos odio lacus potenti luctus; pharetra aenean phasellus. Posuere natoque dis commodo porttitor et turpis mauris. Justo aenean feugiat fames aliquam augue elit rhoncus enim. Tincidunt feugiat leo nullam lacus pharetra ridiculus vestibulum."
        },
        {
            title: "Quisque fusce pulvinar curabitur potenti amet amet tempor.",
            body: "Semper adipiscing cras sit fusce lacus magna. Hac penatibus vulputate fringilla nulla elit dictum. Sollicitudin curae ridiculus eget donec vestibulum netus augue. Conubia tempor proin convallis netus vitae a. Tempus auctor eget metus nostra, cras sagittis sollicitudin."
        },
        {
            title: "Quisque fusce pulvinar curabitur potenti amet amet tempor.",
            body: "Semper adipiscing cras sit fusce lacus magna. Hac penatibus vulputate fringilla nulla elit dictum. Sollicitudin curae ridiculus eget donec vestibulum netus augue. Conubia tempor proin convallis netus vitae a. Tempus auctor eget metus nostra, cras sagittis sollicitudin."
        },
        {
            title: "Quisque fusce pulvinar curabitur potenti amet amet tempor.",
            body: "Semper adipiscing cras sit fusce lacus magna. Hac penatibus vulputate fringilla nulla elit dictum. Sollicitudin curae ridiculus eget donec vestibulum netus augue. Conubia tempor proin convallis netus vitae a. Tempus auctor eget metus nostra, cras sagittis sollicitudin."
        },
    ]);
}
insertPostData(); */