import { useLoaderData } from '@remix-run/react';
import { GithubIssueClient } from '../utils/GithubIssueClient';
import { LoaderFunctionArgs } from '@remix-run/node';

export async function clientLoader({ params }: LoaderFunctionArgs) {
  if (!params.issue_number) throw new Error('missing issue number');
  const issue = await GithubIssueClient.getIssue(Number(params.issue_number));
  return { issue };
}

export default function TechArticle() {
  const { issue } = useLoaderData<typeof clientLoader>();
  if (!issue) return <div>loading...</div>;

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
    </div>
  );
}
