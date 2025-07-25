import { shortTestimonials } from './shortTestimonials';
import daniel from '$images/testimonials/daniel-gast.webp';
import keith from '$images/testimonials/keith-castellano.webp';
import sandb from '$images/testimonials/s-&-b-appliances-sales-group.webp';
import jm from '$images/testimonials/jm-detloff.webp';
import susan from '$images/testimonials/susan-lawless.webp';
import roseann from '$images/testimonials/roseann-c.webp';
import laura from '$images/testimonials/laura-w.webp';
import louise from '$images/testimonials/louise-p.webp';
import debbie from '$images/testimonials/debbie-g.webp';
import john from '$images/testimonials/john-b.webp';

export interface TestimonialData {
	avatar: string;
	name: string;
	quote: string;
	source: 'google' | 'yelp';
}

export const testimonials: TestimonialData[] = [
	...shortTestimonials,
	{
		avatar: daniel,
		name: 'Daniel Gast',
		quote:
			'Pete and his guys painted the entire interior of our 2 story house. They did a awesome job and were very neat and professional. Best value by far.',
		source: 'google'
	},
	{
		avatar: roseann,
		name: 'Roseann C.',
		quote:
			'Great customer service and responsiveness from first moment we made contact. Professional and courteous, no mess left behind. Will be using them again.',
		source: 'yelp'
	},
	{
		avatar: keith,
		name: 'Keith Castellano',
		quote:
			'Very Professional, Kind, and knowledgable. Pete helped us with the color coordination and was very proficient. I would highly recommend Klasek painting to anyone.',
		source: 'google'
	},
	{
		avatar: laura,
		name: 'Laura W.',
		quote:
			"Fantastic, hard working, talented group. I can't say enough about there professionalism, cleanliness, and being consistent. It's not easy staining A large house and I commend them for climbing those tall ladders. Thank you Pete and staff for perfection.",
		source: 'yelp'
	},
	{
		avatar: sandb,
		name: 'S & B Appliances Sales Group',
		quote:
			'Klasek Painting did an excellent job on our building when it was time for a new look !  Great work Pete, we would gladly recommend you to anyone we know looking for a top notch painting company',
		source: 'google'
	},
	{
		avatar: louise,
		name: 'Louise P.',
		quote:
			"Didn't realize about Yelp. The best service ever. Thoroughly and completely repaired and painted the outside of my concrete coach house. No paint spatters, complete clean up. They actually listen to your concerns. Scheduled and on time. Will definitely use again soon.",
		source: 'yelp'
	},
	{
		avatar: jm,
		name: 'JM Detloff',
		quote:
			'Great painter. Stained exterior cedar. Cleaned up every afternoon. Fantastic end results, looks perfect!',
		source: 'google'
	},
	{
		avatar: debbie,
		name: 'Debbie G.',
		quote:
			'Klasek painting was excellent. Excellent service, professional, on time and flexible when requesting changes to the scope of the project. They painted almost every room in our house. Cleaned up after every work day. Very happy with their work. I would recommend them to anyone who asked.',
		source: 'yelp'
	},
	{
		avatar: susan,
		name: 'Susan Lawless',
		quote:
			'Highly recommend.  They have the best combination of good pricing but really superior work.  I will definately call them again.',
		source: 'google'
	},
	{
		avatar: john,
		name: 'John B.',
		quote:
			"klasek Painting is the best I've seen. They came in and did our entire home interior in preparation for sale. Fantastic work, timely, neat and clean. I was amazed at the speed, yet attention to detail. The price was  very reasonable for such a professional job. I have found my company for all my future painting needs.",
		source: 'yelp'
	}
];
