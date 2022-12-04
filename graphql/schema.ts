import { gql } from 'apollo-server-micro';

export const typeDefs = gql` 
	type User {
		id: String
		name: String
		email: String
		image: String
		role: Role
		bookmarks: [Link]
	}

	enum Role {
		ADMIN
		USER
	}
	
	type Link {
	id: String
	title: String
	description: String
	url: String
	imageUrl: String
	category: String
	users: [User]
	}

	type Query {
	links: [Link]!
	}
`;