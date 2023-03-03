import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
})