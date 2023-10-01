const pg = require("pg")

const client = new pg.Client()

await client.connect()

const createBlogTextTable = 
`
CREATE TABLE public.blog_text
(
    blog_id integer NOT NULL,
    blog_title text,
    blog_content text,
    PRIMARY KEY (blog_id)
);

ALTER TABLE IF EXISTS public.blog_text
    OWNER to adi;
`

const createBlogImagesTable = 
`
CREATE TABLE public.blog_images
(
    blog_id integer NOT NULL,
    image_id character varying(64),
    PRIMARY KEY (image_id)
);

ALTER TABLE IF EXISTS public.blog_images
    OWNER to adi;
`

async function createTables() {
    await client.query(createBlogTextTable);
    await client.query(createBlogImagesTable)
}

await client.end()
