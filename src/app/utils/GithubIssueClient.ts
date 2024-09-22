import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from '@octokit/rest';
import { GITHUB_REPO_NAME, GITHUB_USER_NAME } from '../constants/variables';

const octokit = new Octokit();

type ListIssuesResponse = GetResponseDataTypeFromEndpointMethod<typeof octokit.issues.list>;

type GetIssueResponse = GetResponseDataTypeFromEndpointMethod<typeof octokit.issues.get>;

export class GithubIssueClient {
  static async listIssues(): Promise<ListIssuesResponse> {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_USER_NAME}/${GITHUB_REPO_NAME}/issues`);
    return await response.json();
  }
  static async getIssue(id: number): Promise<GetIssueResponse> {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_USER_NAME}/${GITHUB_REPO_NAME}/issues/${id}`);
    return await response.json();
  }
}
