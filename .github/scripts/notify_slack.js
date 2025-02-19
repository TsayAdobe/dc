const fs = require('fs');

async function main() {
  let diffJson;

  if (process.argv.length === 3) {
    diffJson = process.argv[2];
  } else {
    console.error('Usage: node notify_slack.js [diff.json]');
    process.exit(1);
  }

  let diffs = [];

  if (diffJson && fs.existsSync(diffJson)) {
    diffs = JSON.parse(fs.readFileSync(diffJson));
  }

  if (
    diffs.added.length === 0 &&
    diffs.removed.length === 0 &&
    diffs.changed.length === 0
  ) {
    return;
  }

  let message = '';

  if (diffs.added.length > 0) {
    message += `*Added: ${diffs.added.length}*\n`;
    message += diffs.added.slice(0, 10)
      .map((x) => `* <https://www.adobe.com${x}|${x}>`)
      .join('\n');
    if (diffs.added.length > 10) {
      message += '\n* more...'
    }
  }
  if (diffs.removed.length > 0) {
    message += `*Removed: ${diffs.removed.length}*\n`;
    message += diffs.removed.slice(0, 10)
      .map((x) => `* <https://www.adobe.com${x}|${x}>`)
      .join('\n');
    if (diffs.removed.length > 10) {
      message += '\n* more...'
    }    
  }
  if (diffs.changed.length > 0) {
    message += `*Changed: ${diffs.changed.length}*\n`;
    message += diffs.changed.slice(0, 10)
      .map((x) => `* <https://www.adobe.com${x}|${x}>`)
      .join('\n');
    if (diffs.changed.length > 10) {
      message += '\n* more...'
    }       
  }

  console.log(message);

  fetch(`https://hooks.slack.com/services/${process.env.SLACK_WEBHOOK}`, {
    method: 'POST',
    body: JSON.stringify({
      text: message,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      response.text().then(text => { throw new Error(text) });
    }
  });
}

main();
