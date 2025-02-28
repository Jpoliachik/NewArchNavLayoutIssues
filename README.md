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
- See video where I'm repeatedly clicking, but the press does not get picked up within the expected `hitSlop={20}` radius.
- This issue affects both iOS and Android

https://github.com/software-mansion/react-native-screens/issues/1981

| Video |
|:-----:|
| <video src="https://github.com/user-attachments/assets/ea439add-f9c5-48ee-a3b2-406dee209984" controls width="400"></video> |

## Issue 4: Android dismissTo freezes screen
- Steps to reproduce:
  - Navigate to `blue`
  - Navigate to `blue/subroute`
  - Present `green/modal`
  - `dismissTo(blue)`
- This causes several major issues. You'll see `blue/subroute` is still mounted behind `blue/index` with major layout issues. Then after tapping around the screen freezes and won't receive any touches. After navigating away and back, the screen goes blank.

https://github.com/software-mansion/react-native-screens/issues/2578

| Video |
|:-----:|
| <video src="https://github.com/user-attachments/assets/04f7ab68-6bc3-4a2f-bfe5-aa2f332dfdac" controls width="400"></video> |

