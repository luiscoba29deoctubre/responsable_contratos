// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
    production: false,
    baseUrl: "https://graph.microsoft.com/v1.0/users",
    scopeUri: ["user.read"],
    tenantId: "f8733e19-5615-4258-907e-cb8c982ffc34",
    uiClienId: "8c757de3-f9f8-41da-80ad-fdcdb15ff46d",
    redirectUrl: "http://localhost:4200",
};
//# sourceMappingURL=environment.js.map