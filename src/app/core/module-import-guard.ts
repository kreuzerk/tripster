/**
 * Created by kevinkreuzer on 03.08.17.
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import core modules in the AppModule only.`);
    }
}