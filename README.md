Issues

- on `green/index`, the red view should stop at correct safeArea bottom inset. The height of the entire screen is too tall. When you navigate to `green/green-modal`, then back here, the height updates to the correct height. Then once its the correct height, when you havigate back to `green/green-modal` again, the height of `green/index` flickers to show it too tall during the transition.
