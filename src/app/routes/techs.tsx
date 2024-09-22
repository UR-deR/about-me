import { Link, useLoaderData } from '@remix-run/react';
import { GithubIssueClient } from '../utils/GithubIssueClient';

export async function clientLoader() {
  const issues = await GithubIssueClient.listIssues();
  return { issues };
}

export default function Techs() {
  const { issues } = useLoaderData<typeof clientLoader>();
  if (!issues) return <div>loading...</div>;

  return (
    <div>
      {issues.map((issue) => (
        <div key={issue.id}>
          <Link to={`/techs/${issue.number}`}>{issue.title}</Link>
        </div>
      ))}
    </div>
  );
}
