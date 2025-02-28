Issues

- on `green/index`, the red view should stop at correct safeArea bottom inset. The height of the entire screen is too tall. When you navigate to `green/modal`, then back here, the height updates to the correct height. Then once its the correct height, when you havigate back to `green/modal` again, the height of `green/index` flickers to show it too tall during the transition. Not an issue on Android.
- iOS: on green/index, show the modal, then push green/modal. green/index is removed before the next screen is pushed - clear visual issues. Not an issue on Android.
- on blue/index the view height flickers often. When the TouchableOpacity is pressed & when the push modal is transitioning.
- on Android physical device, the headerLeft back button pressable is not working. See video using Samsung Galaxy S9. This is much easier to reproduce on a physical lower-end Android device.
