let printed = false;

export function printConsoleBrand() {
  if (printed) return;
  printed = true;

  console.clear();

  console.log(
    `%c

██╗   ██╗ ███╗   ██╗ ██╗  ██╗   ██╗ ██╗ ███████╗ ██╗ ███████╗ ██╗ ██████╗ ███╗   ██╗
██║   ██║ ████╗  ██║ ██║  ██║   ██║ ██║ ██╔════╝ ██║ ██╔════╝ ██║██╔═══██╗████╗  ██║
██║   ██║ ██╔██╗ ██║ ██║  ██║   ██║ ██║ ███████╗ ██║ ███████╗ ██║██║   ██║██╔██╗ ██║
██║   ██║ ██║╚██╗██║ ██║  ╚██╗ ██╔╝ ██║ ╚════██║ ██║ ╚════██║ ██║██║   ██║██║╚██╗██║
╚██████╔╝ ██║ ╚████║ ██║   ╚████╔╝  ██║ ███████║ ██║ ███████║ ██║╚██████╔╝██║ ╚████║
 ╚═════╝  ╚═╝  ╚═══╝ ╚═╝    ╚═══╝   ╚═╝ ╚══════╝ ╚═╝ ╚══════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

                                •  S T U D I O  •

`,
    `
color:#9B6CFF;
font-weight:bold;
`,
  );

  console.log(
    "%c👋 Hello Developer!",
    `
font-size:18px;
font-weight:bold;
color:white;
`,
  );

  console.log(
    "%cThanks for taking a look behind the scenes.",
    "color:#bbbbbb;",
  );

  console.log(
    "%cEvery pixel and every line of code has been crafted with care.",
    "color:#bbbbbb;",
  );

  console.log(
    "%c🌍 https://univisionstudio.ir",
    `
color:#9B6CFF;
font-size:15px;
font-weight:bold;
`,
  );
}
