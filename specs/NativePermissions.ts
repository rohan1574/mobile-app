import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  requestOverlayPermission(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativePermissions'); 