package com.turbomodulesexample

import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class NativeBatteryStatusModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "NativeBatteryStatus"
    }

    @ReactMethod
    fun getBatteryLevel(promise: Promise) {
        try {
            val intentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
            val batteryStatus = reactApplicationContext.registerReceiver(null, intentFilter)
            val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
            val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1

            if (level == -1 || scale == -1) {
                promise.reject("ERROR", "Unable to fetch battery level")
            } else {
                val batteryPercentage = level * 100 / scale.toFloat()
                promise.resolve(batteryPercentage)
            }
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
}
