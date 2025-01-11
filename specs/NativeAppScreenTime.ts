import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getAllAppsScreenTime(): Promise<{[appName: string]: number}>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeAppScreenTime');