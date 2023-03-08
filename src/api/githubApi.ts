import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
})