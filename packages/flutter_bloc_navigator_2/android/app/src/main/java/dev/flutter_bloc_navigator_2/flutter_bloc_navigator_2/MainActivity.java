package dev.flutter_bloc_navigator_2.flutter_bloc_navigator_2;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;

import io.flutter.embedding.android.FlutterActivity;

public class MainActivity extends FlutterActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        startService(new Intent(getBaseContext(), LifecycleService.class));
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}



