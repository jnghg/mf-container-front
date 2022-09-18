export default async function dynamicFederation(scope: any, module: string) {
  //
  const container = window[scope];

  //@ts-ignore
  await container.init(__webpack_share_scopes__.default);
  //@ts-ignore
  return container.get(module).then((factory: any) => {
    const Module = factory();
    return Module;
  });
}

export function dynamicFederationStore(
  scope: any,
  module: string,
  value: string
) {
  //
  const container = window[scope];

  //@ts-ignore
  return container.get(module).then((factory: any) => {
    const Module = factory();
    return Module[value];
  });
}
