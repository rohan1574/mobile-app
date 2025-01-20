import { NativeModules } from 'react-native';

type NativeBatteryStatusType = {
  getBatteryLevel(): Promise<number>;
};

const { NativeBatteryStatus } = NativeModules;

export default NativeBatteryStatus as NativeBatteryStatusType;
