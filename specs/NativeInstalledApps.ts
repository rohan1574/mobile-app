import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getInstalledApps(): Promise<Array<{ appName: string; packageName: string; isSystemApp: boolean }>>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeInstalledApps');