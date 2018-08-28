const bookSchema = {
    version: 0,
    title: 'books schema',
    description: 'database of the books',
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        author: {
            type: 'string',
        },
    },
    required: ['name'],
};

export default bookSchema;
