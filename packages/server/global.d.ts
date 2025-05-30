declare function getPublicUrlOrPath(
    isEnvDevelopment: boolean,
    homepage: string | undefined,
    envPublicUrl: string | undefined,
): string;

export = getPublicUrlOrPath;