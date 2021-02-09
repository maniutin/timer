const args = process.argv.slice(2);
const speed = 1000;
for (const arg of args){
  if (args.length > 0 && arg > 0){
setTimeout(() => process.stdout.write('ding\n'), speed * arg);
  }
};