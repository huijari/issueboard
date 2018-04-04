const base = 'https://api.github.com'

const partition = (acc, issue) => {
	if (issue.assignee)
		acc.doing.push(issue)
	else
		acc.ready.push(issue)
	return acc
}

export const getColumns = async (owner, name) => {
	const issuesUrl = `${base}/repos/${owner}/${name}/issues`
	const done = await fetch(`${issuesUrl}?state=closed`).then(r => r.json())
	const openIssues = await fetch(`${issuesUrl}?state=open`).then(r => r.json())
	const { ready, doing } = openIssues.reduce(partition, { ready: [], doing: [] })

	return [
		{
			name: 'Ready',
			issues: ready
		},
		{
			name: 'In Progress',
			issues: doing
		},
		{
			name: 'Done',
			issues: done
		}
	]
}
