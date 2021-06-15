import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/forbin-capital/website/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork forbin-capital/website on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/forbin-capital/website"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star forbin-capital/website on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
