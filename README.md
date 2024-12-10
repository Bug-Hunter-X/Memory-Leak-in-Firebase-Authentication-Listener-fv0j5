# Firebase Authentication Listener Memory Leak
This repository demonstrates a common error in Firebase Authentication: forgetting to unsubscribe from the `onAuthStateChanged` listener.  Failure to unsubscribe results in memory leaks, which can lead to performance issues and crashes in your application.

## Bug
The `firebaseAuthBug.js` file showcases the flawed code.  The `onAuthStateChanged` listener is attached, but there's no mechanism to detach it when the component or process that uses it is no longer needed.

## Solution
The `firebaseAuthSolution.js` file provides the corrected code.  It demonstrates how to properly unsubscribe using the returned unsubscribe function.