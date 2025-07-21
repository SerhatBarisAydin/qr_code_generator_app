# QR Code Generator Mobile Application

## 🚀 Overview

This project is a mobile application that allows users to create QR codes and scan existing QR codes. The project is being developed with the goal of personal growth, adhering to modern software development methodologies such as **AGILE**, **SDLC (Software Development Life Cycle)**, and **CI/CD (Continuous Integration/Continuous Delivery)** principles. Trello is used for project management.

## ✨ Features

### Completed

* **QR Code Generation:** Users can easily create QR codes from data such as text or URLs.

* **QR Code Saving:** Ability to save generated QR codes as PNG format to the user's device gallery.

* **Centralized Color Management:** All application colors are managed from a single JavaScript file (`src/theme/colors.js`), focused on dark mode and categorized.

* **Centralized Asset Management:** Images, animations, and other assets are managed from a single JavaScript file (`src/config/assets.js`).

* **Anonymous Authentication:** Thanks to Firebase Anonymous Authentication, users can start using the application without creating an account, and their data can be stored specifically for their device.

* **State Management:** **Zustand** library is used for application-wide state management.

### In Development / Planned

* **QR Code Scanning:** Functionality to scan physical or on-screen QR codes using the device camera.

* **QR Code History:** Storing and displaying the history of generated and scanned QR codes within the application.

* **Different QR Code Types:** Creating QR codes for various data types such as Wi-Fi, phone numbers, email, SMS.

* **QR Code Customization:** Changing the color of generated QR codes and adding a logo to them.

* **QR Code Sharing:** Sharing generated or scanned QR codes with other applications.

* **Image Storage Solution:** Integration of an alternative cloud storage solution like Cloudinary instead of Firebase Cloud Storage for QR code images and other media files.

* **Publishing to Play Store:** Publishing the application on the Google Play Store.

## 🛠️ Technologies Used

* **Mobile Development:** [React Native](https://reactnative.dev/) (with Expo CLI)

* **Backend & Database:** [Firebase](https://firebase.google.com/) (Firestore and Authentication services)

* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)

* **QR Code Generation:** [`react-native-qrcode-svg`](https://github.com/vfritz/react-native-qrcode-svg)

* **QR Code Saving:** [`react-native-view-shot`](https://github.com/gre/react-native-view-shot), [`expo-sharing`](https://docs.expo.dev/versions/latest/sdk/sharing/), [`expo-media-library`](https://docs.expo.dev/versions/latest/sdk/media-library/)

* **Animations:** [`lottie-react-native`](https://github.com/lottie-react-native/lottie-react-native)

* **Navigation:** [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator/) (and other `@react-navigation` packages)

* **Other Utility Libraries:**

    * `react-native-svg`

    * `expo-file-system`

    * `react-native-dropdown-picker`

    * `react-native-toast-message`

    * `react-native-gesture-handler`, `react-native-reanimated`, `react-native-safe-area-context`, `react-native-screens` (React Navigation dependencies)

## 🚀 Setup and Running

### Prerequisites

* Node.js (LTS version recommended)

* npm or Yarn

* Expo CLI (`npm install -g expo-cli` or `yarn global add expo-cli`)

* A Google Firebase account and a created Firebase project.

### Development Environment Setup

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/qr-code-generator.git](https://github.com/YOUR_USERNAME/qr-code-generator.git)
    cd qr-code-generator
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Firebase Integration:**

    * Go to your created project in the Firebase console.

    * **For Android:** Register your app and copy the `google-services.json` file to the `android/app/` directory. Update `android/build.gradle` and `android/app/build.gradle` files according to Firebase documentation.

    * **For iOS:** Register your app and add the `GoogleService-Info.plist` file to the `Runner` folder in Xcode. Install pods in `ios/Podfile` (`cd ios && pod install && cd ..`).

    * Initialize Firebase in `App.js` (including anonymous authentication).

### Running the Application

1.  **Start the Development Server:**

    ```bash
    npm start
    # or
    yarn start
    ```

2.  **Run the Application on Your Device:**

    * Download the Expo Go app on your phone (from iOS App Store or Google Play Store).

    * Scan the QR code displayed in the terminal with the Expo Go app.

    * Or to run on a simulator/emulator:

        ```bash
        npm run android # On Android emulator
        npm run ios     # On iOS simulator
        ```

## 🤝 Contributing

Although this project is created for personal development, I am always open to learning and collaboration. Any feedback, suggestions, or contributions (especially regarding AGILE, SDLC, CI/CD practices) are welcome.

1.  Fork the repository.

2.  Create a new feature branch (`git checkout -b feature/AmazingFeature`).

3.  Make your changes and commit them (`git commit -m 'Add some AmazingFeature'`).

4.  Push to the branch (`git push origin feature/AmazingFeature`).

5.  Open a Pull Request.

## 📄 License

This project is open-source and licensed under the MIT License. See the `LICENSE` file for more details.
