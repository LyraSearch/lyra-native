module.exports = {
    space: true,
    envs: ["es2021", "browser"],
    prettier: true,
    ignores: ['events.ts'],
    overrides: [
        // {
        //   files: "**/*.tsx",
        //   // envs: ['es2021', 'browser'],
        //   rules: {
        //     // "react/react-in-jsx-scope": "off",
        //     "unicorn/filename-case": [
        //       "error",
        //       {
        //         case: "pascalCase",
        //       },
        //     ],
        //     // "n/file-extension-in-import": "off",
        //     "import/extensions": "off",
        //   },
        // },
        {
          files: "**/*.ts{,x}",
          rules: {
            "import/extensions": "off",
            "n/file-extension-in-import": "off",
      },
        },
      ],
}