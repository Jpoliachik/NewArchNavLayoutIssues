## Issue 1: iOS Modal Screen Height
- `green` routes which have `presentation: "modal"` are rendered too tall. Notice how the dark green view should be pinned to the bottom, but it is rendered off screen.
- Navigate to `green`, then `green/modal`, then dismiss back to `green`. Notice how the height corrects itself. However, subsequent navigation to `green/modal` causes the height to flicker during transition, showing the incorrect height briefly.
- This issue only affects iOS. It happens consistently.

https://github.com/software-mansion/react-native-screens/issues/2587

| Screenshot | Video |
|:----------:|:-----:|
| <img src="https://github.com/user-attachments/assets/eda664a4-a1a6-4027-a760-ae97958a9686" width="400" /> | <video src="https://github.com/user-attachments/assets/ac8e4bc2-dce4-44e9-b891-b3fe24faeb1c" controls width="400"></video> |

## Issue 2: iOS Modal Transition Issue
On iOS when on the green/index screen, if you show the modal and then push to green/modal, the green/index view is removed before the next screen is pushed, causing visible display issues. This issue only affects iOS. It happens consistently.

https://github.com/software-mansion/react-native-screens/issues/2668
https://github.com/software-mansion/react-native-screens/issues/2578

| Video |
|:-----:|
| <video src="https://github.com/user-attachments/assets/b5995fdc-6fee-43eb-b165-07365ae8f4bc" controls width="400"></video> |

## Issue 3: View Height Flickering
On the blue/index screen, the view height flickers frequently when the Button is being pressed and during modal transitions. This is especially problematic for views that pin content to the bottom of the screen.

https://github.com/software-mansion/react-native-screens/issues/2607
https://github.com/software-mansion/react-native-screens/issues/2663


| Video |
|:-----:|
| <video src="https://github.com/user-attachments/assets/3e0a94d7-cf4e-43de-bf0d-294b5d57d105" controls width="400"></video> |

## Issue 4: Android headerLeft Pressable Issue
On Android physical devices, particularly lower-end ones like the Samsung Galaxy S9, the headerLeft back button's pressable area is not working correctly.

https://github.com/software-mansion/react-native-screens/issues/1981

| Video |
|:-----:|
| <video src="https://github.com/user-attachments/assets/c0e8a53a-9407-4d4b-a0a8-e5eed99591f5" controls width="400"></video> |
