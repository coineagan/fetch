import { spawn } from 'child_process';

export const runCLICmd = (args) => {
  return new Promise((resolve, reject) => {
    const child = spawn('npm', ['run', 'geo', '--', ...args], { stdio: ['ignore', 'pipe', 'pipe'] });
    
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (data) => { stdout += data.toString(); });
    child.stderr.on('data', (data) => { stderr += data.toString(); });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Child process exited with code ${code}. stderr: ${stderr}`));
      } else {
        resolve(stdout);
      }
    });
  });
};
