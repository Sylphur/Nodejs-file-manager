export function getUsername(args) {
    const username = args.filter((arg) => {
      return arg.includes('username=')
    })
    if (username.length < 1) {
      console.error("Please enter a username in 'npm run start -- --username=your_username' format \n on Windows (powershell) it might not work, run 'npm run start -- username=your_username' instead");
      process.exit(0);
    }
    if (username.length > 1) {
      console.error("Please enter only one username");
      process.exit(0);
    }
    const user = username[0].split('=')[1];
    console.log(`Welcome to the File Manager, ${user}`);
    return user;
  }