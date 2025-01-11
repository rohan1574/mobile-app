package com.turbomodulesexample

import android.util.Log;
import android.app.AppOpsManager
import android.app.usage.UsageStats
import android.app.usage.UsageStatsManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.provider.Settings
import com.turbomodulesexample.NativeAppScreenTimeSpec
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

class NativeAppScreenTimeModule(reactContext: ReactApplicationContext) : NativeAppScreenTimeSpec(reactContext) {

  override fun getName() = NAME

  private fun convertToWritableMap(map: Map<String, Long>): WritableMap {
    val writableMap = Arguments.createMap()
    for ((key, value) in map) {
        writableMap.putDouble(key, value.toDouble())
    }
    return writableMap
  }

  private fun getGrantStatus(): Boolean {
    val appOps = reactApplicationContext.getSystemService(Context.APP_OPS_SERVICE) as AppOpsManager
    val mode = appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, android.os.Process.myUid(), reactApplicationContext.packageName)
    return when (mode) {
        AppOpsManager.MODE_ALLOWED -> true
        AppOpsManager.MODE_DEFAULT -> reactApplicationContext.checkCallingOrSelfPermission(android.Manifest.permission.PACKAGE_USAGE_STATS) == PackageManager.PERMISSION_GRANTED
        else -> false
    }
  }

  override fun getAllAppsScreenTime(promise: Promise) {
    if (!getGrantStatus()) {
      reactApplicationContext.startActivity(Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
      promise.reject("PERMISSION_DENIED", "Usage stats permission is not granted")
      return
    }

    val usageStatsManager = reactApplicationContext.getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
    val endTime = System.currentTimeMillis()
    val startTime = endTime - 1000 * 60 * 60 * 24 // Last 24 hours

    val usageStatsList: List<UsageStats> = usageStatsManager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, startTime, endTime)
    val screenTimeMap = mutableMapOf<String, Long>()

    for (usageStats in usageStatsList) {
      val packageName = usageStats.packageName
      val totalTimeInForeground = usageStats.totalTimeInForeground
      screenTimeMap[packageName] = totalTimeInForeground
    }

    val writableMap = convertToWritableMap(screenTimeMap)
    promise.resolve(writableMap)
  }

  companion object {
    const val NAME = "NativeAppScreenTime"
  }
}