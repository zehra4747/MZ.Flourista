export const author = {
    name: 'author',
    type: 'document', // Set type as 'document' since it's a reference document.
    title: 'Author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Author Name',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true, 
            },
        },
    ],
};
