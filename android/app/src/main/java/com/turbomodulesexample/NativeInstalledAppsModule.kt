package com.turbomodulesexample

import android.content.pm.PackageManager
import android.content.pm.ApplicationInfo
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.turbomodule.core.interfaces.TurboModule
import com.turbomodulesexample.NativeInstalledAppsSpec
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableArray
import com.facebook.react.bridge.WritableMap

class NativeInstalledAppsModule(reactContext: ReactApplicationContext) : NativeInstalledAppsSpec(reactContext) {

  override fun getName() = NAME

  override fun getInstalledApps(promise: Promise) {
    val pm: PackageManager = reactApplicationContext.packageManager
    val packages = pm.getInstalledApplications(PackageManager.GET_META_DATA)
    val appsList: WritableArray = Arguments.createArray()

    val excludeApps = arrayOf(
      "YouTube","Google","Download Manager","Messages","Sounds","Personal Safety","Downloads","Google Play Store","Android Accessibility Suite","Camera","SIM Toolkit","Clock","Gmail","Bluetooth","Digital Wellbeing","Phone","Drive","Maps","Contacts","Chrome","Photos","Calendar","Files","Settings","YouTube Music","Gboard"
    )

    for (packageInfo in packages) {
      if( (packageInfo.flags and ApplicationInfo.FLAG_SYSTEM) != 0 ){
        if (pm.getApplicationLabel(packageInfo).toString() !in excludeApps) {
          continue;
        }
      }

      val app: WritableMap = Arguments.createMap()
      app.putString("appName", pm.getApplicationLabel(packageInfo).toString())
      app.putString("packageName", packageInfo.packageName)
      app.putBoolean("isSystemApp", (packageInfo.flags and ApplicationInfo.FLAG_SYSTEM) != 0)
      appsList.pushMap(app)
    }

    promise.resolve(appsList)
  }

  companion object {
    const val NAME = "NativeInstalledApps"
  }
}