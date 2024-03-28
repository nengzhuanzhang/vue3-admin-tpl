
// 如果要改成yarn只需要把pnpm改为yarn就行
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  // 提示语，告诉别人只能使用pnpm下载
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
    ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}