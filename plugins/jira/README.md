# Jira Plugin

This plugin connects Codex to Jira Cloud through the official Atlassian Rovo MCP server.

## Files

- `.codex-plugin/plugin.json`: Plugin manifest shown in the Codex marketplace
- `.mcp.json`: Remote MCP server configuration
- `assets/jira-icon.svg`: Local icon used by the plugin UI

## Prerequisites

- An Atlassian Cloud organization with Jira enabled
- A Jira user account with the permissions you want Codex to use
- Atlassian Rovo MCP server enabled by your Atlassian admin

## Connection flow

1. Install the local `jira` plugin from the repo marketplace.
2. Start the connection. The plugin points Codex at `https://mcp.atlassian.com/v1/mcp`.
3. Complete the Atlassian OAuth 2.1 consent flow in the browser when prompted.
4. Use Jira tools through Codex.

## Admin checks

- Atlassian documents `chatgpt.com` as an Atlassian-supported OAuth domain.
- If your organization uses IP allowlists, the MCP calls must also come from allowed IP ranges.
- API token authentication is optional and only works if your Atlassian admin enables it in Atlassian Rovo MCP server settings.

## Quick verification

After installation, test with one of these prompts:

- `List the Jira projects I can access.`
- `Find my open Jira issues and summarize blockers.`
- `Create a Jira issue from this bug report draft.`

## References

- Atlassian Rovo MCP getting started: https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/
- Atlassian supported MCP domains: https://support.atlassian.com/security-and-access-policies/docs/available-atlassian-rovo-mcp-server-domains/
- Atlassian OAuth setup: https://support.atlassian.com/atlassian-rovo-mcp-server/docs/configuring-oauth-2-1/
- Atlassian API token auth: https://support.atlassian.com/atlassian-rovo-mcp-server/docs/configuring-authentication-via-api-token/
