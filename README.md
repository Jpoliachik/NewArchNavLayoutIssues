Issues

- on `green/index`, the red view should stop at correct safeArea bottom inset. The height of the entire screen is too tall. When you navigate to `green/modal`, then back here, the height updates to the correct height. Then once its the correct height, when you havigate back to `green/modal` again, the height of `green/index` flickers to show it too tall during the transition. Not an issue on Android.
- Android: green/modal has SafeAreaView is different height than green/index. Not an issue on iOS.
- iOS: on green/index, show the modal, then push green/modal. green/index is removed before the next screen is pushed - clear visual issues. Not an issue on Android.
