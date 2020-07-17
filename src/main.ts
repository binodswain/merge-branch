import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const token = core.getInput('repo-token', {required: true});
    const base = core.getInput('base', {required: true});
    const head = core.getInput('head', {required: true});

    const client = new github.GitHub(token);

    // check if source and dest branch have any diff file
    await mergeBranch(client, base, head);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}


async function mergeBranch(
  client: github.GitHub,
  base: string,
  head: string
) {
  await client.repos.merge({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    base,
    head,
  });
}

run();
