const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/* 
    GET / HOME
 */
router.get('', async (req, res) => {
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

});

router.get('/about', (req, res) => {
    res.render('about');
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