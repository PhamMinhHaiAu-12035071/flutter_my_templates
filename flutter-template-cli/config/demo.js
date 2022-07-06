import terminalImage from 'terminal-image';

(async function () {
  console.log('          ');
  const result = await terminalImage.file('/Users/phamminhhaiau/Desktop/demo/download.png', {
    width: '50%',
    height: '50%',
  });
  console.log(`     ${result}`);
})();
