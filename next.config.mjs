/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
	  styledComponents: true,
	},
	experimental: {
	  turbo: {
		rules: {
		  // Correcting the structure for JavaScript and TypeScript loaders
		  ".js": { loaders: [] },
		  ".ts": { loaders: [] },
		  ".tsx": { loaders: [] },
		},
	  },
	},
  };
  
  export default nextConfig;
  