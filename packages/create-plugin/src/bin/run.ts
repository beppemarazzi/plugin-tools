#!/usr/bin/env node

import minimist from 'minimist';
import { generate, update, migrate, version, provisioning } from '../commands/index.js';
import { isUnsupportedPlatform } from '../utils/utils.os.js';
import { argv, commandName } from '../utils/utils.cli.js';
import Enquirer from 'enquirer';

// Exit early if operating system isn't supported.
if (isUnsupportedPlatform()) {
  console.error(
    "Unsupported operating system 'Windows' detected. Please use WSL with create-plugin. For more info visit: https://grafana.com/developers/plugin-tools/troubleshooting#i-am-getting-unsupported-operating-system-windows-detected-please-use-wsl-with-create-plugin"
  );
  const res = await new Enquirer<{ runOnWindowsAnyway: boolean }>().prompt({
    name: 'runOnWindowsAnyway',
    type: 'confirm',
    message: 'Do you want to proceed anyway (it may not work as expected) on *UNSUPPORTED* Windows operating system?',
    initial: false,
  });
  if (!res.runOnWindowsAnyway) {
    process.exit(1);
  }
}

const commands: Record<string, (argv: minimist.ParsedArgs) => void> = {
  migrate,
  generate,
  update,
  version,
  provisioning,
};
const command = commands[commandName] || 'generate';

command(argv);
