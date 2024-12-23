package com.applet.uni_applet;


import android.app.Activity;
import android.content.Intent;
import com.applet.feature.AppLibSdk;
import com.applet.feature.OnAppLibInitializeListener;
import com.hi.chat.uniplugin.ApplicationListener;
import com.hi.chat.uniplugin.PluginInit;
import com.hi.chat.uniplugin.feature.util.LogUtil;
import com.hi.chat.uniplugin_mqtt.event.MyFirebaseMessagingService;
import com.hi.chat.uniplugin_tool.ToolModule;

import io.dcloud.application.DCloudApplication;

public class MyApp extends DCloudApplication {

    private static final String TAG = "MyApp";

    public static int a = 0;

    @Override
    public void onCreate() {
        super.onCreate();

        PluginInit pluginInit = new PluginInit.Builder(this)
                .build();
        pluginInit.init();
        AppLibSdk.getInstance().initEngine(this, new OnAppLibInitializeListener() {
            @Override
            public void onInitFinished(boolean success) {
                LogUtil.t("app lib applet init finish " + success);
            }
        });


        registerActivityLifecycleCallbacks(new ApplicationListener(new ApplicationListener.IMyApplicationListener() {
            @Override
            public void onActivityChange(Activity activity) {
            }

            @Override
            public void onAppForegroundChange(boolean isForeground) {
                MyFirebaseMessagingService.sIsAppForeground = isForeground;
                Intent intent = new Intent(ToolModule.INTENT_ACTION_APPLICATION);
                intent.putExtra("action", isForeground ? 3 : 1);
                sendBroadcast(intent);
            }
        }));



    }
}
