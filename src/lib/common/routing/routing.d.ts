export type Link = {
	text: string;
	href: `/${string}`;
};

export type RouteMap = Record<string, Link>;
