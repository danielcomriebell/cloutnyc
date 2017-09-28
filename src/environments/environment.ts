// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyCF_twgzsZjRwLvaxA0ovkhvTWHSYGCJ0Y",
    authDomain: "angular-auth-firebase-ee04b.firebaseapp.com",
    databaseURL: "https://angular-auth-firebase-ee04b.firebaseio.com",
    projectId: "angular-auth-firebase-ee04b",
    storageBucket: "angular-auth-firebase-ee04b.appspot.com",
    messagingSenderId: "605767945135"
  }
};
