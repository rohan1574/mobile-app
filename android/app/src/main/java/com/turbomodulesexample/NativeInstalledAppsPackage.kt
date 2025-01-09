package com.turbomodulesexample

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeInstalledAppsPackage : TurboReactPackage() {

  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
    if (name == NativeInstalledAppsModule.NAME) {
      NativeInstalledAppsModule(reactContext)
    } else {
      null
    }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      NativeInstalledAppsModule.NAME to ReactModuleInfo(
        _name = NativeInstalledAppsModule.NAME,
        _className = NativeInstalledAppsModule.NAME,
        _canOverrideExistingModule = false,
        _needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true
      )
    )
  }
}