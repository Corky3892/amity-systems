import { ArtifactLevel, ArtifactLevelType } from './artificat';

export * from './artificat';

// Export aliases for RedStarLevel and Type which correspond exactly to the ArtifactLevel.
export type RedStartLevelType = ArtifactLevelType;
export const RedStartLevel = ArtifactLevel;