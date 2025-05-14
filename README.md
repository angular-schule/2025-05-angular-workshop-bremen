<img src="https://assets.angular.schule/header-intensivworkshop2.png">

#### **with Johannes Hoppe**

<hr>

**Welcome – great to have you with us!**  
In this repository, you will find all the preparation details and, during the workshop, the source code of our sample application.


# 🎮 NEW: RxJS Playground

You can either  
* download the code as a ZIP file: [rxjs-playground.zip](https://cdn.angular.schule/slides/likjhgzuzhjktzrghj-bremen/rxjs-playground.zip)<br>**or**<br>
* clone this repository using Git and switch to the `rxjs-playground` folder.

```bash
cd rxjs-playground
npm install
ng serve
```

Open the browser at [http://localhost:**4300**](http://localhost:4300) (!) to view the application.  
The exercises are located in the folder `rxjs-playground/src/app/exercises/`.



# ✅ Preparation

To get started right away, please complete a few setup steps.  
The entire installation will take about 30 minutes.  

## 1.) Required Software

1. **Node.js 18, 20, or 22** (latest minor version): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
   + [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
   _or_ another suitable IDE like **IntelliJ/WebStorm**
   + We recommend installing a selection of extensions for Visual Studio Code.  
     We’ve prepared an Extension Pack that sets everything up for you:  
     [Angular-Schule: Extension Pack (Visual Studio Code only)](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)

## 2.) Proxy?

If your company network uses a proxy for internet access, special settings may be required.  
We’ve created a guide for this:  
https://workshop.angular.schule/proxy  

If you encounter proxy-related issues, please contact us, and we’ll find a solution.


## 3.) Install Packages

The Angular CLI is the official build tool for Angular. You can install the CLI globally using the following command:

```bash
npm install --location=global @angular/cli
```

⚠️ Please check the installed versions afterward to ensure we are all on the same version during the workshop:

```
node -v
> Expected: 18.19.x or higher, 20.11.x or higher, or 22.x (but not 19.x or 21.x!)

ng version
> Expected: 19.x.x (!)
```

If you already have an older version of the Angular CLI installed, please run the installation again.  
The latest version should always be installed globally.


## 4.) Create the Starter Project

Please create the practice project before the workshop starts.  
The Angular CLI takes care of most steps for us. We’ll explain each parameter in detail during the workshop!

> ⚠️ **Do not create the project on a network drive** but directly on the local hard drive!

Run the following commands in your working directory:

```bash
ng new book-rating --style=scss --no-ssr
cd book-rating
ng serve
```

The installation might take a while with a slow internet connection.  
Be patient when it says `Installing packages (npm)`!


> You should see a website with the text *"Hello, book-rating"* at http://localhost:4200!

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_ng17.png)

Then stop the running web server with Ctrl + C.



## 5.) Test Environment Check

Please check if the following command runs without errors:

```bash
ng test
```

After that, you can stop the process with Ctrl + C.


## 6.) Install Styles

Please run this command **in the project folder `book-rating`** to install our CSS styles package.  
You can ignore any warnings during installation.

```bash
npm i @angular-schule/workshop-styles
```

Next, open the file `src/styles.scss` in the project folder `book-rating` and add the following line:

```css
@use '@angular-schule/workshop-styles/index';
```

This will globally include the installed styles into the project and activate them.  
We will use these styles together during the workshop.


## 7.) Explore the Project

Take a few minutes to explore the structure of the generated project.  
This way, you’ll already be familiar with the key files before we explain the structure in detail during the workshop!


### We’re looking forward to it! 🙂

Once all participants are set up, we can start without any delays.  
If you encounter any errors, please send us the error message via email to [team@angular.schule](mailto:team@angular.schule) or bring your questions to the tech check.

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Updated: 11.05.2025

