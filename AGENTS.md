# Repository guidance

This repository owns only the public frontend, its application/test logic, and
the minimal `runs-on` selectors required to execute GitHub Actions jobs.

GitHub Actions self-hosted runner-unit infrastructure is owned by
`unng-lab/endlessnet-observability`. Installation, registration, configuration,
updates, `actions.runner.*` systemd units and drop-ins, restart and resource-limit
policy, runner host inventory, SSH rollout, recovery/rollback, and guarded rollout
must be implemented and documented there, not in this repository.

Ordinary use of `RUNNER_TEMP` in jobs is allowed. Do not confuse GitHub Actions
runner-unit infrastructure with the application's own runtime or service units.
If a job needs a new repository- or organization-level self-hosted runner label,
document the exact OS, architecture, capabilities, and label requirement for
`unng-lab/endlessnet-observability` instead of adding runner management here.
