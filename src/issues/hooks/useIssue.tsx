import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Issue } from '../interfaces';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';

const getIsseInfo = async (issueNumber: number):Promise<Issue> => {

	await sleep(2)
	const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`)
	console.log(data)
	return data;
}

export const useIssue = (issueNumber: number) => {

	const issueQuery = useQuery(
		[ 'issue', issueNumber ],
		() => getIsseInfo(issueNumber),
	)

	return {}
}
