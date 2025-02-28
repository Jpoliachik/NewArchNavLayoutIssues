## Issue 1: iOS Modal Screen Height

See how `green/index` doesn't properly respect the safe area bottom inset. The screen height is incorrectly rendered too tall. When navigating to `green/modal` and back, the height corrects itself. However, subsequent navigation to `green/modal` causes the height to flicker during transition, showing the incorrect height briefly. This issue only affects iOS. It happens consistently.

https://github.com/software-mansion/react-native-screens/issues/2587

|                                                Screenshot                                                 |                                                           Video                                                            |
| :-------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/e1e1105f-b4d0-4535-9717-f12a3fb94355" width="400" /> | <video src="https://github.com/user-attachments/assets/71898fad-d23c-4d62-b6f5-21fe46e5c2ee" controls width="400"></video> |

## Issue 3: View Height Flickering

On the blue/index screen, the view height flickers frequently when the Button is being pressed and during modal transitions. This is especially problematic for views that pin content to the bottom of the screen.

https://github.com/software-mansion/react-native-screens/issues/2607
https://github.com/software-mansion/react-native-screens/issues/2663

|                                                           Video                                                            |
| :------------------------------------------------------------------------------------------------------------------------: |
| <video src="https://github.com/user-attachments/assets/3e0a94d7-cf4e-43de-bf0d-294b5d57d105" controls width="400"></video> |

## Issue 4: Android headerLeft Pressable Issue

On Android physical devices, particularly lower-end ones like the Samsung Galaxy S9, the headerLeft back button's pressable area is not working correctly.

https://github.com/software-mansion/react-native-screens/issues/1981

|                                                           Video                                                            |
| :------------------------------------------------------------------------------------------------------------------------: |
| <video src="https://github.com/user-attachments/assets/c0e8a53a-9407-4d4b-a0a8-e5eed99591f5" controls width="400"></video> |
