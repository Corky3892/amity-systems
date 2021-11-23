import { ArtifactLevel, ArtifactLevelType } from './artificat';

export * from './artificat';
export * from './BaseEntityWithValidation';


// Export aliases for RedStarLevel and Type which correspond exactly to the ArtifactLevel.
export type RedStarLevelType = ArtifactLevelType;
export const RedStarLevel = ArtifactLevel;

// Export alias for Module levels which are also tied to Artifact Levels
export type ModuleLevelType = ArtifactLevelType;