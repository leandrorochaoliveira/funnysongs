import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3DYWSSlpATZ8nObft3Zvz5xbgeSDC00A",
  authDomain: "funnysongs-6e51b.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "funnysongs-6e51b",
  storageBucket: "funnysongs-6e51b.appspot.com",
  messagingSenderId: "394666025887",
  appId: "app-id",
  measurementId: "G-8QNQD6M6TM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  app,
  db,
  auth,
  analytics
}