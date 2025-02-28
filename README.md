## Issue 1: iOS Modal Screen Height
- `green` routes which have `presentation: "modal"` are rendered too tall. Notice how the dark green view should be pinned to the bottom, but it is rendered off screen.
- Navigate to `green`, then `green/modal`, then dismiss back to `green`. Notice how the height corrects itself. However, subsequent navigation to `green/modal` causes the height to flicker during transition, showing the incorrect height briefly.
- This issue only affects iOS. It happens consistently.
- Related Issues
  - https://github.com/software-mansion/react-native-screens/issues/2587

| Screenshot | Video |
|:----------:|:-----:|
| <img src="https://github.com/user-attachments/assets/eda664a4-a1a6-4027-a760-ae97958a9686" width="400" /> | <video src="https://github.com/user-attachments/assets/ac8e4bc2-dce4-44e9-b891-b3fe24faeb1c" controls width="400"></video> |

## Issue 2: View Height Flickering
- `blue` and `red` routes within a Stack flicker frequently while Buttons are being pressed, during navigation transitions, and during initial renders. This is especially problematic for views that pin content to the bottom of the screen.
- Related Issues
  - https://github.com/software-mansion/react-native-screens/issues/2607
  - https://github.com/software-mansion/react-native-screens/issues/2663

| Video |
|:-----:|
| <video src="https://github.com/user-attachments/assets/e49521c7-29b1-464a-afc9-fec3e100cb2a" controls width="400"></video> |

## Issue 3: headerLeft Pressable Issues
- `hitSlop` often does not work for headerLeft Pressables. This is easier to reproduce on `red` than `green`, strangely. 
On Android physical devices, particularly lower-end ones like the Samsung Galaxy S9, the headerLeft back button's pressable area is not working correctly.

https://github.com/software-mansion/react-native-screens/issues/1981

| iOS hitSlop |
|:-----:|
| <video src="https://github.com/user-attachments/assets/ea439add-f9c5-48ee-a3b2-406dee209984" controls width="400"></video> |
