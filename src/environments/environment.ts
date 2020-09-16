// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  host: "http://localhost:3003",

  baseUrl: "https://graph.microsoft.com/v1.0/users",
  scopeUri: ["user.read"], // ['api://d865bf85-0e22-42ec-9e74-bdcf0178f9af/retiro'],
  tenantId: "f8733e19-5615-4258-907e-cb8c982ffc34",
  uiClienId: "d655d54e-66a0-4557-98b5-228ceffef2cb", // "8c757de3-f9f8-41da-80ad-fdcdb15ff46d",
  redirectUrl: "http://localhost:4200",
};
