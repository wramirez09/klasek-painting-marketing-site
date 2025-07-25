export type BlogPostData = {
	title: string;
	datePublished: string;
	meta: string;
	body: string;
	image: string;
};

export type BlogPreviewData = { href: string } & Pick<
	BlogPost,
	'title' | 'datePublished' | 'meta' | 'image'
>;
