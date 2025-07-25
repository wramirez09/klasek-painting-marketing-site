import { z } from 'zod';

export const maxMessageLength = 500;

export const customerTypes = [
	'Yes, I am a potential new customer',
	"No, I'm an existing customer",
	'Other'
] as const;

export const contactSchema = z.object({
	firstName: z
		.string()
		.min(1, { message: 'Enter first name' })
		.max(50, { message: 'First name too long' }),
	lastName: z
		.string()
		.min(1, { message: 'Enter last name' })
		.max(50, { message: 'Last name too long' }),
	email: z.string().email({ message: 'Enter valid email ' }),
	phone: z
		.string()
		.min(7, { message: 'Phone must be at least 7 digits' })
		.max(15, { message: 'Phone number too long' }),
	streetAddress: z
		.string()
		.min(1, { message: 'Enter valid address' })
		.max(150, { message: 'Address too long' }),
	isNewCustomer: z.string(z.enum(customerTypes)).min(1, { message: 'Select option' }).default(''),
	message: z.string().max(maxMessageLength, { message: 'Message too long' }).optional(),
	'cf-turnstile-response': z.string(),
	sessionId: z.string()
});

export type ContactSchema = typeof contactSchema;

// Dummy form data, exluding turnstile response and session ID
export const dummyContactSchemaData: Omit<
	z.infer<ContactSchema>,
	'cf-turnstile-response' | 'sessionId'
> = {
	firstName: 'John',
	lastName: 'Doe',
	email: 'email@email.com',
	phone: '1234567',
	streetAddress: '123 Fake St',
	isNewCustomer: customerTypes[0],
	message: 'Hello world'
};
