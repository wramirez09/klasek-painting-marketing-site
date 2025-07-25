import * as fs from 'node:fs';
import path from 'path';

// Get a list of all routes in the project
function getRouteList(directoryPath = path.join(process.cwd(), 'src/routes')): string[] {
	const svelteRouteList: string[] = [];

	// Read all files and directories in the current directory
	fs.readdirSync(directoryPath, { withFileTypes: true }).forEach((dirent) => {
		const fullPath = path.join(directoryPath, dirent.name);

		// If the current item is a file and ends with '+page.svelte', add it to the list
		if (dirent.isFile() && dirent.name.endsWith('+page.svelte')) {
			// Convert the full path to a web path
			let webPath = fullPath
				.replace(path.join(process.cwd(), 'src/routes'), '')
				.replace('/+page.svelte', '');

			// Remove group directories from the path
			webPath = webPath
				.split('/')
				.filter((segment) => !segment.startsWith('(') || !segment.endsWith(')'))
				.join('/');

			webPath = webPath.startsWith('/') ? webPath : '/' + webPath;
			svelteRouteList.push(webPath);
		} else if (dirent.isDirectory()) {
			// If the current item is a directory, recursively call getRouteList
			svelteRouteList.push(...getRouteList(fullPath));
		}
	});

	return svelteRouteList;
}

// Routes to exclude from testing
const excludedRoutes: string[] = ['/blog', '/blog/[title]'];

// Routes that are dynamically generated
const dynamicRoutes: string[] = [];

export const routeList = [
	...getRouteList().filter((route) => !excludedRoutes.includes(route)),
	...dynamicRoutes
];
