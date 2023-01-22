# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with 

- tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

While working on this project, I made use of a slider library that stopped working how I needed it to. I had to creating my own slider component with Js then i learnt how to make use of Js built in function setInterval and react useEffect and useState hooks. With these and a data file of an array of objects to map through i was able set active state to render an object at set time interval.

```js
  const [state, setState] = useState(0);  
  
  useEffect(() => {
      const lastIndex = array.length - 1;
      if(state < 0 ){
        setState(lastIndex)
      } 
      if(state > lastIndex){
        setState(0)
      }
    }, [state, array]);

  useEffect(() => {
       let slider = setInterval(() => {
        setState(state + 1); 
       }, 3000);
       return () => clearInterval(slider)
    }, [state]);
```

### Useful resources

- [Nathan Sebhastian](https://sebhastian.com/setinterval-react/) - this helped me understand the use setinternval function togther with the useEffect hook in react.

- [Matt Claffey](https://mattclaffey.medium.com/adding-react-refs-to-an-array-of-items-96e9a12ab40c) - This helped me learn how properly store an array of item in a useRef hook accurately.

## Author

- Frontend Mentor - [@OGHENEMINE](https://www.frontendmentor.io/profile/OGHENEMINE)
- Twitter - [@Oghorodi_mine](https://twitter.com/Oghorodi_mine)

## Acknowledgments

- [geeksforgeeks](https://www.geeksforgeeks.org/how-to-use-react-countup-module-in-reactjs/);

- [Nathan Sebhastian](https://sebhastian.com/setinterval-react/);


