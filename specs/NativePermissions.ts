import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  // Display Over other apps
  checkOverlayPermission(): Promise<boolean>;
  requestOverlayPermission(): void;

  // Usage Statistics
  checkUsagePermission(): Promise<boolean>;
  requestUsagePermission(): void;

  // Default Launcher
  isDefaultLauncher(): Promise<boolean>;
  openDefaultAppsSettings(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativePermissions');