export type InfoCard = {
	title: string;
	description: string;
};

export type InfoCardLink = {
	href: string;
} & InfoCard;
